import {Outlet} from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from "./Footer.jsx";
import TickerTape from './TickerTape.jsx'
import Framer from './Framer.jsx';


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
