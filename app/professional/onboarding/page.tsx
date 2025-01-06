import { Label } from "@/ui/components/label";
import { Input } from "@/ui/components/input";


export default function ProfessionalOnboardingPage() {
    return <div className=" ">
        <div className="flex flex-col gap-2 w-full max-w-md p-5 pt-20">
            <p className="text-sm text-muted-foreground"> Account setup</p>

            {/* Change this to more descriptive title */}
            <h1 className="text-3xl font-bold font-source-sans"> What's your business info?</h1>

            <p className="text-sm text-muted-foreground"> This the brand name your clients will see. Your billing and legal name can be added later.</p>

            <form action="" className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Business Name (English)</Label>
                    <Input type="text" name="name" id="name" placeholder="Enter your business name in english" />
                </div>
            </form>
        </div>
        <h1>Professional Onboarding</h1>
    </div>
}