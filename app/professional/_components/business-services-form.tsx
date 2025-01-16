"use client"

import { useState } from 'react';
import { Button } from '@/ui/components/custom/button';
import { Plus, EllipsisVertical } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/ui/components/dropdown-menu';
import EditServiceDialog from '@/professional/_components/edit-service-dialog';
import { ServicesComboBox } from '@/professional/_components/services-combo-box';


export type Service = {
    id: number,
    name: string,
    desc: string,
    duration: number,
    price: number
}

export type servicesList = {
    name: string,
    services: Service[]
}[]

export type selectedService = {
    serviceCategory: string,
    serviceId: string,
    serviceName: string,
    servicePrice: string,
    serviceDuration: string,
    serviceCurrency: string,
}


export default function BusinessServicesForm({ services }: { services: servicesList }) {

    const [servicesList, setServicesList] = useState(services)

    const initialSelectedServicesList = servicesList.length > 0 ? servicesList.slice(0, 5).map(item => ({
        serviceCategory: item.name,
        serviceId: item.services[0].id.toString(),
        serviceName: item.services[0].name,
        servicePrice: item.services[0].price.toString(),
        serviceDuration: item.services[0].duration.toString(),
        serviceCurrency: "EGP",
    })) : []

    const [selectedServicesList, setSelectedServicesList] = useState<selectedService[]>(initialSelectedServicesList)


    const [selectedService, setSelectedService] = useState({
        serviceCategory: "",
        serviceId: "",
        serviceName: "",
        servicePrice: "",
        serviceDuration: "",
        serviceCurrency: "",
    })

    function handleAddingService() {

        if (selectedService.serviceId === "") {
            return
        }

        // If the service is already in the list, don't add it, and just clear the selected service

        const isServiceAlreadyInList = selectedServicesList?.some(item => item.serviceId === selectedService.serviceId)

        if (isServiceAlreadyInList) {
            setSelectedService({
                serviceCategory: "",
                serviceId: "",
                serviceName: "",
                servicePrice: "",
                serviceDuration: "",
                serviceCurrency: "",
            })
        } else {
            setSelectedServicesList([{
                serviceCategory: selectedService.serviceCategory,
                serviceId: selectedService.serviceId,
                serviceName: selectedService.serviceName,
                servicePrice: selectedService.servicePrice,
                serviceDuration: selectedService.serviceDuration,
                serviceCurrency: "EGP"
            }, ...selectedServicesList])
            setSelectedService({
                serviceCategory: "",
                serviceId: "",
                serviceName: "",
                servicePrice: "",
                serviceDuration: "",
                serviceCurrency: "",
            })
        }
    }


    return <form>
        <div className="flex flex-col gap-2 w-full max-w-4xl p-5 py-24 min-h-dvh items-stretch m-auto space-y-5 ">

            <div className="text-start space-y-1">

                <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                <h1 className="text-3xl lg:text-4xl font-bold font-source-sans">Build Your Service List</h1>


                <p className="text-sm text-muted-foreground ">Choose a service then press <span className="font-bold text-accent-600">Add</span> to add it to your list.</p>
            </div>

            {/* {formState.clientFieldsErrors?.category_id && <p className="text-destructive text-sm py-2">You must select a category</p>} */}
            <div className='flex max-w-xl gap-2 justify-center items-center mx-auto w-full'>

                <ServicesComboBox className=' w-full' servicesList={servicesList} selectedService={selectedService} setSelectedService={setSelectedService} setServicesList={setServicesList} />

                <Button type='button' onClick={handleAddingService} className='font-bold flex items-center gap-2'>Add<Plus className='size-4' /></Button>

            </div>

            <div className="grid grid-cols-1 gap-4">

                {selectedServicesList.map((selectedService, index) => (
                    <div key={selectedService.serviceId} className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                        <div>
                            <p className='text-lg font-bold'>{selectedService.serviceName}</p>
                            <p className='text-muted-foreground'>{selectedService.serviceDuration}min</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold'    >{selectedService.serviceCurrency} {selectedService.servicePrice}</p>

                            <DropdownMenu>

                                <DropdownMenuTrigger asChild >
                                    <Button variant="ghost">
                                        <EllipsisVertical className='size-5' />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='space-y-'>

                                    <DropdownMenuItem className='py-2 font-semibold' asChild >
                                        <EditServiceDialog selectedServicesList={selectedServicesList} setSelectedServicesList={setSelectedServicesList} service={selectedService} />
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='py-2 text-destructive font-semibold' onClick={() => {
                                        setSelectedServicesList(selectedServicesList.filter(item => item.serviceId !== selectedService.serviceId))
                                    }}>
                                        <p>Delete</p>
                                    </DropdownMenuItem>

                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                ))}


            </div>
            {/* <Button type="submit">Next</Button> */}
        </div>
    </form>
}