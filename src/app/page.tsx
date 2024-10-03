import Image from "next/image";
import Lamp from "./lamp/page"
import Hero from "./Hero/page"
import Nav from "../components/header/index"
import Zoom from "../components/ZoomParallax"
import About from "./About/page"

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Zoom />
      <About />
      {/* <Lamp /> */}
    </>

  );
}
