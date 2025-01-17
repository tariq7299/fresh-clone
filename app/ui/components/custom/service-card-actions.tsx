import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/ui/components/dropdown-menu';
import { Button } from '@/ui/components/custom/button';
import EditServiceDialog from '@/professional/_components/edit-service-dialog';
import { Service } from '@/professional/_components/business-services-form';
import { EllipsisVertical } from 'lucide-react';

export default function ServiceCardActions({ services, setServices, service }: { services: Service[], setServices: (services: Service[]) => void, service: Service }) {
    return <div>
        <DropdownMenu>

            <DropdownMenuTrigger asChild >
                <Button variant="ghost">
                    <EllipsisVertical className='size-5' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='space-y-'>

                <DropdownMenuItem className='py-2 font-semibold' asChild >
                    <EditServiceDialog services={services} setServices={setServices} currentService={service} />
                </DropdownMenuItem>
                <DropdownMenuItem className='py-2 text-destructive font-semibold' onClick={() => {
                    setServices(services.filter(item => item.serviceId !== service.serviceId))
                }}>
                    <p>Delete</p>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    </div>
}