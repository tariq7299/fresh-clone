import BusinessCapacityForm from "@/professional/_components/business-capacity-form";
import { getBusinessStepFormData } from "@/professional/_lib/data";

export default async function BusinessCapacityPage() {

    const storedTempCapacity = await getBusinessStepFormData("capacityStep")

    return <BusinessCapacityForm storedTempCapacity={storedTempCapacity} />
}
