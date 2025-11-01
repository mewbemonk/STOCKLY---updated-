import {Outlet} from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from "./Footer.jsx";
import TickerTape from './TickerTape.jsx'
const Layout = ()=>{
    return(
        <>
        <header>
            <Nav/>
            <TickerTape />
            
        </header>
        <main>
        <Outlet/>
        </main>
        <footer><Footer /></footer>
        </>
    )
}

export default Layout
