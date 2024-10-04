import Meteors from "../../components/magicui/meteors";

export default function MeteorDemo() {
    return (
        <div className="relative flex h-[500px] w-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <Meteors number={40} />
            <span className="pointer-events-none whitespace-pre-wrap bg-black bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Why E-Cell DTU
            </span>
            <p className="text-center max-w-[80%] md:max-w-[60%] mt-12 text-lg">For 17 years, E-Cell DTU has championed an entrepreneurial ethos, guiding students with the expertise of venture capitalists and industry leaders. Our mission is to nurture 'CREATORS' transcending traditional education by promoting values of productivity, innovation, and independent thinking. E-Cell DTU inspires 'CHANGE' by instilling out-of-the-box ideas and equipping individuals to be architects of transformation. We are dedicated to shaping engineers who actively contribute to a future defined by innovation and impact.
            </p>
        </div>
    );
}
