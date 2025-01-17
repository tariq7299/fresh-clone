import { getAllServices } from '@/lib/data';
import BusinessServicesForm from '@/professional/_components/business-services-form';
import { getBusinessStepFormData } from '@/professional/_lib/data';

export default async function BusinessServicesPage() {

    // Get all services from backend
    const services = await getAllServices()
    if (services && services.length === 0 || !services) throw new Error("Services list is empty")

    // Get the services from the db that the user has submitted before
    const stroredTempServices = await getBusinessStepFormData("servicesStep")


    return <BusinessServicesForm services={services} stroredTempServices={stroredTempServices} />
}