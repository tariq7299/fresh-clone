import { getAllServices } from '@/lib/data';
import BusinessServicesForm from '@/professional/_components/business-services-form';
import { getBusinessStepFormData } from '@/professional/_lib/data';

export default async function BusinessServicesPage() {


    // const storedStepCategory = await getBusinessStepFormData("categoryStep")



    const services = await getAllServices()

    const storedServices = await getBusinessStepFormData("servicesStep")

    // console.log("storedServices", storedServices)


    return <BusinessServicesForm services={services} storedServices={storedServices} />
}