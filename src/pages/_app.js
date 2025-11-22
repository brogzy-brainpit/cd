import { AnimatePresence, useInView,motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
// import { Instrument_Serif,Instrument_Sans, Lora, DM_Sans,Manrope,Agdasima,Epilogue,Poppins } from "next/font/google";
import {Manrope,Agdasima } from "next/font/google";

// import "../styles/fonts.css";
import "../styles/mostHave.css";
import "../styles/globals.css";
import "../styles/embla.css";
import "../styles/menu.css";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

// import local fonts froom ./fontdirectory
const custom2 = localFont({
 
  src:  "./fonts/Qrania.otf",
  variable: "--font-custom2",
  weight: "100 200 300 400 500 600 700 800 900",
});
const custom = Agdasima({
  subsets: ["latin"],
  weight: ["400","700"],
  // style: ["normal"], // 👈 include italics
  variable: "--font-custom",
  display: "swap",
});
const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  // style: ["normal", ], // 👈 include italics
  variable: "--font-body",
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}
    >
      <div
        key={router.asPath}
        className={`${custom2.variable} ${custom.variable} ${body.variable}`}
      >
        <Component {...pageProps} />
        {/* <Footer /> */}
      </div>
    </AnimatePresence>
  );
}
