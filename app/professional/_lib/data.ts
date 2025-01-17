
import { getSession } from "@/(auth)/_lib/sessions"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"
import { StoredService } from "./definitions"
import { StoredTempCategory } from "../_components/business-category-form"

export const getBusinessStepFormData = async (stepName: string) => {

    try {

        const session = await getSession()
        const userId = session ? session.id : null
        if (!userId) redirect("/login?sessionExpired=true")

        console.log("userId", userId)

        if (stepName === "businessNameStep") {

            const storedTempBusinessInfo = await prisma.business.findUnique({
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


            return storedTempBusinessInfo
        } else if (stepName === "categoryStep") {

            const storedTempCategory = await prisma.business.findUnique({
                where: {
                    userId: userId
                },
                select: {
                    category_id: true
                }
            })

            const formattedCategory: StoredTempCategory = {
                id: storedTempCategory?.category_id,
            }

            return formattedCategory

        } else if (stepName === "servicesStep") {

            const storedTempServices = await prisma.business.findUnique({
                where: {
                    userId: userId
                },
                select: {
                    services: true
                }
            })

            console.log("storedTempServices", storedTempServices)

            // TODO: change the naminf from the db schema directly and remove this after
            const formattedServices = storedTempServices.services.map((storedService: {
                service_id: number,
                price: number,
                duration: number,
            }) => {
                return {
                    serviceId: storedService.service_id,
                    servicePrice: storedService.price,
                    serviceDuration: storedService.duration,
                    // serviceCurrency: "EGP"
                }
            })


            return formattedServices
        }

    } catch (error) {

        console.error('Database Error:', error);
        throw new Error('Failed to fetch form data');

    }
}

