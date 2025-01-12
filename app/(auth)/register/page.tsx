
import RegisterForm from "../_components/register-form";
import { UserRole } from "../_lib/definitions";

export default async function RegisterPage(props: {
    searchParams?: Promise<{
        type?: string
    }>
}) {

    const searchParams = await props.searchParams
    const type = searchParams?.type || "";

    if (!type) throw new Error("No user type provided for register page!")

    return (

        <div className="mt-auto flex flex-col gap-2 w-full max-w-md p-5 pt-20">


            <h1 className="text-center text-2xl font-bold font-source-sans">Sign up
            </h1>
            <p className="text-muted-foreground text-sm text-center pb-4">{type === UserRole.Professional ? "Create your account and streamline your salon management today." : "Create your account and book salons and spas near you today."}</p>

            <RegisterForm userType={type} />

        </div>

    )
}
