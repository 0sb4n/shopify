"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import localFont from "next/font/local";
const poppins = localFont({
  src: "../../app/fonts/Voltstrom.otf",
  variable: "--font-poppins",
  weight: "100 900",
});
export  default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="w-full h-screen flex items-center">
      <div className="bg-black hidden md:w-[50%] md:flex h-full gap-2  flex-col justify-center items-center"><h1 className={`text-6xl text-center font-bold text-white ${poppins.className}`}> Welcome to  <br />trustedrepairs</h1>
      <p className="text-neutral-400 text-center text-xl font-semibold ">power up your services  with Trustedrepairs.<br />  A complete solution of your electricls appliances</p></div>
    <div className="max-w-md border-none rounded-md shadow-xl w-full mx-auto  md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className={`font-bold text-xl text-neutral-800 dark:text-neutral-200 `}>
        Welcome to trustedrepairs
      </h2>
      <p className="text-neutral-500 text-sm font-medium max-w-sm mt-2 dark:text-neutral-300">
        power up your appliances with trustedrepairs 
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-row md:flex-row items-center gap-2  space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name"> what&apos;s Your name</Label>
            <Input id="name" placeholder="Type Your Name..." type="text" className=" shadow-lg border-none" />
          </LabelInputContainer>
         
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Type Your Email..." type="email"  className=" shadow-lg border-none"/>
        </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Phone Number</Label>
          <Input id="email" placeholder="+919855xxxxxx" type="number" className=" shadow-lg border-none"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">varify OTP</Label>
          <Input id="email" placeholder="" type="number" maxLength={4} className=" shadow-lg border-none"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="password" className=" shadow-lg border-none">
          
          </Input>
        
        </LabelInputContainer>
       

        <Button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
         
        </Button>
           <p className=" text-slate-800 text-center mt-5">or</p>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
        <div className="flex w-full gap-4 space-y-2 justify-center items-center">
          <Button
           variant='secondary'
            className="w-[40%] h-10"
          >
          
            <Image src='/assets/icons/google.svg' alt="icon" height={18} width={18}/>
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
          
          </Button> 
          <Button
          variant='secondary'
           className="w-[40%] h-[2.6rem]"
          >
          <Image src='/assets/icons/facebook.svg' alt="icon" height={20} width={20}/>
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
             Facebook
            </span>
            
         
          </Button>
        </div>
      </form>
    </div>
    </div> 
  );
}



const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
