"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/_ui/components/dialog";
import { useRouter } from "next/navigation";
import LoginForm from "@/[lang]/(auth)/_components/login-form";
import { Button } from "@/_ui/components/button";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams } from "next/navigation";

export default function ForWhoDialog() {
    const router = useRouter();

    const searchParams = useSearchParams();

    const loginRequiredForBooking = searchParams.get("loginRequiredForBooking") === "true";

    return (
        <Dialog open={true} onOpenChange={() => router.back()}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>For Who?</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className=" flex flex-col gap-2 w-full max-w-md p-5 pt-5">


                        <h1 className="text-center text-2xl font-bold font-source-sans">Get Started with the Right Experience
                        </h1>
                        <p className="text-muted-foreground text-sm text-center pb-4">How would you like to use <span className="font-bold font-cinzel">Lumière</span>?</p>

                        <div className="flex flex-col gap-3">
                            {loginRequiredForBooking ? (
                                <>

                                    <Link href="/register?type=customer?loginRequiredForBooking=true" className="flex  justify-between items-center p-4 border rounded-lg hover:bg-muted" replace>
                                        <div>
                                            <p><span className="font-bold font-cinzel">Lumière</span> for customers</p>
                                            <p>Book salons and spas near you</p>
                                        </div>
                                        <ArrowRightIcon className="size-5" />
                                    </Link>

                                    <Link href="/register?type=professional?loginRequiredForBooking=true" className="flex  justify-between items-center p-4 border rounded-lg hover:bg-muted" replace>
                                        <div>
                                            <p><span className="font-bold font-cinzel">Lumière</span> for professionals</p>
                                            <p>Manage and grow your business</p>
                                        </div>
                                        <ArrowRightIcon className="size-5" />
                                    </Link>
                                </>

                            ) : (

                                <>
                                    <Link href="/register?type=customer" className="flex  justify-between items-center p-4 border rounded-lg hover:bg-muted">
                                        <div>
                                            <p><span className="font-bold font-cinzel">Lumière</span> for customers</p>
                                            <p>Book salons and spas near you</p>
                                        </div>
                                        <ArrowRightIcon className="size-5" />
                                    </Link>

                                    <Link href="/register?type=professional" className="flex  justify-between items-center p-4 border rounded-lg hover:bg-muted">
                                        <div>
                                            <p><span className="font-bold font-cinzel">Lumière</span> for professionals</p>
                                            <p>Manage and grow your business</p>
                                        </div>
                                        <ArrowRightIcon className="size-5" />
                                    </Link>
                                </>
                            )}
                        </div>



                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={() => router.back()}>
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}