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


interface CategoryIconProps {
    category: "hair" | "beard" | "eyebrows" | "face" | "lips" | "makeup" | "nails" | "shaving" | "skincare" | "tattoo" | "body" | "massage" | "eyelashes" | "fitness" | "holicist";
    className?: string;
}

export default function CategoryIcon({ className, category }: CategoryIconProps) {

    switch (category.toLowerCase()) {
        case "hair":
            return <Hair className={className} />;
        case "beard":
            return <Beard className={className} />;
        case "eyebrows":
            return <Eyebrows className={className} />;
        case "face":
            return <FaceSpray className={className} />;
        case "lips":
            return <LipFiller className={className} />;
        case "makeup":
            return <MakeupBrush className={className} />;
        case "nails":
            return <Nails className={className} />;
        case "shaving":
            return <Razor className={className} />;
        case "skincare":
            return <Skincare className={className} />;
        case "tattoo":
            return <Tatto className={className} />;
        case "body":
            return <Body className={className} />;
        case "massage":
            return <BodyMessage className={className} />;
        case "eyelashes":
            return <EyeLashes className={className} />;
        case "fitness":
            return <Fitness className={className} />;
        case "holicist":
            return <Holicist className={className} />;
        default:
            return <Hair className={className} />; // Default to hair icon
    }
}


