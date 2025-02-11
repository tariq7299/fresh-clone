export default function UserInitialsBadge({ firstName, lastName }: { firstName: string, lastName: string }) {
    return (


        <div className='rounded-full overflow-hidden bg-accent-100 text-accent-600 font-black text-lg p-1 px-2'>
            {firstName.charAt(0)}{lastName.charAt(0)}
        </div>
    )
}
