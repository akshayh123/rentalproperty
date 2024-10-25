import '@/assets/styles/globals.css'

export const metadata ={
    title:'Property Pulse',
    keywords:'property, rental, real estate',
    description:'Find the perfect rental property',
}

const MainLayout = ({children}) => {
    return ( <html>
        <body>
            <main>{children}</main>
        </body>
    </html> );
}
 
export default MainLayout;