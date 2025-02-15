import { Button } from "@/_ui/components/custom/button";

export default function NavButton({ children, href, variant = "outline" }: { children: React.ReactNode, href: string, variant?: "outline" | "default" }) {
    return (
        <Button borderType="fullRounded" isLink={true} variant={variant} href={href} className="bg-transparent font-source-sans rtl:font-almarai font-semibold  hover:bg-muted/50">{children}</Button>
    );
}