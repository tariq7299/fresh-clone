import NavBar from "@/_ui/components/custom/nav-bar";
import { Suspense } from "react";
import { NavBarSkeleton } from "./_components/skeletons";

export default function Search() {
    return <div>

        {/* Nav bar */}
        <Suspense fallback={<NavBarSkeleton />}>
            <NavBar />
        </Suspense>

        <div className="grid grid-cols-1 max-w-7xl mx-auto">

            <div>
                <Image src={ }></Image>
            </div>

        </div>

    </div>
}