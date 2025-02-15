import { UserRole } from "@/[lang]/(auth)/_lib/definitions";
import { getDictionary } from "@/_lib/dictionaries";
import OtpDialog from "@/[lang]/business/_components/otp-dialog";

interface OtpVerificationPageProps {
    params: {
        lang: "en" | "ar"
    };
    searchParams?: Promise<{
        notVerified?: string;
        email?: string;
        userRole?: UserRole.Professional | UserRole.Customer;
    }>;
}

export default async function OtpVerificationPage({ params: { lang }, searchParams }: OtpVerificationPageProps) {

    const dict = await getDictionary(lang === "ar" ? "ar" : "en");
    const params = await searchParams;
    const email = params?.email || "";
    const userRole = params?.userRole || UserRole.Customer;

    if (!email) throw new Error("No email or user role provided for otp verfication!")

    return <OtpDialog dict={dict} userRole={userRole} email={email} loginRequiredForBooking={true} />

}