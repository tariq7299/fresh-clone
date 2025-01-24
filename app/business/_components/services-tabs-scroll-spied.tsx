"use client"

import { createRef } from "react";

import { useRef } from "react";

import { cn } from "@/lib/utils/utils";
import { RefObject } from "react";
import ScrollSpy from "react-scrollspy-navigation";

export default function ServicesTabsScrollSpied({ tabTitles }: { tabTitles: string[] }) {

    if (!tabTitles || tabTitles.length === 0) return null

    const tabsRefs = useRef<RefObject<HTMLAnchorElement | null>[]>(Array.from({ length: tabTitles?.length }, () => createRef()));

    const onChangeActiveId = (current: string, _: string) => {
        const element = tabsRefs.current.find(ref => ref.current?.innerText === current)?.current
        const container = element?.parentElement;
        const offsetLeft = element?.offsetLeft; // Element's position within the container
        console.log("offsetLeft", offsetLeft)
        container?.scrollTo({
            left: offsetLeft,
            behavior: "smooth",
        });
    }

    return <ScrollSpy onChangeActiveId={onChangeActiveId} activeClass="nav-active" activeAttr={true} offsetTop={150} offsetLeft={0} >
        <div className="flex gap-2 py-4 w-full whitespace-nowrap relative overflow-x-auto bg-background">
            {tabTitles.map((title, index) => (
                <a href={`#${title}`} className={cn(" px-4 py-2 rounded-full font-bold  text-foreground", "data-[active=true]:bg-foreground data-[active=true]:text-background hover:bg-muted  ")} key={title} ref={tabsRefs.current[index]}>{title}</a>
            ))}
        </div>
        <div className="absolute bottom-0 right-0 w-20 h-full  bg-gradient-to-l from-background to-transparent"></div>
    </ScrollSpy>
}