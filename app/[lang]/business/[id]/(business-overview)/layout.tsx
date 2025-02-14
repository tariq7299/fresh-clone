import { NavBarSkeleton } from "@/[lang]/(home)/_components/skeletons";
import Footer from "@/_ui/components/custom/footer";
import NavBar from "@/_ui/components/custom/nav-bar";
import { Suspense } from "react";
import { getDictionary } from "@/_lib/dictionaries";

export default async function BusinessLayout({ children, params }: { children: React.ReactNode, params: Promise<{ lang: "en" | "ar" }> }) {

    const lang = (await params).lang
    const dict = await getDictionary(lang)

    return <>

        {/* Nav bar */}
        <Suspense fallback={<NavBarSkeleton />}>
            <NavBar fixed={true} hideInMobile={true} dict={dict} />
        </Suspense>

        <Suspense>
            {children}
        </Suspense>


        {/* <Footer className="" /> */}

    </>
}