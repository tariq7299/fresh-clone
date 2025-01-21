
import { getSession } from '@/(auth)/_lib/sessions'
import CustomerNavBar from '@/(home)/_components/customer-nav-bar'
import ProfessionalNavBar from '@/(home)/_components/professional-nav-bar'
import PublicNavBar from '@/(home)/_components/public-nav-bar'

export default async function NavBar() {

    const session = await getSession()

    console.log("session", session)

    return <>
        {
            session && session.role === 'customer' ? <CustomerNavBar />
                : session && session.role === 'professional' ? <ProfessionalNavBar /> : <PublicNavBar />
        }
    </>


}