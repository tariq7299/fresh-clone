
import { getSession } from "@/(auth)/_lib/sessions"
import prisma from "@/lib/prisma"

export const getBusinessStepFormData = async () => {

    try {

        const session = await getSession()
        const userId = session ? session.id : null
        // console.log("session", session)
        // console.log("userId", userId)
        if (!userId) throw new Error("Error getting user id!")

        // console.log("userId", userId)

        const storedStepBusinessInfo = await prisma.business.findFirst({
            where: {
                userId: Number(userId)
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

        // console.log("storedStepBusinessInfo", storedStepBusinessInfo)

        // const successMsg = setApiSuccessMsg({ successResponse: response })

        return storedStepBusinessInfo

        // return storedStepBusinessInfo

    } catch (error) {

        console.error('Database Error:', error);
        throw new Error('Failed to fetch form data');

    }
}