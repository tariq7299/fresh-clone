import { OnboardingBusinessCapacitySkeleton } from '@/ui/skeletons';
import Form from './form';
import { getBusinessStepFormData } from '@/professional/_lib/data';



export default async function BusinessCapacityForm() {

    const storedTempCapacity = await getBusinessStepFormData("capacityStep") as number | null



    return <Form storedTempCapacity={storedTempCapacity} />
}