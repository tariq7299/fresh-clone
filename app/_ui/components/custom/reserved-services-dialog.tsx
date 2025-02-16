import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/_ui/components/dialog"
import { Button } from "@/_ui/components/button"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/_ui/components/table"
import { getTotalDuration } from "@/_lib/utils/utils"
import { Service } from "@/_lib/definitions/appointments"
import { Dictionary } from "@/_lib/dictionaries/types"

export default function ReservedServicesDialog({ services, total_duration, total_price, dict, lang }: { services: Service[], total_duration: string, total_price: number, dict: Dictionary, lang: "en" | "ar" }) {

    // const formattedTotalDuration = getTotalDuration(total_duration, lang)  
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="font-semibold">
                    {dict.dashboard.appointments.table.actions.show_services}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-full sm:max-w-[40vw]">
                <DialogHeader>
                    <DialogTitle className="pt-2">
                        {dict.dashboard.appointments.table.services_dialog.title}
                    </DialogTitle>
                </DialogHeader>
                <Table>
                    <TableCaption>
                        {dict.dashboard.appointments.table.services_dialog.caption}
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-start">{dict.dashboard.appointments.table.columns.services}</TableHead>
                            <TableHead className="text-start">
                                {dict.dashboard.appointments.table.columns.total_price} ({dict.dashboard.appointments.table.services_dialog.currency})
                            </TableHead>
                            <TableHead className="text-start">
                                {dict.dashboard.appointments.table.columns.total_duration}
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {services.map((service) => (
                            <TableRow key={service.service_id}>
                                <TableCell className="font-medium">{service.name}</TableCell>
                                <TableCell>{service.price}</TableCell>
                                <TableCell>{service.duration}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>
                                {dict.dashboard.appointments.table.services_dialog.total}
                            </TableCell>
                            <TableCell>{total_price}</TableCell>
                            <TableCell>{total_duration}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </DialogContent>
        </Dialog>
    )
}   
