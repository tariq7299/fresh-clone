export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ lang: 'en' | 'ar' }> }) {

    const locale = await params

    return <div id="main-layout" dir={locale.lang === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
}