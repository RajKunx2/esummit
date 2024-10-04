import Image from "next/image";
import Lamp from "./lamp/page"
import Hero from "./Hero/page"
import Zoom from "../components/ZoomParallax"
import About from "./About/page"
import Video from "./Stats/Video"
import Stats from "./Stats/page"
import Why from "./Why/page"
import Speakers from "./Speakers/page"
import Footer from "../components/Footer"
import Events from "./Event/page"
// import Sponsors from "./Sponsors/Sponsors"

export default function Home() {
  return (
    <>
      <Hero />
      <Zoom />
      <About />
      <Video />
      <Stats />
      <Why />
      <Events />
      <Speakers />
      <Footer />
      {/* <Lamp /> */}
    </>

  );
}
