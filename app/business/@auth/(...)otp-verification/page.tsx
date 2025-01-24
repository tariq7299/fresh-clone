import RegisterForm from "@/(auth)/_components/register-form";
import { Alert, AlertDescription, AlertTitle } from "@/ui/components/alert";
import { Button } from "@/ui/components/button";
import { Dialog, DialogFooter, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/ui/components/dialog";
import { AlertCircle } from "lucide-react";
import { UserRole } from "@/(auth)/_lib/definitions";
import OtpForm from "@/(auth)/_components/otp-form";

export default async function OtpVerificationPage(props: {
    searchParams?: Promise<{
        notVerified?: string;
        email?: string;
        userRole?: UserRole.Professional | UserRole.Customer;
    }>
}) {

    const searchParams = await props.searchParams
    const notVerified = searchParams?.notVerified || "";
    const email = searchParams?.email || "";
    const userRole = searchParams?.userRole || UserRole.Customer;

    if (!email || !userRole) throw new Error("No email or user role provided for otp verfication!")

    return <Dialog open={true}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Register</DialogTitle>
                <DialogDescription>
                    Please register to continue
                </DialogDescription>
            </DialogHeader>
            <>
                {notVerified && (
                    <div className="absolute top-0 left-0 w-full pt-20 p-5">

                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Email Verification Required</AlertTitle>
                            <AlertDescription>
                                Your account requires email verification to continue. Please check your email for a 6-digit verification code and enter it below.
                            </AlertDescription>
                        </Alert>
                    </div>
                )}

                <div className="mt-auto flex flex-col gap-2 w-full max-w-md p-5 ">



                    <h1 className="text-center text-2xl font-bold font-source-sans">Otp verification
                    </h1>

                    <p className="text-muted-foreground text-sm text-center pb-4">Please enter the 6-digit verification code sent to your email address</p>

                    {/* Iam not using Suspense because Iam passing the userRole as a prop to the OtpForm component, and not like in login-form.tsx where Iam using useSearchParams */}
                    <OtpForm email={email} userRole={userRole} />


                </div>
            </>
            <DialogFooter>
                <Button>Register</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>

}