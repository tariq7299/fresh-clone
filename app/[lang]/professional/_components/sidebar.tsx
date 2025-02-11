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
    useSidebar,
} from "@/_ui/components/sidebar"
import Link from "next/link"
import { SidebarTabs } from "@/[lang]/business/_components/sidebar-menu"
import { ChevronLeft, LogOut, NotepadText, Settings } from "lucide-react"
import { usePathname } from "next/navigation"
import { SessionData } from "@/[lang]/(auth)/_lib/definitions"
import { Button } from "@/_ui/components/button"
import { cn } from "@/_lib/utils/utils"
import { UserData } from "@/[lang]/(auth)/_lib/definitions"
import UserInitialsBadge from "@/_ui/components/custom/user-initials-badge"
import { div } from "framer-motion/client"

export function ProfessionalSidebar({ userData, sidebarTabs, containerClass, triggerClass }: {
    userData: UserData,
    sidebarTabs: {
        key: string,
        title: string,
        href: string,
        icon: React.ReactNode
    }[],
    containerClass?: string,
    triggerClass?: string
}) {



    const pathname = usePathname()

    const { state, open, setOpen, isMobile } = useSidebar()

    console.log("isMobile", isMobile)
    console.log("userData.role", userData.role)


    return (

        <>


            {/* Sidebar trigger on mobile */}
            <SidebarTrigger className={cn("md:hidden fixed top-2 left-2 text-accent")} />


            <Sidebar className={cn("bg-background", open ? "p-0" : " ", containerClass)} collapsible={"icon"}>


                <SidebarTrigger className={cn("text-accent hidden md:inline-flex fixed  transition-all duration-250  ease-in-out ", open ? " left-64" : " left-12", triggerClass)} />

                <SidebarHeader className={cn(open ? " py-2" : "flex justify-center items-center")}>

                    {/* <div className="flex justify-between items-center flex-col"> */}


                    {/* TODO: Create a header component */}
                    {open ?
                        <>

                            <div className="flex justify-center items-center p-9 mb-7">

                                <Link href="/" className={cn("text-accent-foreground text-2xl font-bold font-cinzel ")}>Lumière</Link>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <UserInitialsBadge firstName={userData?.first_name} lastName={userData?.last_name} />
                                <div className="flex flex-col">
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
                            <div className="flex justify-center items-center gap-2">
                                <UserInitialsBadge firstName={userData?.first_name} lastName={userData?.last_name} />

                            </div>
                        </>

                        // <p className="text-lg font-bold font-source-sans"> {userData?.first_name.charAt(0) + userData?.last_name.charAt(0)}
                        // </p>
                    }
                    {/* </div> */}

                </SidebarHeader>

                <SidebarContent >
                    <SidebarMenu className={cn("px-2 pt-7", open ? "" : "flex justify-center items-center")}>
                        {sidebarTabs.map((tab) => (
                            <SidebarMenuItem key={tab.key} >
                                {/* <SidebarMenuButton asChild isActive={pathname === tab.href}> */}
                                <SidebarMenuButton asChild isActive={pathname === tab.href} className={cn("data-[active=true]:bg-accent-100 py-5 data-[active=true]:text-primary data-[active=true]:font-semibold", open ? "" : " flex justify-center items-center")}>
                                    <Link className="" href={tab.href}>
                                        {tab.icon}
                                        <span className={cn(open ? "" : "hidden")}>{tab.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>

                <SidebarFooter >
                    <SidebarMenu className={cn("px-2 pb-12", open ? "" : "flex justify-center items-center")}>
                        <SidebarMenuItem  >
                            {/* <SidebarMenuButton asChild isActive={pathname === tab.href}> */}
                            <SidebarMenuButton asChild isActive={pathname === "/settings"} className={cn("text-accent-foreground data-[active=true]:bg-accent-100 py-5 data-[active=true]:text-primary data-[active=true]:font-semibold", open ? "" : " flex justify-center items-center")}>
                                <Link className="" href={"/settings"}>
                                    <Settings />
                                    <span className={cn(open ? "" : "hidden")}>Settings</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem  >
                            {/* <SidebarMenuButton asChild isActive={pathname === tab.href}> */}
                            <SidebarMenuButton asChild isActive={pathname === "/logout"} className={cn("text-accent-foreground data-[active=true]:bg-accent-100 py-5 data-[active=true]:text-primary data-[active=true]:font-semibold", open ? "" : " flex justify-center items-center")}>
                                <Link className="" href={"/logout"}>
                                    <LogOut />
                                    <span className={cn(open ? "" : "hidden")}>Logout</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>

        </>
    )
}
