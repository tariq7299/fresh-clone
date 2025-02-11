
import { getSession } from "@/[lang]/(auth)/_lib/sessions";
import prisma from "@/_lib/prisma";
import { redirect } from "next/navigation";
import { StoredTempCategory } from "../onboarding/business-category/business-category-form";
import { BusinessOnboarding } from "./definitions";
import { fetchApi } from "@/_lib/utils/api/fetch-utils";
import { ApiResponse } from "@/_lib/definitions/api";

import { redirectToLoginIfNotAuthenticated } from "@/[lang]/(auth)/_lib/redirect-to-login-if-not-authenticated";

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

export const handleCreatingNewbusiness = async (): Promise<ApiResponse<BusinessOnboarding>> => {

    const session = await getSession()
    const userId = session ? session.id : null
    if (!userId) {
        redirect("/login?sessionExpired=true")
    }

    // try {

    const newBusiness = await prisma.business.findUnique({
        where: {
            userId: userId
        },
        select: {
            id: true,
            name_ar: true,
            name_en: true,
            description_ar: true,
            description_en: true,
            website_url: true,
            capacity: true,
            category_id: true,
            gender_of_customers: true,
            services: {
                select: {
                    service_id: true,
                    duration: true,
                    price: true
                }
            },
            location: true
        }
    })

    const formattedBusiness = {
        ...newBusiness,
        location: {
            longitude: newBusiness?.location?.lng,
            latitude: newBusiness?.location?.lat,
            place_id: newBusiness?.location?.place_id,
            address: newBusiness?.location?.address,
            district: newBusiness?.location?.district,
            city: newBusiness?.location?.city,
            country: newBusiness?.location?.country,
            directions: newBusiness?.location?.directions,
            street: newBusiness?.location?.street,
            apartment: newBusiness?.location?.apartment,
            building: newBusiness?.location?.building,
            // floor: newBusiness?.location?.floor,
        },
        gender: newBusiness?.gender_of_customers,
        is_online: newBusiness?.location?.online_business
    }


    delete formattedBusiness.gender_of_customers
    delete formattedBusiness.id

    // Send request to   backend to create a business  

    const response = await fetchApi<ApiResponse<BusinessOnboarding>>("/businesses", {
        method: "POST",
        body: formattedBusiness
    })

    if (response.success) {
        return response
    }
    return response


}

export const removeTempBusinessFormSumbissions = async (businessId: number) => {

    try {
        // First delete all related services
        await prisma.$transaction(async (tx) => {
            await tx.businessService.deleteMany({
                where: {
                    businessId: businessId
                }
            });
            await tx.businessLocation.deleteMany({
                where: {
                    businessId: businessId
                }
            });
            await tx.business.delete({
                where: {
                    id: businessId
                }
            });
        });
    } catch (error) {
        console.error('Error deleting temporary business:', error);
    }
}

export const getAppointments = async () => {

    // let result;

    // try {
    const res = await fetchApi("/businesses/1/bookings", {
        method: "GET"
    })

    // const successMsg = setApiSuccessMsg({ successResponse: res })


    if (res.success) {
        return res?.data?.bookings
    }

    redirectToLoginIfNotAuthenticated(res.apiMsgs, ["sessionEnded=true"])
    return []


    // return appointments?.data || []
    // } catch (error) {
    // console.error('Error fetching appointments:', error);
    // const errorMsg = setApiErrorMsg({ errResponse: error })
    // result = {
    //     apiResponse: error,
    //     success: false,
    //     data: null,
    //     msg: errorMsg,
    // }

    // }

    // if (result.success) {
    //     return result.data
    // }


    // return []

}

