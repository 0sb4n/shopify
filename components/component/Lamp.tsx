"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import Link from 'next/link'
import Image from "next/image"

export default function LampDemo() {
  return (
  
    <LampContainer  >
    
  <div className="relative z-20 top-0  w-full flex flex-col items-center gap-2">

    <motion.div
        initial={{ opacity: 0.5,y:100 }}
        whileInView={{ opacity: 1,y:0  }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-12 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl absolute top-16"
      >
        
       
      
      </motion.div>
   
      <div className=" z-10 w-full flex items-center justify-between lg:gap-4 gap-6 lg:flex-row md:flex-row flex-col   px-6">
 
              <div className="flex flex-col justify-center space-y-4 w-full lg:w-[50%]">
                <div className="space-y-2">
                  <h1 className="text-3xl  text-transparent bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Power Up Your Home with Our Expert Services
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore Our Full Range of Services to Keep Your Home Running Smoothly. From Repairs to Maintenance, We&apos;ve Got You Covered.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/services"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/Contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="lg:w-[50%] lg:h-[400px] h-[240px] w-full overflow-hidden rounded-md">
                <Image
                  src="/assets/images/motor.jpeg"
                  width={450}
                  height={400}
                  alt="3D Mockup"
                  className="object-cover"
                />
               </div>
 </div>
  </div>
  
 
  
      
    
    </LampContainer>
   
  );
}
