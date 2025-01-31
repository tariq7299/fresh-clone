"use client"

import { useActionState, useEffect, useState } from 'react';
import { Button } from '@/_ui/components/custom/button';
import { Plus, EllipsisVertical } from 'lucide-react';
import { ServicesComboBox } from '@/professional/_components/services-combo-box';
import { handleSubmitBusinessServices } from '@/professional/_lib/form-actions';
import { useBusinessFormContext } from '../../../_lib/providers/business-form-provider';
import { cn } from '@/_lib/utils/utils';
import ServiceCard from '@/_ui/components/custom/service-card';
import { ApiService, ApiServicesWithCategory, Service, StoredService } from '@/professional/_lib/definitions';
import { ErrorFormState } from '@/_lib/definitions/definitions';

/**
 * Gets the initial list of services to display in the form
 * If there are stored services (from a previous session), it will return those
 * Otherwise, it will return the first 5 services from the available services list
 * 
 * @param services - List of available services grouped by category
 * @param stroredTempServices - List of previously stored services (if any)
 * @returns List of services with prices and durations
 */
function getInitialSelectedServicesList(services: ApiServicesWithCategory[], stroredTempServices: StoredService[] | null): Service[] {
    // If we have stored services from a previous session, use those
    if (stroredTempServices && stroredTempServices.length > 0) {
        return services.flatMap((serviceWithCategory: ApiServicesWithCategory) =>
            serviceWithCategory.services
                // Only include services that were previously stored
                .filter((service: ApiService) =>
                    stroredTempServices.some((storedService: StoredService) =>
                        storedService.serviceId === service.id))
                .map((service: ApiService) => {
                    // Find the stored service to get its price and duration
                    const storedService = stroredTempServices.find(
                        (stored: StoredService) => stored.serviceId === service.id
                    );
                    return {
                        serviceCategory: serviceWithCategory.name,
                        serviceId: service.id,
                        serviceName: service.name,
                        servicePrice: storedService?.servicePrice || 0,
                        serviceDuration: storedService?.serviceDuration || 0,
                        serviceCurrency: "EGP",
                    }
                })
        );
    }

    // If no stored services, return first 5 services as defaults
    return services.slice(0, 5).map(item => ({
        serviceCategory: item.name,
        serviceId: item.services[0].id,
        serviceName: item.services[0].name,
        servicePrice: item.services[0].price,
        serviceDuration: item.services[0].duration,
        serviceCurrency: "EGP",
    }))
}



export default function Form({ services, stroredTempServices }: { services: ApiServicesWithCategory[], stroredTempServices: StoredService[] | null }) {

    // I am using this because I want to show the loading state in button found in the parent component
    const { setIsLoading } = useBusinessFormContext()
    const initialSelectedServicesList = getInitialSelectedServicesList(services, stroredTempServices);
    const [selectedServicesList, setSelectedServicesList] = useState<Service[]>(initialSelectedServicesList)
    const [selectedService, setSelectedService] = useState({
        serviceCategory: "",
        serviceId: -1,
        serviceName: "",
        servicePrice: 0,
        serviceDuration: 0,
        serviceCurrency: "",
    })

    const INITIAL_FORM_STATE: ErrorFormState<{ service?: string } | null, Service[]> = {
        success: false,
        clientFieldsErrors: null,
        apiDataResponse: null,
        apiMsgs: "",
        formData: selectedServicesList
    }

    const [formState, setFormState] = useState(INITIAL_FORM_STATE)
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        setIsLoading(isPending)
    }, [isPending])

    function handleAddingService() {

        if (selectedService.serviceId === -1) {
            return
        }

        // If the service is already in the list, don't add it, and just clear the selected service
        const isServiceAlreadyInList = selectedServicesList?.some(item => item.serviceId === selectedService.serviceId)

        if (isServiceAlreadyInList) {

            // Clear the selected service (this will just unselect the service form the combobox element)
            setSelectedService({
                serviceCategory: "",
                serviceId: -1,
                serviceName: "",
                servicePrice: 0,
                serviceDuration: 0,
                serviceCurrency: "",
            })

        } else {
            // Add the service the user just choosed to the list of selected services
            setSelectedServicesList([{
                serviceCategory: selectedService.serviceCategory,
                serviceId: selectedService.serviceId,
                serviceName: selectedService.serviceName,
                servicePrice: selectedService.servicePrice,
                serviceDuration: selectedService.serviceDuration,
                serviceCurrency: "EGP"
            }, ...selectedServicesList])

            // Clear the selected service (this will just unselect the service form the combobox element)
            setSelectedService({
                serviceCategory: "",
                serviceId: -1,
                serviceName: "",
                servicePrice: 0,
                serviceDuration: 0,
                serviceCurrency: "",
            })
        }
    }

    // Handle form submission
    // Iam handling the form submission manually instead of using useActionState because there is no inputs in the form, and instead the formData is a state which i manage manually
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setIsPending(true)
        const result = await handleSubmitBusinessServices(selectedServicesList);
        setFormState(result)
        setIsPending(false)
        return
    };

    return <form onSubmit={handleSubmit} id="business-onboarding-form" className="flex flex-col gap-2 w-full ">
        {/* Main container with responsive max width and vertical padding */}


        {/* Display validation error if service selection is empty */}
        {formState.clientFieldsErrors?.service && <p className="text-destructive text-sm py-2">{formState.clientFieldsErrors?.service}</p>}

        {/* Service selection controls - ComboBox and Add button */}
        <div className={cn('flex max-w-xl gap-2 justify-center items-center mx-auto w-full pb-4',
            // Disable interaction while form is submitting
            isPending && "pointer-events-none opacity-50"
        )}>
            {/* Dropdown for selecting services */}
            <ServicesComboBox
                className=' w-full '
                servicesList={services}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
            />

            {/* Add button with plus icon */}
            <Button type='button' onClick={handleAddingService} className='font-bold flex items-center gap-2'>
                Add<Plus className='size-4' />
            </Button>
        </div>

        {/* Grid container for selected service cards */}
        <div className={cn("grid grid-cols-1 gap-4",
            // Disable interaction while form is submitting 
            isPending && "pointer-events-none opacity-50"
        )}>
            {/* Map through selected services and render a card for each */}
            {selectedServicesList.map((selectedService) => (
                <ServiceCard
                    key={selectedService.serviceId}
                    service={selectedService}
                    services={selectedServicesList}
                    setServices={setSelectedServicesList}
                />
            ))}
        </div>

    </form>
}