
import { getUserData } from '@/(auth)/_lib/auth-server-services'
import { getSession } from '@/(auth)/_lib/sessions'
import CustomerNavBar from '@/(home)/_components/customer-nav-bar'
import ProfessionalNavBar from '@/(home)/_components/professional-nav-bar'
import PublicNavBar from '@/(home)/_components/public-nav-bar'

export default async function NavBar({ fixed = false, hideInMobile = false, className }: { fixed?: boolean, hideInMobile?: boolean, className?: string }) {

    const userData = await getUserData()


    return <>
        {
            userData && userData.role === 'customer' ? <CustomerNavBar className={className} fixed={fixed} hideInMobile={hideInMobile} />
                : userData && userData.role === 'professional' ? <ProfessionalNavBar fixed={fixed} hideInMobile={hideInMobile} /> : <PublicNavBar fixed={fixed} hideInMobile={hideInMobile} />
        }
    </>


}