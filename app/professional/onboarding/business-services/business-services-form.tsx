import { getBusinessStepFormData } from '@/professional/_lib/data';
import Form from './form';
import { getAllServices } from '@/_lib/data';
import { StoredService } from '@/professional/_lib/definitions';




export default async function BusinessServicesForm() {

    // Get all services from backend
    const services = await getAllServices()
    if (services && services.length === 0 || !services) throw new Error("Services list is empty")

    // Get the services from the db that the user has submitted before
    // i need to use type assertion because the function returns other types of data, but here because the param of "servicesStep", so it will return the services only  

    const stroredTempServices = await getBusinessStepFormData("servicesStep") as StoredService[] | null



    return <Form services={services} stroredTempServices={stroredTempServices} />
}