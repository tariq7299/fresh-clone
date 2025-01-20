
import { getSession } from "@/(auth)/_lib/sessions";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { StoredTempCategory } from "../onboarding/business-category/business-category-form";
import { BusinessLocation, StoredTempLocation } from "./definitions";
import { Nullable } from "@/lib/utils/utils";

export const getBusinessStepFormData = async (stepName: string) => {

    if (!stepName) throw new Error("Step name is required")

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId) {
        redirect("/login?sessionExpired=true")
    }

    try {


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
                    gender_of_customers: true,
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
                id: storedTempCategory?.category_id ?? null,
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

            // This error is not from me ! there is bug in the 
            const formattedServices: {
                serviceId: number | null,
                servicePrice: number | null,
                serviceDuration: number | null,
            }[] | null = storedTempServices ? storedTempServices?.services.map((storedService: {
                service_id: number | null,
                price: number | null,
                duration: number | null,
            }) => {
                return {
                    serviceId: storedService.service_id,
                    servicePrice: storedService.price,
                    serviceDuration: storedService.duration,
                    // serviceCurrency: "EGP"
                }
            }) : null


            return formattedServices
        } else if (stepName === "locationStep") {

            const storedTempLocation = await prisma.business.findUnique({
                where: {
                    userId: userId
                },
                select: {
                    location: true
                }
            })

            return storedTempLocation ? storedTempLocation?.location : null
        } else if (stepName === "capacityStep") {

            const storedTempCapacity = await prisma.business.findUnique({
                where: {
                    userId: userId
                },
                select: {
                    capacity: true
                }
            })

            return storedTempCapacity ? storedTempCapacity?.capacity : null
        }

        return null

    } catch (error) {

        console.error('Database Error:', error);
        throw new Error('Failed to fetch form data');


    }
}

