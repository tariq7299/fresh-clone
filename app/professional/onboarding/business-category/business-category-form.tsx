
import { getAllCategories } from "@/lib/data";
import { getBusinessStepFormData } from "@/professional/_lib/data";
import Form from "./form";


export type Category = {
    id: number,
    name: string,
    description: string,
}

export type StoredTempCategory = {
    id: number | null,
}

export default async function BusinessCategoryForm() {

    const storedTempCategory = await getBusinessStepFormData("categoryStep") as StoredTempCategory | null

    const categories = await getAllCategories()

    if (!categories || categories.length === 0) throw new Error("Failed to fetch categories")


    return <Form storedTempCategory={storedTempCategory} categories={categories} />

}