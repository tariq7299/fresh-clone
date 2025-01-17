import BusinessNameForm from '@/professional/_components/business-name-form';
import { getBusinessStepFormData } from '@/professional/_lib/data';

export default async function BusinessNamePage({ }) {

    const storedTempBusinessInfo = await getBusinessStepFormData("businessNameStep")


    return (
        <BusinessNameForm storedTempBusinessInfo={storedTempBusinessInfo} />

    );
}