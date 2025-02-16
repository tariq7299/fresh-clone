import { OnboardingBusinessCapacitySkeleton } from '@/[lang]/professional/_components/skeletons';
import Form from './form';
import { getBusinessStepFormData } from '@/[lang]/professional/_lib/data';
import { Dictionary } from '@/dictionaries/types';

export default async function BusinessCapacityForm({ dict }: { dict: Dictionary }) {
    const storedTempCapacity = await getBusinessStepFormData("capacityStep") as number | null

    return <Form storedTempCapacity={storedTempCapacity} dict={dict} />
};