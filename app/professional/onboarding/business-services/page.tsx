"use client"

import { getBusinessStepFormData } from '@/professional/_lib/data';
import { getBusinessCategories } from '@/lib/data';
import BusinessCategoryForm from '@/professional/_components/business-category';
import { Combobox } from '@/ui/components/custom/combo-box';
import { useState } from 'react';
import { Button } from '@/ui/components/custom/button';
// import { PlusIcon } from '@heroicons/react/24/outline';
import { Plus, EllipsisVertical } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/ui/components/dropdown-menu';
import EditServiceDialog from '@/professional/_components/edit-service-dialog';

export default function BusinessServicesPage() {

    const values = [
        { id: 1, name: "Hair Styling" },
        { id: 2, name: "Nail Care" },
        { id: 3, name: "Massage Therapy" },
        { id: 4, name: "Facial Treatments" },
        { id: 5, name: "Waxing" },
        { id: 6, name: "Makeup Services" },
        { id: 7, name: "Hair Coloring" },
        { id: 8, name: "Manicure" },
        { id: 9, name: "Pedicure" },
        { id: 10, name: "Body Treatments" },
        { id: 11, name: "Eyelash Extensions" },
        { id: 12, name: "Eyebrow Shaping" },
        { id: 13, name: "Hair Extensions" },
        { id: 14, name: "Deep Tissue Massage" },
        { id: 15, name: "Swedish Massage" },
        { id: 16, name: "Spa Packages" },
        { id: 17, name: "Skin Care" },
        { id: 18, name: "Hair Removal" },
        { id: 19, name: "Tanning Services" },
        { id: 20, name: "Beauty Consultation" }
    ]

    const [field, setField] = useState({
        value: "",
        onChange: (value: string) => {
            setField({ value, onChange: (value: string) => { } })
        }
    })

    // const storedStepCategory = await getBusinessStepFormData("categoryStep")

    // const categories = await getBusinessCategories()

    return <form>
        <div className="flex flex-col gap-2 w-full max-w-4xl p-5 py-24 min-h-dvh items-stretch m-auto space-y-5 ">

            <div className="text-start space-y-1">

                <p className="text-sm text-muted-foreground text-start"> Account setup</p>

                <h1 className="text-3xl lg:text-4xl font-bold font-source-sans">Build Your Service List</h1>

                <p className="text-sm text-muted-foreground ">Choose a service then press <span className="font-bold text-accent-600">Add</span> to add it to your list.</p>
            </div>

            {/* {formState.clientFieldsErrors?.category_id && <p className="text-destructive text-sm py-2">You must select a category</p>} */}
            <div className='flex max-w-xl gap-2 justify-center items-center mx-auto w-full'>
                <Combobox className=' w-full' values={values} field={field} />
                <Button className='font-bold flex items-center gap-2'>Add<Plus className='size-4' /></Button>

            </div>

            <div className="grid grid-cols-1 gap-4">
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='border-l-8 border-l-secondary-400 border-t-1 border-r-1 border-b-1 border border-gray-200 p-5 flex justify-between items-center rounded-lg'>
                    <div>
                        <p className='text-lg font-bold'>Manicure</p>
                        <p className='text-muted-foreground'>45min</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>EGP 27</p>

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild >
                                <Button variant="ghost">
                                    <EllipsisVertical className='size-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='space-y-'>

                                <DropdownMenuItem className='py-2 font-semibold' asChild >
                                    <EditServiceDialog service={{
                                        name: "Manicure",
                                        price: 27,
                                        duration: 45,
                                        category: "Beauty",
                                        currency: "EGP"
                                    }} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className='py-2 text-destructive font-semibold'>
                                    <p>Delete</p>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>



            </div>
            {/* <Button type="submit">Next</Button> */}
        </div>
    </form>
}