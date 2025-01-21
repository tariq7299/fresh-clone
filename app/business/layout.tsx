import { NavBarSkeleton } from "@/(home)/_components/skeletons";
import Footer from "@/ui/components/custom/footer";
import NavBar from "@/ui/components/custom/nav-bar";
import { Suspense } from "react";

export default function BusinessLayout({ children }: { children: React.ReactNode }) {


    return <>

        {/* Nav bar */}
        <Suspense fallback={<NavBarSkeleton />}>
            <NavBar fixed={true} hideInMobile={true} />
        </Suspense>

        {children}

        <Footer className="" />

    </>
}