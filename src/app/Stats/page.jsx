import { VelocityScroll } from "../../components/ui/scroll";
import { VelocityScroll2 } from "../../components/ui/scroll2";

export default function ScrollBasedVelocityDemo() {
  return (

    <div className="my-12">
      <VelocityScroll
        text="40000+ Footfall"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <VelocityScroll2
        text="10+ Competitions"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <VelocityScroll
        text="25+ Artists and Speakers"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>

  );
}
