
import { getAllCategories } from "@/_lib/data";
import { getBusinessStepFormData } from "@/[lang]/professional/_lib/data";
import Form, { StoredTempCategory } from "./form";




export default async function BusinessCategoryForm({ dict, lang }: { dict: any, lang: "en" | "ar" }) {

    const storedTempCategory = await getBusinessStepFormData("categoryStep") as StoredTempCategory | null

    const categories = await getAllCategories(lang)

    if (!categories || categories.length === 0) throw new Error("Failed to fetch categories")


    return <Form storedTempCategory={storedTempCategory} categories={categories} dict={dict} />

}