import { Button } from "@/ui/components/button";

import Link from "next/link";

export default function BusinessPage() {
    return <div>
        <p>Business Page</p>

        <Link href="/login">
            <Button>
                test
            </Button>
        </Link>
        <Link href="/register">
            <Button>
                test
            </Button>
        </Link>
        <Link href="/otp-verification">
            <Button>
                test
            </Button>
        </Link>
    </div>
}