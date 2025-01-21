
import { getUserData } from '@/(auth)/_lib/auth-server-services'
import { getSession } from '@/(auth)/_lib/sessions'
import CustomerNavBar from '@/(home)/_components/customer-nav-bar'
import ProfessionalNavBar from '@/(home)/_components/professional-nav-bar'
import PublicNavBar from '@/(home)/_components/public-nav-bar'

export default async function NavBar() {

    const userData = await getUserData()

    console.log("session", userData)

    return <>
        {
            userData && userData.role === 'customer' ? <CustomerNavBar />
                : userData && userData.role === 'professional' ? <ProfessionalNavBar /> : <PublicNavBar />
        }
    </>


}