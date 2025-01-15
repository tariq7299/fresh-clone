import { Button } from "@/ui/components/custom/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/ui/components/dialog"
import { Input } from "@/ui/components/input"
import { Label } from "@/ui/components/label"

export default function EditServiceDialog({ service }: {
    service: {
        name: string,
        price: number,
        duration: number,
        category: string,
        currency: string,
    }
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>

                <Button variant="ghost" className="w-full justify-start  p-2 hover:bg-accent hover:text-accent-foreground font-semibold transition-colors duration-200 ease-in-out">Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit <span className="font-bold">{service.name}</span></DialogTitle>
                    <DialogDescription>
                        Make changes to your service here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Duration
                        </Label>
                        <Input
                            id="name"
                            defaultValue={service.duration}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Price
                        </Label>
                        <div className="relative roudned-lg  col-span-3">
                            <Input
                                id="username"
                                defaultValue={service.price}
                                className=""
                            />
                            <p className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-xs italic p-2">{service.currency}</p>
                        </div>

                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
