import { Poppins } from "next/font/google";
import "./globals.css";
import Noise from "./components/Noise";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Josh Steckel - Portfolio",
  description: "Electrical Engineer Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.className} antialiased`}
      >
        <Noise />
        {children}
      </body>
    </html>
  );
}
