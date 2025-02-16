import { cn } from '@/_lib/utils/utils';
import { Service } from '@/[lang]/professional/_lib/definitions';
import ServiceCardActions from '@/_ui/components/custom/service-card-actions';

interface ServiceCardProps {
    service: Service;
    services: Service[];
    setServices: (services: Service[]) => void;
    dict: {
        price: string;
        duration: string;
        minutes: string;
        remove: string;
        currency: string;
    };
}

export default function ServiceCard({ service, services, setServices, dict }: ServiceCardProps) {

    return <div className={cn('border border-gray-200 border-t-1 border-r-1 border-b-1 p-5 flex justify-between items-center rounded-lg border-l-8 border-l-secondary-300')}>
        <div>
            <p className='text-lg font-bold'>{service.serviceName}</p>
            <p className='text-muted-foreground'>{service.serviceDuration}min</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='font-semibold'>{dict.currency} {service.servicePrice}</p>
            <ServiceCardActions services={services} setServices={setServices} service={service} />
        </div>
    </div>
}