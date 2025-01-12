'use client';

import { useState } from 'react';
import { ApiError } from '@/lib/definitions/api';
import { Button } from "@/ui/components/custom/button";
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";
import { Textarea } from "@/ui/components/textarea";
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function ProfessionalOnboardingPage() {


    return (
        <form>
            <div className="flex flex-col gap-2 w-full max-w-4xl p-5 py-24 min-h-dvh items-stretch m-auto space-y-5">

                <div className="text-start space-y-1">

                    <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                    {/* Change this to more descriptive title */}
                    <h1 className="text-3xl lg:text-4xl font-bold font-source-sans"> What's your speciality?</h1>

                    <p className="text-sm text-muted-foreground ">Choose a category that best describes your business.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-stretch md:grid-cols-3">

                    <div className='rounded-lg p-5 flex flex-col justify-center items-star gap-3 col-span-1 border-2 border-accent relative'>
                        <div className="absolute top-2 right-2 bg-accent text-background rounded-lg p-0.5"><CheckIcon className="size-5" /></div>


                        <Image
                            src="/categories/hair.png"
                            alt="hair icon"
                            width={32}
                            height={32}
                        />

                        <h1 className='font-black'>Haircuts & styling</h1>
                    </div>

                    <div className='rounded-lg p-5 flex flex-col justify-center items-start border-1.5 border-gray-200 gap-3 col-span-1'>
                        <Image
                            src="/categories/hair.png"
                            alt="hair icon"
                            width={32}
                            height={32}
                        />

                        <h1 className='font-black'>Haircuts & styling</h1>
                    </div>
                    <div className='rounded-lg p-5 flex flex-col justify-center items-start border-1.5 border-gray-200 gap-3 col-span-1'>
                        <Image
                            src="/categories/hair.png"
                            alt="hair icon"
                            width={32}
                            height={32}
                        />

                        <h1 className='font-black'>Haircuts & styling</h1>
                    </div>
                    <div className='rounded-lg p-5 flex flex-col justify-center items-start border-1.5 border-gray-200 gap-3 col-span-1'>
                        <Image
                            src="/categories/hair.png"
                            alt="hair icon"
                            width={32}
                            height={32}
                        />

                        <h1 className='font-black'>Haircuts & styling</h1>
                    </div>
                    <div className='rounded-lg p-5 flex flex-col justify-center items-start border-1.5 border-gray-200 gap-3 col-span-1'>
                        <Image
                            src="/categories/hair.png"
                            alt="hair icon"
                            width={32}
                            height={32}
                        />

                        <h1 className='font-black'>Haircuts & styling</h1>
                    </div>
                    <div className='rounded-lg p-5 flex flex-col justify-center items-start border-1.5 border-gray-200 gap-3 col-span-1'>
                        <Image
                            src="/categories/hair.png"
                            alt="hair icon"
                            width={32}
                            height={32}
                        />

                        <h1 className='font-black'>Haircuts & styling</h1>
                    </div>
                    <div className='rounded-lg p-5 flex flex-col justify-center items-start border-1.5 border-gray-200 gap-3 col-span-1'>
                        <Image
                            src="/categories/hair.png"
                            alt="hair icon"
                            width={32}
                            height={32}
                        />

                        <h1 className='font-black'>Haircuts & styling</h1>
                    </div>
                    <div className='rounded-lg p-5 flex flex-col justify-center items-start border-1.5 border-gray-200 gap-3 col-span-1'>
                        <Image
                            src="/categories/hair.png"
                            alt="hair icon"
                            width={32}
                            height={32}
                        />

                        <h1 className='font-black'>Haircuts & styling</h1>
                    </div>
                    <div className='rounded-lg p-5 flex flex-col justify-center items-start border-1.5 border-gray-200 gap-3 col-span-1'>
                        <Image
                            src="/categories/hair.png"
                            alt="hair icon"
                            width={32}
                            height={32}
                        />

                        <h1 className='font-black'>Haircuts & styling</h1>
                    </div>
                    <div className='rounded-lg p-5 flex flex-col justify-center items-start border-1.5 border-gray-200 gap-3 col-span-1'>
                        <Image
                            src="/categories/hair.png"
                            alt="hair icon"
                            width={32}
                            height={32}
                        />

                        <h1 className='font-black'>Haircuts & styling</h1>
                    </div>

                </div>


            </div>
        </form>
    );
}