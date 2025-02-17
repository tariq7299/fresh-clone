import { Info, Camera, ImagePlus, X } from 'lucide-react';
import { Button } from '@/_ui/components/custom/button';
import { Label, } from '@/_ui/components/label';
import { Input } from '@/_ui/components/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/_ui/components/select"
import { Textarea } from '@/_ui/components/textarea';

export default function BusinessDetails() {
    return <div className="p-5 ps-7 pt-8 md:pt-14 size-full max-w-7xl">

        <section className='pb-4 space-y-2'>
            <h1 className="text-2xl md:text-4xl font-semibold  rtl:font-cairo ">
                Business Details
            </h1>

            <div className="flex gap-1 justify-start items-center text-destructive text-sm">
                <Info className="size-4 " />
                <p className="">
                    Note: After editing your data, your account will be pending until the changes are reviewed and approved.
                </p>
            </div>

        </section>


        {/* Business identity Section */}
        <section className='space-y-2 pb-4'>

            <h2 className='text-lg font-semibold'>Business identity</h2>

            <div className='bg-muted rounded-lg p-6 flex flex-col space-y-6 md:space-y-4 justify-center items-center'>

                {/* Business Logo */}
                <div className='flex gap-2 flex-col justify-center items-center w-full'>
                    <div className='rounded-full  size-24 border border-gray-200 flex justify-center items-center bg-background text-muted-foreground'>
                        <Camera className='size-5' />
                    </div>
                    <p className='text-sm font-semibold'>Business Logo</p>
                </div>

                {/* Upload pictures */}
                <div className='flex flex-col gap-2 justify-start items-start w-full'>

                    <h3 className='text-sm font-semibold'>Upload pictures</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4 w-full max-w-[600px] place-items-center md:place-items-start">

                        <div className='border border-gray-200 p-2 flex justify-center items-center text-muted-foreground  bg-background rounded-lg group overflow-hidden transform transition duration-300 ease-in-out hover:-translate-y-3 hover:drop-shadow-lg size-24'>
                            <ImagePlus className='size-5' />
                            <>
                                <Button type="button" size="sm" variant="outline" className="absolute top-2 right-2 w-max h-max p-1 block md:hidden group-hover:block"

                                >
                                    <X className="h-3 w-3 md:h-4 md:w-4 text-destructive " />

                                </Button>


                                <Button size="sm" type="button" variant="default" className="block md:hidden group-hover:block absolute bottom-2 text-xs p-1 px-2 h-auto">set as cover</Button>

                            </>

                            <div className="bg-primary w-full absolute bottom-4 left-[-25px]  text-background font-bold text-2xs md:text-xs text-center rotate-45 tracking-widest " ><p>COVER</p></div>

                            {/* <Button size="sm"></Button> */}
                        </div>
                        <div className='rounded-lg border border-gray-200 p-2 flex justify-center items-center text-muted-foreground  bg-background size-24'>
                            <ImagePlus className='size-5' />
                        </div>
                        <div className='rounded-lg border border-gray-200 p-2 flex justify-center items-center text-muted-foreground  bg-background size-24'>
                            <ImagePlus className='size-5' />
                        </div>
                        <div className='rounded-lg border border-gray-200 p-2 flex justify-center items-center text-muted-foreground  bg-background size-24'>
                            <ImagePlus className='size-5' />
                        </div>
                        <div className='rounded-lg border border-gray-200 p-2 flex justify-center items-center text-muted-foreground  bg-background size-24'>
                            <ImagePlus className='size-5' />
                        </div>
                        <div className='rounded-lg border border-gray-200 p-2 flex justify-center items-center text-muted-foreground  bg-background size-24'>
                            <ImagePlus className='size-5' />
                        </div>



                    </div>
                </div>

                {/* Business basic information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">

                    <div className="space-y-2 ">
                        <Label className="font-bold rtl:font-cairo" htmlFor="nameEn">
                            Business Name (En)
                        </Label>
                        <Input
                            required
                            dir="ltr"
                            // disabled={isPending}
                            // value={formValues.nameEn}
                            // onChange={(e) => setFormValues({ ...formValues, nameEn: e.target.value })}
                            type="text"
                            name="nameEn"
                            id="nameEn"
                            placeholder={"business name in english"}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="font-bold rtl:font-cairo" htmlFor="nameEn">
                            Business Name (Ar)
                        </Label>
                        <Input
                            required
                            dir="rtl"
                            // disabled={isPending}
                            // value={formValues.nameEn}
                            // onChange={(e) => setFormValues({ ...formValues, nameEn: e.target.value })}
                            type="text"
                            name="nameEn"
                            id="nameEn"
                            placeholder={"business name in english"}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="font-bold rtl:font-cairo" htmlFor="nameEn">
                            Specialization
                        </Label>
                        <Select required>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2 flex justify-end flex-col">
                        <Label className=" flex items-start gap-1" htmlFor="nameEn">
                            Capacity <span className='inline-flex text-xs gap-1 text-muted-foreground justify-center items-center '><Info className="size-3 " /> How many customers you can serve at once ?</span>
                        </Label>
                        <Select required>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label className=" " htmlFor="nameEn">
                            Target Gender
                        </Label>
                        <Input
                            dir="ltr"
                            // disabled={isPending}
                            // value={formValues.nameEn}
                            // onChange={(e) => setFormValues({ ...formValues, nameEn: e.target.value })}
                            type="text"
                            name="nameEn"
                            id="nameEn"
                            placeholder={"business name in english"}
                        />
                    </div>

                    <div className="space-y-2 ">
                        <Label className=" " htmlFor="nameEn">
                            URL
                        </Label>
                        <Input
                            dir="ltr"
                            // disabled={isPending}
                            // value={formValues.nameEn}
                            // onChange={(e) => setFormValues({ ...formValues, nameEn: e.target.value })}
                            type="text"
                            name="nameEn"
                            id="nameEn"
                            placeholder={"business name in english"}
                        />
                    </div>

                    <div className="space-y-2 col-span-1 lg:col-span-2 xl:col-span-3">
                        <Label className="font-bold rtl:font-cairo" htmlFor="descriptionAr">
                            Desctiption (En)
                        </Label>
                        <Textarea
                            dir="ltr"
                            // disabled={isPending}
                            // value={formValues.descriptionAr}
                            // onChange={(e) => setFormValues({ ...formValues, descriptionAr: e.target.value })}
                            name="descriptionAr" id="descriptionAr" placeholder={"description in english"} />

                    </div>
                    <div className="space-y-2 col-span-1 lg:col-span-2 xl:col-span-3">
                        <Label className="font-bold rtl:font-cairo" htmlFor="descriptionAr">
                            Desctiption (Ar)
                        </Label>
                        <Textarea
                            dir="rtl"
                            // disabled={isPending}
                            // value={formValues.descriptionAr}
                            // onChange={(e) => setFormValues({ ...formValues, descriptionAr: e.target.value })}
                            name="descriptionAr" id="descriptionAr" placeholder={"description in english"} />
                    </div>



                </div >

            </div >
        </section >

        {/* Location Section */}
        <section className='space-y-2 pb-4'>

            <h2 className='text-lg font-semibold'>Location</h2>

            <div className='bg-muted rounded-lg p-6 flex flex-col space-y-4 justify-center items-center'>

                {/* Business locatioon and address*/}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">

                    <div className="col-span-2 md:col-span-3 space-y-1">
                        <Label htmlFor="address" className="text-right font-bold">
                            Address
                        </Label>
                        <Input
                            id="address"
                            type="text"
                            className="remove-default-input-styles"
                            placeholder="Enter your full address"


                        />
                        {false && <p className="text-destructive text-sm col-span-3 pt-2">Invalid address</p>}
                    </div>

                    <div className="col-span-2 md:col-span-1 space-y-1">
                        <Label htmlFor="city" className="text-right font-bold">
                            City
                        </Label>
                        <Input
                            id="city"
                            type="text"
                            className="remove-default-input-styles"
                            placeholder="Enter city name"


                        />
                        {false && <p className="text-destructive text-sm col-span-3 pt-2">Invalid city</p>}
                    </div>

                    <div className="col-span-1 md:col-span-2 space-y-1">
                        <Label htmlFor="district" className="text-right font-bold">
                            District
                        </Label>
                        <Input
                            id="district"
                            type="text"
                            className="remove-default-input-styles"
                            placeholder="Enter district name"


                        />
                        {false && <p className="text-destructive text-sm col-span-3 pt-2">Invalid district</p>}
                    </div>

                    <div className="col-span-1 md:col-span-2 space-y-1">
                        <Label htmlFor="country" className="text-right font-bold">
                            Country
                        </Label>
                        <Input
                            id="country"
                            type="text"
                            className="remove-default-input-styles"
                            placeholder="Enter country name"


                        />
                        {false && <p className="text-destructive text-sm col-span-3 pt-2">Invalid country</p>}
                    </div>

                    <div className="col-span-2 md:col-span-2 space-y-1">
                        <Label htmlFor="street" className="text-right font-bold">
                            Street
                        </Label>
                        <Input
                            id="street"
                            type="text"
                            className="remove-default-input-styles"
                            placeholder="Enter street name"


                        />
                        {false && <p className="text-destructive text-sm col-span-3 pt-2">Invalid street</p>}
                    </div>

                    <div className="col-span-1 md:col-span-1 space-y-1">
                        <Label htmlFor="building" className="text-right font-bold">
                            Building
                        </Label>
                        <Input
                            id="building"
                            type="text"
                            className="remove-default-input-styles"
                            placeholder="Enter building name/number"


                        />
                        {false && <p className="text-destructive text-sm col-span-3 pt-2">Invalid building</p>}
                    </div>

                    <div className="col-span-1 md:col-span-1 space-y-1">
                        <Label htmlFor="apartment" className="text-right font-bold">
                            Apartment
                        </Label>
                        <Input
                            id="apartment"
                            type="text"
                            className="remove-default-input-styles"
                            placeholder="Enter apartment number"


                        />
                        {false && <p className="text-destructive text-sm col-span-3 pt-2">Invalid apartment</p>}
                    </div>

                    <div className="col-span-2 md:col-span-4 space-y-1">
                        <Label htmlFor="directions" className="text-right font-bold">
                            Directions
                        </Label>
                        <Textarea
                            id="directions"
                            className="remove-default-input-styles"
                            placeholder="Enter additional directions"


                        />
                        {false && <p className="text-destructive text-sm col-span-3 pt-2">Invalid directions</p>}
                    </div>


                </div>

            </div >
        </section >



    </div >

}

