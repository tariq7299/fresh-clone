import BusinessNameForm from '@/professional/_components/business-name-form';
import { getBusinessStepFormData } from '@/professional/_lib/data';

export default async function BusinessNamePage({ }) {

    const storedStepBusinessInfo = await getBusinessStepFormData("businessNameStep")

    // try {
    //     const newBusiness = await prisma.business.create({
    //         data: {
    //             userId: 1,
    //             name_ar: "صالون تجميل",
    //             name_en: "Beauty Salon",
    //             description_ar: "this is desc to buisness arabic",
    //             description_en: "this is desc to buisness english",
    //             website_url: "https://beautysalon.com",
    //             capacity: 20,
    //             category_id: 1,
    //             address: "456 Beauty Street",
    //             gender: "female",
    //         },
    //     })
    //     console.log("newBusiness", newBusiness)
    // } catch (error) {
    //     console.error("Error details:", error)
    // }

    // // Find many
    // const users = await prisma.business.findMany({
    //     where: {
    //         userId: 1
    //     }
    // })

    // console.log("storedStepBusinessInfoCLIENT", storedStepBusinessInfo)


    return (
        <BusinessNameForm storedStepBusinessInfo={storedStepBusinessInfo} />

    );
}