import Link from "next/link";
import { cn } from "@/_lib/utils/utils";

export default function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={cn("text-2xl font-bold font-cinzel ", className)}>Lumière</Link>
    );
}