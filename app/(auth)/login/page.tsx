
import LoginForm from "../_components/loginform";

export default function LoginPage() {

    return (

        <div className="mt-auto flex flex-col gap-2 w-full max-w-md p-5 pt-20">

            <h1 className="text-center text-2xl font-bold font-source-sans">Sign in
            </h1>
            <p className="text-muted-foreground text-sm text-center pb-4">Welcome back! Enter your details to access your account.</p>

            <LoginForm />

        </div>

    )
}