import Image from "next/image";
import Lamp from "./lamp/page"
import Hero from "./Hero/page"
import Nav from "../components/header/Header"
import Zoom from "../components/ZoomParallax"
import About from "./About/page"
import Stats from "./Stats/page"
import Sponsors from "./Sponsors/Sponsors"

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      {/* <Sponsors /> */}
      <Zoom />
      <About />
      <Stats />
      {/* <Lamp /> */}
    </>

  );
}
