import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/_ui/components/dropdown-menu';
import { Button } from '@/_ui/components/custom/button';
import EditServiceDialog from '@/[lang]/professional/_components/edit-service-dialog';
import { Service } from '@/[lang]/professional/_lib/definitions';
import { EllipsisVertical } from 'lucide-react';

export default function ServiceCardActions({
    services,
    setServices,
    service,
    dict
}: {
    services: Service[],
    setServices: (services: Service[]) => void,
    service: Service,
    dict: any
}) {
    return <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button variant="ghost">
                    <EllipsisVertical className='size-5' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='space-y-'>
                <DropdownMenuItem className='py-2 font-semibold' asChild >
                    <EditServiceDialog
                        services={services}
                        setServices={setServices}
                        currentService={service}
                        dict={dict}
                    />
                </DropdownMenuItem>
                <DropdownMenuItem
                    className='py-2 text-destructive font-semibold'
                    onClick={() => {
                        setServices(services.filter(item => item.serviceId !== service.serviceId))
                    }}
                >
                    <p>{dict.actions.delete}</p>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
}