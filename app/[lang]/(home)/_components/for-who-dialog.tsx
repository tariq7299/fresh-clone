"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/_ui/components/dialog";
import { useRouter } from "next/navigation";
import { Button } from "@/_ui/components/button";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";

interface ForWhoDialogProps {
    dict: {
        for_who: {
            title: string;
            subtitle: string;
            customer: {
                title: string;
                description: string;
            };
            professional: {
                title: string;
                description: string;
            };
            cancel: string;
        };
    };
}

export default function ForWhoDialog({ dict }: ForWhoDialogProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const loginRequiredForBooking = searchParams.get("loginRequiredForBooking") === "true";

    return (
        <Dialog open={true} onOpenChange={() => router.back()}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="rtl:font-cairo sr-only">{dict.for_who.title}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col gap-2 w-full max-w-md p-5 pt-5">
                        <h1 className="text-center text-2xl font-bold font-source-sans rtl:font-cairo">
                            {dict.for_who.title}
                        </h1>
                        <p className="text-muted-foreground text-sm text-center pb-4 rtl:font-cairo">
                            {dict.for_who.subtitle} <span className="font-bold font-cinzel">Lumière</span>?
                        </p>

                        <div className="flex flex-col gap-3">
                            {loginRequiredForBooking ? (
                                <>
                                    <Link href="/register?type=customer?loginRequiredForBooking=true" className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted" replace>
                                        <div>
                                            <p className="rtl:font-cairo">
                                                <span className="font-bold font-cinzel">Lumière</span> {dict.for_who.customer.title}
                                            </p>
                                            <p className="rtl:font-cairo">{dict.for_who.customer.description}</p>
                                        </div>
                                        <ArrowRightIcon className="size-5" />
                                    </Link>
                                    <Link href="/register?type=professional?loginRequiredForBooking=true" className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted" replace>
                                        <div>
                                            <p className="rtl:font-cairo">
                                                <span className="font-bold font-cinzel">Lumière</span> {dict.for_who.professional.title}
                                            </p>
                                            <p className="rtl:font-cairo">{dict.for_who.professional.description}</p>
                                        </div>
                                        <ArrowRightIcon className="size-5" />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link href="/register?type=customer" className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted">
                                        <div>
                                            <p className="rtl:font-cairo">
                                                <span className="font-bold font-cinzel">Lumière</span> {dict.for_who.customer.title}
                                            </p>
                                            <p className="rtl:font-cairo">{dict.for_who.customer.description}</p>
                                        </div>
                                        <ArrowRightIcon className="size-5 rtl:rotate-180" />
                                    </Link>
                                    <Link href="/register?type=professional" className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted">
                                        <div>
                                            <p className="rtl:font-cairo">
                                                <span className="font-bold font-cinzel">Lumière</span> {dict.for_who.professional.title}
                                            </p>
                                            <p className="rtl:font-cairo">{dict.for_who.professional.description}</p>
                                        </div>
                                        <ArrowRightIcon className="size-5 rtl:rotate-180" />
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={() => router.back()} className="rtl:font-cairo">
                        {dict.for_who.cancel}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}