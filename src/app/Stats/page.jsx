import { VelocityScroll } from "../../components/ui/scroll";
import { VelocityScroll2 } from "../../components/ui/scroll2";

export default function ScrollBasedVelocityDemo() {
  return (

    <div className="my-12">
      <VelocityScroll
        text="Footfall 40000+"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <VelocityScroll2
        text="Competitions 10+"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <VelocityScroll
        text="Artists and Speakers 25+"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>

  );
}
