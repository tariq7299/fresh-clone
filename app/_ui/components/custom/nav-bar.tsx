
import { getUserData } from '@/[lang]/(auth)/_lib/auth-server-services'
import { getSession } from '@/[lang]/(auth)/_lib/sessions'
import CustomerNavBar from '@/[lang]/(home)/_components/customer-nav-bar'
import ProfessionalNavBar from '@/[lang]/(home)/_components/professional-nav-bar'
import PublicNavBar from '@/[lang]/(home)/_components/public-nav-bar'

export default async function NavBar({
    dict,
    fixed = false,
    hideInMobile = false,
    className,
    showForBusiness = true
}: { dict: any, fixed?: boolean, hideInMobile?: boolean, className?: string, showForBusiness?: boolean }) {

    const userData = await getUserData()


    return <>
        {
            userData && userData.role === 'customer' ?
                <CustomerNavBar userData={userData} className={className} fixed={fixed} hideInMobile={hideInMobile} showForBusiness={showForBusiness} dict={dict} />
                :
                userData && userData.role === 'professional' ?
                    <ProfessionalNavBar userData={userData} fixed={fixed} hideInMobile={hideInMobile} dict={dict} />
                    :
                    <PublicNavBar dict={dict} fixed={fixed} hideInMobile={hideInMobile} />
        }
    </>


}