
import { getSession } from "@/(auth)/_lib/sessions"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export const getBusinessStepFormData = async (stepName: string) => {

    try {

        const session = await getSession()
        const userId = session ? session.id : null
        if (!userId) redirect("/login?sessionExpired=true")

        console.log("userId", userId)

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
        } else if (stepName === "categoryStep") {

            const storedStepCategory = await prisma.business.findUnique({
                where: {
                    userId: userId
                },
                select: {
                    category_id: true
                }
            })

            return storedStepCategory
        } else if (stepName === "servicesStep") {

            const storedStepServices = await prisma.business.findUnique({
                where: {
                    userId: userId
                },
                select: {
                    services: true
                }
            })

            console.log("storedStepServices", storedStepServices)

            return storedStepServices.services
        }

    } catch (error) {

        console.error('Database Error:', error);
        throw new Error('Failed to fetch form data');

    }
}

