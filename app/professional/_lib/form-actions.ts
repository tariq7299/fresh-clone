"use server"

export const handleSubmit = async (formState: any, formData: FormData) => {
    console.log("formState", formState)
    console.log("formData", formData)
    return formState
}