import NavBar from "@/_ui/components/custom/nav-bar";
import { Suspense } from "react";
import { NavBarSkeleton } from "@/[lang]/(home)/_components/skeletons";
import Image from "next/image";
import barberShop from "@/../public/barber-shop-2.jpg"
import { Badge } from "@/_ui/components/badge";
import { Separator } from "@/_ui/components/separator";
import { handleSearch } from "../_lib/form-actions";
import Link from "next/link";


export default async function SearchPage(props:
    { searchParams: Promise<{ categoryId: string, latitude: string, longitude: string }> }
) {

    const searchParams = await props?.searchParams
    const categoryId = Number(searchParams?.categoryId) || 0
    const longitude = Number(searchParams?.longitude) || 0
    const latitude = Number(searchParams?.latitude) || 0

    const data = await handleSearch({ categoryId, longitude, latitude })
    const businesses = data?.businesses || []


    return <div>

        {/* Nav bar */}
        <Suspense fallback={<NavBarSkeleton />}>
            <NavBar fixed={true} />
        </Suspense>

        <div className="grid grid-cols-1 max-w-2xl mx-auto p-5 mt-24 space-y-12">

            {businesses.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4">
                    <div className="text-4xl">🔍</div>
                    <h2 className="text-2xl font-bold text-gray-800">No businesses found</h2>
                    <p className="text-gray-600">Try adjusting your search criteria or exploring a different location</p>
                </div>
            ) : (
                <>
                    {businesses.map((item: any) => (
                        <Link key={item.id} href={`/business/${item.id}`} className="flex flex-col  ">
                            <div className="overflow-hidden w-full rounded-lg">
                                <Image priority={true} src={barberShop} alt="search hero" className="object-cover rounded-t-lg hover:scale-110 transistion ease-in-out delay-100 duration-300" />
                            </div>

                            <div className="space-y-1 pt-3  self-center grow-[1] text-left w-full">
                                <p className="font-bold text-lg text-nowrap truncate ">{item.name}</p>
                                {/* truncate this text */}
                                <p className="text-muted-foreground text-nowrap text-xs md:text-base truncate">{item.description}</p>
                                <Badge variant="outline">{item.category.name}</Badge>
                            </div>
                        </Link>
                    ))}
                    <Separator className="w-1/2 mx-auto" />
                </>
            )}

        </div>

    </div>
}