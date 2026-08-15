'use client';
import Image from "next/image";
import TikTokEmbed from "./components/Tiktok";
import CodeBlock from "./components/codeblock";
import { useState, useEffect } from "react";

import proj1pic1 from '../../public/images/mesh1.jpeg';
import proj1pic2 from '../../public/images/mesh4.jpeg';
import proj2pic1 from '../../public/images/board.png';

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
      <div className="flex flex-col space-y-4 bg-transparent items-center justify-start p-40 h-lvh w-screen">
        <div className="absolute right-10 top-10 text-sm text-center text-black pointer-events-none">
          Last Updated: 8/6/2026
        </div>
        <div className="relative text-4xl sm:text-2xl font-black text-center text-black pointer-events-none">
          Josh Steckel
        </div>
        <div className="relative text-sm text-black w-4xl text-center pointer-events-none">
          Electrical Engineering student at the University of Delaware with hands-on experience in RF communications, PCB design, embedded
          systems, and firmware development. Demonstrated ability to lead technical subteams and deliver measurable results on real-world
          space systems and embedded hardware projects. Seeking an internship in aerospace or defense engineering.        </div>
        <div className="relative text-sm text-black w-4xl text-center pointer-events-none">
          Here are some of my projects, feel free to check them out!
          Also, make sure WebGL is enabled in your browser to see the interactive background effect. More info at the bottom of the page.
        </div>
        <div className="relative flex flex-col space-y-4 items-center justify-center" id="project1">
          <div className="relative text-2xl font-bold text-black w-2xl text-center pointer-events-none">
            1. Altoids Tin Meshtastic Node
          </div>
          <div className="flex flex-row items-center justify-center min-w-screen space-x-10">
            <Image
              src={proj1pic1}
              alt="Altoids Tin Meshtastic Node"
              height='100%'
              width={600}
              className="relative rounded-sm shadow-lg pointer-events-none" />
          </div>
          <div className="relative text-lg text-black font-bold max-w-4xl text-center pointer-events-none">
            DESCRIPTION
          </div>
          <div className="relative text-md text-black max-w-4xl text-center pointer-events-none">
            I've designed this custom meshtastic node to fit inside an Altoids tin. The node is based on the ESP32 microcontroller and SX1262 LoRa transceiver. The node is powered by a 3.7V LiPo battery and has a built-in charging circuit. The node is also equipped with a small LCD display to show the current status of the node and the mesh network.
          </div>
          <div className="relative text-lg text-black font-bold max-w-4xl text-center pointer-events-none">
            STATUS
          </div>
          <div className="relative text-md text-black max-w-4xl text-center pointer-events-none">
            Currently, I have finalized the circuit design and PCB layout, and have received the PCBs. I am in the process of ordering some final components. I am also working on finishing the firmware. After testing, I will deploy the nodes in a mesh network to evaluate their performance and range. I plan to finish this project by the end of August and possibly creating a second verion containing a local keyboard for communication without a phone or computer.
          </div>
          <div className="flex flex-row items-center justify-center min-w-screen space-x-10">
            <Image
              src={proj1pic2}
              alt="Altoids Tin Meshtastic Node"
              height='100%'
              width={600}
              className="relative rounded-sm shadow-lg pointer-events-none" />
          </div>
        </div>
        <div className="relative flex flex-col space-y-4 items-center justify-center" id="project2">
          <div className="relative text-2xl font-bold text-black w-2xl text-center pointer-events-none">
            2. University of Delaware Bus Departure Board
          </div>
          <div className="flex flex-row items-center justify-center max-w-screen space-x-10">
            <Image
              src={proj2pic1}
              alt="Bus Departure Board"
              height='100%'
              width={400}
              className="relative rounded-sm shadow-lg pointer-events-none" />
            <div className="relative text-md font-bold text-black text-center pointer-events-none">
              Tiktok I made documenting the process:
              <TikTokEmbed />
            </div>
          </div>
          <div className="relative text-lg text-black font-bold max-w-4xl text-center pointer-events-none">
            DESCRIPTION
          </div>
          <div className="relative text-md text-black max-w-4xl text-center pointer-events-none">
            I created this bus departure board using an ESP32 and a 128x160 OLED screen. The board displays real-time bus departure information, including the current time, bus route, and departure time. I developed and deployed an AWS Lambda function to scrape data from the university&apos;s ETA Transit website and act as an API for the ESP32, which fetches the data every minute and updates the display. The project was built using python, docker, the Arduino IDE and C++ programming language.
          </div>
          <div className="relative text-lg text-black font-bold max-w-4xl text-center pointer-events-none">
            STATUS
          </div>
          <div className="relative text-md text-black max-w-4xl text-center pointer-events-none">
            I am finished with this project. I've designed a housing for the board and used it successfully for a few months to check bus departure times while living on campus. I plan to make a second version of the board with a larger, realistic screen and more features, such as displaying the current location of the bus on a map. I may decide to track larger a larger transit system such as MTA as well in this future version.
          </div>
        </div>
        <div className="relative text-4xl sm:text-3xl pt-10 font-bold text-center text-black pointer-events-none">
          Behind the noise background effect:
        </div>
        <div className="relative flex flex-col h-lvh max-w-screen bg-zinc-950 justify-center" style={{ opacity: (Math.sin((Math.PI * scrollPosition) / (3.8 * 830))) ** 3 }}>
          <div className="pt-20 relative text-2xl text-center text-white mb-4 mt-4">Pseudo Random function for interactive Brownian Noise background:</div>
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