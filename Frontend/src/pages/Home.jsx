import Badge from "../Component/Badge.jsx";
import CTA from "../Component/CTA.jsx";
import Framer from "../Component/Framer.jsx";
import Feature from "../Component/Feature.jsx";
import Hero from "../Component/Hero.jsx";
import Testimonial from "../Component/Testimonial.jsx";

const Home = () => {
  return (
    <>
      <Framer>
        <Hero />
      </Framer>
      <Framer>
        <Badge value="PROCESS" />
      </Framer>
      <Framer>
        <Feature />
      </Framer>
      <Framer>
        <Badge value="TESTIMONIAL" />
      </Framer>
      <Framer>
        <Testimonial />
      </Framer>
      <Framer>
        <CTA />
      </Framer>
    </>
  );
};

export default Home;
