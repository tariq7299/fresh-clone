import { getAllServices } from '@/lib/data';
import BusinessServicesForm from '@/professional/_components/business-services-form';

export default async function BusinessServicesPage() {


    // const storedStepCategory = await getBusinessStepFormData("categoryStep")



    const services = await getAllServices()


    return <BusinessServicesForm services={services} />
}