import { OnboardingBusinessCapacitySkeleton } from '@/professional/_components/skeletons';
import Form from './form';
import { getBusinessStepFormData } from '@/professional/_lib/data';



export default async function BusinessCapacityForm() {

    const storedTempCapacity = await getBusinessStepFormData("capacityStep") as number | null



    return <Form storedTempCapacity={storedTempCapacity} />
}