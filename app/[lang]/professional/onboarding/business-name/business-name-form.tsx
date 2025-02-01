import { getBusinessStepFormData } from '@/[lang]/professional/_lib/data';
import Form from './form';
import { StoredTempBusinessInfo } from '@/[lang]/professional/_lib/definitions';

export default async function BusinessNameForm() {


    const storedTempBusinessInfo = await getBusinessStepFormData("businessNameStep") as StoredTempBusinessInfo | null


    return <Form storedTempBusinessInfo={storedTempBusinessInfo} />
}