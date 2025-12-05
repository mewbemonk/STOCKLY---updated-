import Badge from "../../Badge.jsx";
import CTA from "../../CTA.jsx";
import Framer from "../../Framer.jsx";
import Feature from "./Feature.jsx";
import Hero from "./Hero.jsx";
import Testimonial from "./Testimonial.jsx";



const Home = () => {
    


    return(
        <>
        <Framer><Hero /></Framer>
        <Framer><Badge value='PROCESS' /></Framer>
        <Framer><Feature /></Framer>
        <Framer><Badge value='TESTIMONIAL'/></Framer>
        <Framer><Testimonial /></Framer>
        <Framer><CTA /></Framer>
        </>
    )


}




export default Home;