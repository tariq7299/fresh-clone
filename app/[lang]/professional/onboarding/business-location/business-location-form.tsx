import { StoredTempLocation } from "../../_lib/definitions";
import { getBusinessStepFormData } from "@/[lang]/professional/_lib/data";
import Form from "./form";
import { Dictionary } from "@/dictionaries/types";


// TODO: Remove most of that code, and put it in didcated hook or provider, maybe use
export default async function BusinessLocationForm({ dict }: { dict: Dictionary }) {


    const storedTempLocation = await getBusinessStepFormData("locationStep") as StoredTempLocation | null

    return <Form storedTempLocation={storedTempLocation} dict={dict} />

};
