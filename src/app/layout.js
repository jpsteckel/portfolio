import { Inter } from "next/font/google";
import "./globals.css";
import Noise from "./components/Noise";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Josh Steckel - Portfolio",
  description: "Electrical Engineer Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased justify-items-center`}
      >
        <div id="header" className="fixed h-15 z-40">
          <div className="absolute top-0 left-0 w-screen h-26 bg-black/[0.7] blur-sm -z-10"></div>
          <div className="fixed top-0 left-0 w-full h-20 bg-zinc-900 z-5">
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-black via-white via-white to-black animate-gradient-x z-10"></div>
          </div>
          <div className="flex flex-row h-full pl-20 space-x-5 items-center z-10">
            <p className="relative text-white">Header</p>
          </div>
        </div>
        <Noise />
        {children}
      </body>
    </html>
  );
}
