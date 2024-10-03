"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface HyperTextProps {
  text: string[]; // Array of strings for three lines of text
  duration?: number;
  framerProps?: Variants;
  className?: string;
  animateOnLoad?: boolean;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default function HyperText({
  text = ["BIG TEXT", "MEDIUM TEXT", "MEDIUM TEXT"], // Default text for 3 lines
  duration = 1500,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text.map(t => t.split("")));
  const [trigger, setTrigger] = useState(false);
  const interations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    interations.current = 0;
    setTrigger(true);
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!animateOnLoad && isFirstRender.current) {
          clearInterval(interval);
          isFirstRender.current = false;
          return;
        }
        if (interations.current < text.join(" ").length) {
          setDisplayText((t) =>
            t.map((line, lineIdx) =>
              line.map((letter, i) =>
                letter === " "
                  ? letter
                  : i <= interations.current
                  ? text[lineIdx][i]
                  : alphabets[getRandomInt(26)]
              )
            )
          );
          interations.current = interations.current + 0.1;
        } else {
          setTrigger(false);
          clearInterval(interval);
        }
      },
      duration / (text.join(" ").length * 10),
    );
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [text, duration, trigger, animateOnLoad]);

  return (
    <div className="overflow-hidden py-4 flex flex-col space-y-4 cursor-default scale-100" onMouseEnter={triggerAnimation}>
      <AnimatePresence mode="wait">
        {displayText.map((line, lineIdx) => (
          <div key={lineIdx} className="flex space-x-1 justify-center">
            {line.map((letter, i) => (
              <motion.h1
                key={i}
                className={cn(
                  // Tailwind CSS responsive font sizes for the lines
                  lineIdx === 0
                    ? "text-4xl lg:text-7xl font-bold" // Large text for first line
                    : "text-2xl lg:text-4xl font-medium", // Medium text for other lines
                  "font-mono",
                  letter === " " ? "w-3" : "",
                  className
                )}
                {...framerProps}
              >
                {letter.toUpperCase()}
              </motion.h1>
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
