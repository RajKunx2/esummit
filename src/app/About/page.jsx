import BoxReveal from "../../components/magicui/box-reveal";

export default function BoxRevealDemo() {
    return (
        <div className="size-full w-full flex flex-col items-center justify-center overflow-hidden pt-8 mt-[100vh] text-center">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold">
                    About Us<span className="text-[#5046e6]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1rem] max-w-[80%] mx-auto text-xl md:text-3xl md:max-w-[60%] text-center">
                    E-Cell DU presents its annual flagship event E-SUMMIT'241 One of the biggest Entrepreneurship summits in India, E-Summit will bring to you a series of enthralling events. from panel discussions with distinguished dignitaries.to exciting competitions like B-plan.
                    Case study, hackathon, along with a spectacular band night and comedy night, the level of grandeur will be unparalleled
                </h2>
            </BoxReveal>

            {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-6">
                    <p>
                        -&gt; 20+ free and open-source animated components built with
                        <span className="font-semibold text-[#5046e6]"> React</span>,
                        <span className="font-semibold text-[#5046e6]"> Typescript</span>,
                        <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
                        and
                        <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
                        . <br />
                        -&gt; 100% open-source, and customizable. <br />
                    </p>
                </div>
            </BoxReveal> */}

            {/* Uncomment this button if you want to include it */}
            {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
            </BoxReveal> */}
        </div>
    );
}
