'use client';
import Image from "next/image";
import CodeBlock from "./components/codeblock";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY; // For vertical scroll
    // For horizontal scroll, use window.scrollX
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //  <div className="fixed right-0 text-2xl h-20 z-30">scroll position = {(Math.sin((Math.PI*scrollPosition)/(2*830)))**2} </div>

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col space-y-4 bg-transparent font-serif items-center justify-center h-lvh w-screen">
        <div className="relative text-4xl sm:text-6xl font-bold text-center text-white pointer-events-none">
          Test
          <div className="absolute inset-0 w-full h-full bg-black/[0.5] p-2 text-center z-[-2] blur-md"></div>
        </div>
        <div className="relative text-sm font-light w-lg text-center pointer-events-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <div className="absolute inset-0 w-full h-full bg-black/[0.5] p-2 text-center z-[-2] blur-md"></div>
        </div>
      </div>
      <div className="relative flex flex-col h-lvh w-full bg-zinc-950 justify-center" style={{ opacity: (Math.sin((Math.PI * scrollPosition) / (2 * 830))) ** 3 }}>
        <div className="pt-20 relative text-2xl text-center text-white mb-4 mt-4">Random function for interactive Brownian Noise background:</div>
        <CodeBlock
          language="glsl"
          className={"w-auto"}
          text={['//OpenGL Shading Language (GLSL):\n\nvec2 random(vec2 p) {\n\treturn fract(sin(vec2(dot(p, vec2(223.36, 480.18)), dot(p, vec2(112.87, 327.57)))) * 50567.7254 + (sin(abs(uMouse[0]+184.51)) + sin(abs(uMouse[1]+259.62)))/3.0 + uTime/40.0);\n}',]}
        />
        <div className="pt-1 text-md text-center text-white mb-4 mt-4">
          Where:
          <ul className="list-disc list-inside">
            <li><strong>uMouse</strong> is the normalized mouse position from (-1, -1) to (1, 1) on the screen.</li>
            <li><strong>uTime</strong> is the elapsed time in seconds.</li>
          </ul>
        </div>
        <div className="absolute inset-0 top-0 left-0 w-full h-[lvh+70] bg-black z-[-2] blur-sm"></div>
      </div>
      <div className="h-lvh w-full bg-transparent" />
    </div>
  );
}