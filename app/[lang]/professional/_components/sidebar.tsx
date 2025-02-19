"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
    SidebarMenuSub,
    SidebarMenuSubItem,
    useSidebar,
} from "@/_ui/components/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/_ui/components/collapsible"
import Link from "next/link"
import { SidebarTabs } from "@/[lang]/business/_components/sidebar-menu"
import { ChevronLeft, ChevronRight, LogOut, NotepadText, Settings } from "lucide-react"
import { usePathname } from "next/navigation"
import { SessionData } from "@/[lang]/(auth)/_lib/definitions"
import { Button } from "@/_ui/components/custom/button"
import { cn } from "@/_lib/utils/utils"
import { UserData } from "@/[lang]/(auth)/_lib/definitions"
import UserInitialsBadge from "@/_ui/components/custom/user-initials-badge"
import { div } from "framer-motion/client"
import AuthButton from "@/_ui/components/custom/auth-button"
import { Dictionary } from "@/_lib/definitions/dictionary"

export function ProfessionalSidebar({ side, dict, userData, sidebarTabs, containerClass, triggerClass }: {
    userData: UserData,
    sidebarTabs: {
        key: string,
        collapsible: boolean,
        title: string,
        href?: string,
        icon: React.ReactNode | null,
        children?: {
            key: string,
            title: string,
            href: string,
            icon: React.ReactNode | null
        }[]
    }[],
    containerClass?: string,
    triggerClass?: string,
    dict: Dictionary,
    side: "left" | "right"
}) {



    const pathname = usePathname()

    const { state, open, setOpen, isMobile } = useSidebar()



    return (

        <>


            {/* Sidebar trigger on mobile */}
            <SidebarTrigger className={cn("md:hidden fixed top-2 left-2 text-accent")} />


            <Sidebar className={cn("", containerClass)} collapsible={"icon"} side={side}>


                <SidebarTrigger className={cn("text-accent hidden md:inline-flex fixed  transition-all duration-250  ease-in-out ", open ?
                    side === "left" ? "left-64" : "right-64" : side === "left" ? "left-12"
                        : "right-12", triggerClass)} />

                <SidebarHeader className={cn(open ? " py-2 px-4" : "flex justify-center items-center")}>

                    {/* TODO: Create a header component */}
                    {open ?
                        <>

                            <div className="flex justify-center items-center p-9 mb-7">

                                <Link href="/" className={cn("text-accent-foreground text-2xl font-bold font-cinzel ")}>Lumière</Link>
                            </div>
                            <div className="flex justify-start items-center gap-2 ">
                                {userData && <UserInitialsBadge firstName={userData?.first_name} lastName={userData?.last_name} />}
                                <div className="flex flex-col ">
                                    <p className=" text-accent-foreground"> {userData?.full_name}</p>
                                    <p className="text-sm text-accent-foreground"> {userData?.email}</p>

                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex justify-center items-center p-9 mb-4">
                                <Link href="/" className={cn("text-accent-foreground text-4xl font-bold font-cinzel ")}>L</Link>
                            </div>
                            <div className="flex justify-center items-center gap-2 px-4">
                                {userData && <UserInitialsBadge showLastName={false} firstName={userData.first_name} lastName={userData.last_name} />}

                            </div>
                        </>
                    }

                </SidebarHeader>

                <SidebarContent >
                    <SidebarMenu className={cn("px-4 pt-7 text-accent-foreground", open ? "" : "flex justify-center items-center")}>
                        {sidebarTabs.map((tab) =>
                            tab.collapsible ? (
                                <Collapsible key={tab.key} defaultOpen className="group/collapsible">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton className="">
                                                {tab.icon}
                                                <span>{tab.title}</span>
                                                <ChevronRight className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 ml-auto" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {tab.children?.map(childTab => (
                                                    <SidebarMenuSubItem
                                                        key={childTab.key}

                                                    >
                                                        <SidebarMenuButton
                                                            asChild
                                                            isActive={pathname === childTab.href}
                                                            className={cn(
                                                                "data-[active=true]:bg-accent-100 py-5 data-[active=true]:text-primary data-[active=true]:font-semibold",
                                                                open ? "" : "flex justify-center items-center"
                                                            )}
                                                        >
                                                            <Link className="" href={childTab.href}>
                                                                {childTab.icon} {childTab.title}

                                                            </Link>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ) : (
                                <SidebarMenuItem key={tab.key}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={pathname === tab.href}
                                        className={cn(
                                            "data-[active=true]:bg-accent-100 py-5 data-[active=true]:text-primary data-[active=true]:font-semibold",
                                            open ? "" : "flex justify-center items-center"
                                        )}
                                    >
                                        <Link className="" href={tab.href ?? "#"}>
                                            {tab.icon}
                                            <span className={cn(open ? "" : "hidden")}>
                                                {tab.title}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        )}
                    </SidebarMenu>
                </SidebarContent >

                <SidebarFooter >
                    <SidebarMenu className={cn("px-2 pb-12", open ? "" : "flex justify-center items-center")}>
                        <SidebarMenuItem  >
                            {/* <SidebarMenuButton asChild isActive={pathname === tab.href}> */}
                            <SidebarMenuButton asChild isActive={pathname === "/settings"} className={cn("text-accent-foreground data-[active=true]:bg-accent-100 py-5 data-[active=true]:text-primary data-[active=true]:font-semibold font-semi", open ? "" : " flex justify-center items-center")}>
                                <Button variant="ghost" isLink className="w-full font-normal justify-start" href={"/settings"}>
                                    <Settings />
                                    <span className={cn(open ? "" : "hidden")}>{dict.dashboard.sidebar.settings}</span>
                                </Button>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem  >
                            {/* <SidebarMenuButton asChild isActive={pathname === tab.href}> */}
                            <SidebarMenuButton asChild isActive={pathname === "/logout"} className={cn("text-accent-foreground data-[active=true]:bg-accent-100 py-5 data-[active=true]:text-primary data-[active=true]:font-semibold font-semi", open ? "" : " flex justify-center items-center")}>
                                {/* <Link className="" href={"/logout"}>
                                    <LogOut />
                                    <span className={cn(open ? "" : "hidden")}>Logout</span>
                                </Link> */}

                                <AuthButton authenticated={true} className='flex justify-start items-center gap-2 w-full font-normal' dict={dict}>
                                    <LogOut />
                                    <span className={cn(open ? "" : "hidden")}>{dict.dashboard.sidebar.logout}</span>
                                </AuthButton>

                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar >

        </>
    )
}
