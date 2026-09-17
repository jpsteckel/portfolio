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

  const rawGlow = (Math.sin((Math.PI * scrollPosition) / (3.8 * 830))) ** 3;
  const glowOpacity = Math.min(1, Math.max(0.25, rawGlow));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="relative flex flex-col items-center justify-start w-full max-w-5xl px-6 sm:px-10 py-10 sm:py-16 gap-8 sm:gap-10">
        <div className="flex w-full justify-end">
          <div className="meta-pill">
            Last Updated: 9/17/2026
          </div>
        </div>

        <header className="hero-card flex flex-col items-center text-center gap-5">
          <div className="eyebrow">Portfolio</div>
          <h1 className="relative text-4xl sm:text-5xl font-black text-black tracking-tight">
            Josh Steckel
          </h1>
          <div className="divider" aria-hidden="true" />
          <p className="page-copy relative text-sm sm:text-base max-w-3xl text-center">
            Electrical Engineering student at the University of Delaware with hands-on experience in RF communications, PCB design, embedded
            systems, and firmware development. Demonstrated ability to lead technical subteams and deliver measurable results on real-world
            space systems and embedded hardware projects. Seeking an internship in aerospace or defense engineering.        </p>
          <a
            className="project-link"
            href="https://github.com/jpsteckel/resume-public/blob/main/resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Open my resume in a new tab"
          > View my resume </a>
          <p className="page-copy relative text-sm sm:text-base max-w-3xl text-center">
            Here are some of my personal projects, feel free to check them out!
            Also, make sure WebGL is enabled in your browser to see the interactive background effect. More info at the bottom of the page.
          </p>
        </header>

        <main className="flex flex-col items-center w-full gap-8 sm:gap-10">
          <section className="site-card flex flex-col items-center justify-center w-full gap-5 sm:gap-6" id="project1" aria-labelledby="project1-title">
            <div className="flex items-center gap-3 max-w-3xl text-center">
              <span className="project-number" aria-hidden="true">1</span>
              <h2 id="project1-title" className="relative text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Altoids Tin Meshtastic Node
              </h2>
            </div>
            <a
              className="project-link"
              href="https://github.com/jpsteckel/mintastic"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Mintastic project on GitHub"
            >
              <span>Explore Mintastic</span>
              <span className="project-link-arrow" aria-hidden="true">-&gt;</span>
            </a>
            <Image
              src={proj1pic1}
              alt="Altoids Tin Meshtastic Node"
              width={600}
              className="project-image" />
            <div className="section-label relative text-center">
              DESCRIPTION
            </div>
            <p className="page-copy relative text-sm sm:text-base max-w-3xl text-center">
              I&apos;ve designed this custom meshtastic node to fit inside an Altoids tin. The node is based on the ESP32 microcontroller and SX1262 LoRa transceiver. The node is powered by a 3.7V LiPo battery and has a built-in charging circuit. The node is also equipped with a small LCD display to show the current status of the node and the mesh network.
            </p>
            <div className="section-label relative text-center">
              STATUS
            </div>
            <p className="page-copy relative text-sm sm:text-base max-w-3xl text-center">
              After assembly and testing, I found two design errors that, while not stopping the board from functioning, will call for some redesigning.
            </p>
            <p className="page-copy relative text-sm sm:text-base max-w-3xl text-center">
              First, when I changed from a linear regulator to a switching one, I forgot to make sure the minimum input voltage matched with the battery voltage (3.7V). To fix this for testing, I&apos;ve removed the battery circuitry and soldered the 5V USB power directly to the V_BAT node. This works, but removes battery powered capabilities.
            </p>
            <p className="page-copy relative text-sm sm:text-base max-w-3xl text-center">
              Second, the WIO-SX1262 LoRa module I had selected has an on-module IPEX connector which the RF pin is connected to, meaning the SMA connector I added is disconnected. I found that there is a WIO-SX1262-N module that has the external antenna connection present, which I will use in the future. For now, I&apos;ll just buy an IPEX UHF antenna and use it for testing.
            </p>
            <p className="page-copy relative text-sm sm:text-base max-w-3xl text-center">
              The main lesson I&apos;ve learned from this project is the importance of reviewing my circuits with AI before sending them to be manufactured. I intended to do this project without use of AI, mostly in an effort to learn, but after the release of software like T3CAD (now Backplane), and GPT-6 Astra, the role that AI can play in hardware design is increasingly obvious. In the future, I will always use AI to review my boards and catch errors before fabrication. While it can&apos;t design circuits itself, it can certainly read through datasheets much faster than I can.
            </p>
            <p className="page-copy relative text-sm sm:text-base max-w-3xl text-center">
              Finally, I designed this device without knowing how I would assemble it. For certain components, I chose packages that were much to small to hand-solder realistically (Yes, I hand-soldered 0201 resistors.) I now have the capability to use a hot plate and solder paste to assemble a board, but I will also put more thought into the packages I choose.
            </p>
            <Image
              src={proj1pic2}
              alt="Altoids Tin Meshtastic Node"
              width={600}
              className="project-image" />
          </section>

          <section className="site-card flex flex-col items-center justify-center w-full gap-5 sm:gap-6" id="project2" aria-labelledby="project2-title">
            <div className="flex items-center gap-3 max-w-3xl text-center">
              <span className="project-number" aria-hidden="true">2</span>
              <h2 id="project2-title" className="relative text-2xl sm:text-3xl font-bold text-black tracking-tight">
                University of Delaware Bus Departure Board
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full gap-6">
              <Image
                src={proj2pic1}
                alt="Bus Departure Board"
                width={400}
                className="project-image max-w-[400px]" />
              <div className="relative flex flex-col items-center text-sm sm:text-base font-bold text-black text-center w-full max-w-md">
                Video I made documenting the process:
                <TikTokEmbed />
              </div>
            </div>
            <div className="section-label relative text-center">
              DESCRIPTION
            </div>
            <p className="page-copy relative text-sm sm:text-base max-w-3xl text-center">
              I created this bus departure board using an ESP32 and a 128x160 OLED screen. The board displays real-time bus departure information, including the current time, bus route, and departure time. I developed and deployed an AWS Lambda function to scrape data from the university&apos;s ETA Transit website and act as an API for the ESP32, which fetches the data every minute and updates the display. The project was built using Python, Docker, the Arduino IDE and C++ programming language.
            </p>
            <div className="section-label relative text-center">
              STATUS
            </div>
            <p className="page-copy relative text-sm sm:text-base max-w-3xl text-center">
              I am finished with this project. I&apos;ve designed a housing for the board and used it successfully for a few months to check bus departure times while living on campus. I plan to make a second version of the board with a larger, realistic screen and more features, such as displaying the current location of the bus on a map. I may decide to track a larger transit system such as MTA as well in this future version.
            </p>
          </section>

          <section className="w-full" aria-labelledby="noise-title">
            <h2 id="noise-title" className="relative text-3xl sm:text-4xl pb-6 font-bold text-center text-black tracking-tight">
              Behind the noise background effect:
            </h2>
            <div className="code-panel" style={{ opacity: 1 /* glowOpacity */ }}>
              <div className="px-5 sm:px-8 pt-7 pb-2 text-lg sm:text-2xl text-center text-white">Pseudo Random function for interactive Brownian Noise background:</div>
              <div className="px-3 sm:px-5 pb-3">
                <CodeBlock
                  language="glsl"
                  className={"w-full"}
                  text={['//OpenGL Shading Language (GLSL):\n\nvec2 random(vec2 p) {\n\treturn fract(sin(vec2(dot(p, vec2(223.36, 480.18)), dot(p, vec2(112.87, 327.57)))) * 50567.7254 + (sin(abs(uMouse[0]+184.51)) + sin(abs(uMouse[1]+259.62)))/3.0 + uTime/40.0);\n}\n\n//Takes a point and returns the noise value at that point.\nfloat noise(vec2 p) {\n\tvec2 i = floor(p);\n\tvec2 f = fract(p);\n\tvec2 u = f * f * (3.0 - 2.0 * f);\n\n\tfloat a = dot(random(i), vec2(0.5));\n\tfloat b = dot(random(i + vec2(1.0, 0.0)), vec2(0.5));\n\tfloat c = dot(random(i + vec2(0.0, 1.0)), vec2(0.5));\n\tfloat d = dot(random(i + vec2(1.0, 1.0)), vec2(0.5)); \n\n\treturn mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 2.0 - 1.0;\n}',]}
                />
              </div>
              <div className="px-5 sm:px-8 pb-7 pt-1 text-sm sm:text-base text-center text-white">
                Where:
                <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-2 space-y-1">
                  <li><strong>uMouse</strong> is the normalized mouse position from (-1, -1) to (1, 1) on the screen.</li>
                  <li><strong>uTime</strong> is the elapsed time in seconds.</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <div className="pb-10 w-full" />
      </div>
    </div>
  );
}
