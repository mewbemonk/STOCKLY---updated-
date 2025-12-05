import {Outlet} from 'react-router-dom'
import Nav from '../Component/Nav.jsx'
import Footer from "../Component/Footer.jsx";
import TickerTape from '../Component/TickerTape.jsx'
import Framer from '../Component/Framer.jsx';



const Layout = ()=>{
    return(
        <>
       
        <header>
            
           <Framer> <Nav/></Framer>
            
            
           <Framer> <TickerTape /> </Framer>
        
            
        </header>
        <main>
        <Outlet/>
        
        </main>
        <footer>
        <Framer><Footer /></Framer> 
        </footer>
      
        </>
    )
}

export default Layout
