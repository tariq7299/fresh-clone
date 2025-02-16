import { cn } from "@/_lib/utils/utils"
export default function UserInitialsBadge({ firstName, lastName, className, showLastName = true }: { firstName: string, lastName: string, className?: string, showLastName?: boolean }) {
    return (


        <div className={cn('rounded-full overflow-hidden bg-accent-100 text-accent-600 font-black text-lg p-1 px-2',
            showLastName ? "px-2" : "px-3",
            className)}>
            {firstName.charAt(0)}{showLastName ? lastName.charAt(0) : null}
        </div>
    )
}
