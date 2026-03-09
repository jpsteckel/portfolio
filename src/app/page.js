'use client';
import Image from "next/image";
import CodeBlock from "./components/codeblock";
import { useState, useEffect } from "react";

import proj1pic from '../../public/images/board.png';

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
      <div className="flex flex-col space-y-4 bg-transparent font-serif items-center justify-start p-40 h-lvh w-screen">
        <div className="relative text-4xl sm:text-4xl font-black text-center text-black pointer-events-none">
          Josh Steckel
        </div>
        <div className="relative text-sm font-bold text-black w-2xl text-center pointer-events-none">
          I am a first-year Electrical Engineering (Bachelors in Engineering) student at the University of Delaware, hoping to focus on RF technology and embedded systems. I am passionate about learning and applying my knowledge to real-world problems, and I am eager to gain experience in the field through internships and research opportunities. I&apos;ve created this website to showcase my work and skills.
        </div>
        <div className="relative text-sm font-bold text-black w-2xl text-center pointer-events-none">
          Here are some of my projects, feel free to check them out!
        </div>
      <div className="relative flex flex-col space-y-4 items-center justify-center" id="project1">
        <div className="relative text-2xl font-bold text-black w-2xl text-center pointer-events-none">
          1. University of Delaware Bus Departure Board
        </div>
        <div className="flex flex-row items-center justify-center min-w-screen">
          <Image
            src={proj1pic}
            alt="Bus Departure Board"
            width={600}
            height={400}
            className="relative rounded-sm shadow-lg pointer-events-none"/>
        </div>
        <div className="relative text-sm font-bold text-black w-2xl text-center pointer-events-none">
          I created bus departure board for the University of Delaware using an ESP32 and a 128x160 OLED screen. The board displays real-time bus departure information, including the current time, bus route, and departure time. I developed and deployed an AWS Lambda function to scrape data from the university&apos;s ETA Transit website and act as an API for the ESP32, which fetches the data every minute and updates the display. The project was built using python, docker, the Arduino IDE and C++ programming language.
        </div>
      </div>
      <div className="relative text-4xl sm:text-4xl font-black text-center text-black pointer-events-none">
          Behind the noise background effect:
        </div>
      <div className="relative flex flex-col h-lvh w-full bg-zinc-950 justify-center" style={{ opacity: (Math.sin((Math.PI * scrollPosition) / (2 * 830))) ** 3 }}>
        <div className="pt-20 relative text-2xl text-center text-white mb-4 mt-4">Random function for interactive Brownian Noise background:</div>
        <CodeBlock
          language="glsl" 
          className={"w-auto"}
          text={['//OpenGL Shading Language (GLSL):\n\nvec2 random(vec2 p) {\n\treturn fract(sin(vec2(dot(p, vec2(223.36, 480.18)), dot(p, vec2(112.87, 327.57)))) * 50567.7254 + (sin(abs(uMouse[0]+184.51)) + sin(abs(uMouse[1]+259.62)))/3.0 + uTime/40.0);\n}\n\n//Takes a point and returns the noise value at that point.\nfloat noise(vec2 p) {\n\tvec2 i = floor(p);\n\tvec2 f = fract(p);\n\tvec2 u = f * f * (3.0 - 2.0 * f);\n\n\tfloat a = dot(random(i), vec2(0.5));\n\tfloat b = dot(random(i + vec2(1.0, 0.0)), vec2(0.5));\n\tfloat c = dot(random(i + vec2(0.0, 1.0)), vec2(0.5));\n\tfloat d = dot(random(i + vec2(1.0, 1.0)), vec2(0.5)); \n\n\treturn mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 2.0 - 1.0;\n}',]}
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
    </div>
  );
}