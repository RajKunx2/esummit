import Image from "next/image";
import Lamp from "./lamp/page"
import Hero from "./Hero/page"
import Nav from "../components/header/index"

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      {/* <Lamp /> */}
    </>

  );
}
