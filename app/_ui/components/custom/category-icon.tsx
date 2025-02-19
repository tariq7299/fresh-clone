import Hair from "@/_ui/icons/hair";
import Beard from "@/_ui/icons/beard";
import Eyebrows from "@/_ui/icons/eyebrows";
import FaceSpray from "@/_ui/icons/face-spray";
import LipFiller from "@/_ui/icons/lip-filler";
import MakeupBrush from "@/_ui/icons/makeup-brush";
import Nails from "@/_ui/icons/nails";
import Razor from "@/_ui/icons/razor";
import Skincare from "@/_ui/icons/skincare";
import Tatto from "@/_ui/icons/tatto";
import BodyMessage from "@/_ui/icons/body-message";
import Body from "@/_ui/icons/body";
import EyeLashes from "@/_ui/icons/eye lashes";
import Fitness from "@/_ui/icons/fitness";
import Holicist from "@/_ui/icons/holicist";
import { cn } from "@/_lib/utils/utils";


interface CategoryIconProps {
    category: "hair" | "beard" | "eyebrows" | "face" | "lips" | "makeup" | "nails" | "shaving" | "skincare" | "tattoo" | "body" | "massage" | "eyelashes" | "fitness" | "holicist";
    className?: string;
}

export default function CategoryIcon({ className, category }: CategoryIconProps) {

    switch (category.toLowerCase()) {
        case "hair":
            return <Hair className={cn(className, "fill-accent")} />;
        case "beard":
            return <Beard className={cn(className, "fill-accent")} />;
        case "eyebrows":
            return <Eyebrows className={cn(className, "fill-transparent text-accent")} />;
        case "face":
            return <FaceSpray className={cn(className, "fill-accent")} />;
        case "lips":
            return <LipFiller className={cn(className, "fill-accent")} />;
        case "makeup":
            return <MakeupBrush className={cn(className, "fill-accent")} />;
        case "nails":
            return <Nails className={cn(className, "fill-accent")} />;
        case "shaving":
            return <Razor className={cn(className, "fill-transparent text-accent")} />;
        case "skincare":
            return <Skincare className={cn(className, "fill-accent")} />;
        case "tattoo":
            return <Tatto className={cn(className, "fill-transparent text-accent")} />;
        case "body":
            return <Body className={cn(className, "fill-accent")} />;
        case "massage":
            return <BodyMessage className={cn(className, "fill-accent")} />;
        case "eyelashes":
            return <EyeLashes className={cn(className, "fill-accent")} />;
        case "fitness":
            return <Fitness className={cn(className, "fill-accent")} />;
        case "holicist":
            return <Holicist className={cn(className, "fill-accent")} />;
        default:
            return <Hair className={cn(className, "fill-accent")} />; // Default to hair icon
    }
}

