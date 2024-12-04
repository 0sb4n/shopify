"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
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


];
