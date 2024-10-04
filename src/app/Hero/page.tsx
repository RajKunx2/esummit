"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Text from "./Text";
import Sponsors from "../Sponsors/Sponsors";

// Custom hook to detect window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return windowSize;
};

export default function RetroGrid({
  className,
  angle = 65,
}: {
  className?: string;
  angle?: number;
}) {
  const { width } = useWindowSize(); // Get the window width

  // Set text array based on window size
  const getTextArray = () => {
    if (width >= 1200) {
      // For large screens
      return ["ESUMMIT 2025", "NORTH INDIA'S BIGGEST ENTREPRENEURSHIP SUMMIT", "JANUARY 2025"];
    } else if (width >= 768) {
      // For medium screens
      return ["ESUMMIT 2025", "NORTH INDIA'S BIGGEST", "ENTREPRENEURSHIP SUMMIT", "JANUARY 2025"];
    } else {
      // For small screens
      return ["ESUMMIT 2025", "NORTH INDIA'S BIGGEST", "ENTREPRENEURSHIP SUMMIT", "JANUARY 2025"];
    }
  };

  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]",
          className
        )}
        style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
      >
        {/* Grid */}
        <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
          <div
            className={cn(
              "animate-grid",
              "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
              // Light Styles
              "[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]",
              // Dark styles
              "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"
            )}
          />
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />

        {/* Text Component */}
        <div className="absolute inset-0 flex items-center flex-col justify-center">
          <Text
            text={getTextArray()} // Use the dynamic text array
            duration={1000}
            animateOnLoad={true}
            className="text-black text-center"
          />
        </div>
      </div>

      <Sponsors />
    </>
  );
}
