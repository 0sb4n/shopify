"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { Button } from "../ui/button";
import Link from 'next/link'
import localFont from "next/font/local";
const poppins = localFont({
  src: "../../app/fonts/Voltstrom.otf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function ImagesSliderDemo() {
  const images = [
    "/assets/images/generetor.jpg",
    "/assets/images/washing.jpg",
    "/assets/images/induction.jpg",
  ];
  return (
    <ImagesSlider className="h-[100vh] " images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className={`font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 ${poppins.className}`}>
         Power up your Home with <br/> Our Expert Service 
        </motion.p>
        <div className="flex justify-center items-center gap-4">
          <Link href='/services'>
        <button className="inline-flex h-10 w-36 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Service
                  
                </button></Link>
       <Link href='/Contact'>
       <Button className="px-4 h-10 text-slate-200 w-36 bg-transparent font-bold" variant={'outline'}>
        Contact</Button></Link>

        </div>
      </motion.div>
    </ImagesSlider>
  );
}
