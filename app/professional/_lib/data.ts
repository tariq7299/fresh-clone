
import { getSession } from "@/(auth)/_lib/sessions"
import prisma from "@/lib/prisma"

export const getBusinessStepFormData = async (stepName: string) => {

    try {

        const session = await getSession()
        const userId = session ? session.id : null
        if (!userId) throw new Error("Error getting user id!")

        if (stepName === "businessNameStep") {

            const storedStepBusinessInfo = await prisma.business.findUnique({
                where: {
                    userId: userId
                },
                select: {
                    name_ar: true,
                    name_en: true,
                    description_ar: true,
                    description_en: true,
                    website_url: true,
                    capacity: true,
                }
            })


            return storedStepBusinessInfo
        } else if (stepName === "storedStepCategory") {

            const storedStepCategory = await prisma.business.findUnique({
                where: {
                    userId: userId
                },
                select: {
                    category_id: true
                }
            })

            return storedStepCategory
        }

    } catch (error) {

        console.error('Database Error:', error);
        throw new Error('Failed to fetch form data');

    }
}
