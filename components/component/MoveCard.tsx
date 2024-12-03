"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
{
  src:"/assets/images/slider1.jpg"
},
{
  src:"/assets/images/slider2.jpg"
},
{
  src:"/assets/images/slider3.jpg"
},
{
  src:"/assets/images/slider4.jpg"
},
{
  src:"/assets/images/fan.jpg"
},

];
