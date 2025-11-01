import Badge from "../../Badge.jsx";
import CTA from "../../CTA.jsx";
import Feature from "./Feature.jsx";
import Hero from "./Hero.jsx";
import Testimonial from "./Testimonial.jsx";



const Home = () => {
    


    return(
        <>
        <Hero />
        <Badge value='PROCESS' />
        <Feature />
        <Badge value='TESTIMONIAL'/>
        <Testimonial />
        <CTA />
        </>
    )


}




export default Home;