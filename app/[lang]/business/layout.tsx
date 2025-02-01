import { Suspense } from "react";

export default function BusinessLayout({ children, auth }: { children: React.ReactNode, auth: React.ReactNode }) {
    return <div>

        {children}

        <Suspense>
            {auth}
        </Suspense>
    </div>

}