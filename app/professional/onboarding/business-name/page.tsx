import BusinessNameForm from '@/professional/_components/business-name-form';
import { getBusinessStepFormData } from '@/professional/_lib/data';
import { StoredTempBusinessInfo } from '@/professional/_lib/definitions';

export default async function BusinessNamePage({ }) {

    const storedTempBusinessInfo = await getBusinessStepFormData("businessNameStep") as StoredTempBusinessInfo | null


    return (
        <BusinessNameForm storedTempBusinessInfo={storedTempBusinessInfo} />

    );
}