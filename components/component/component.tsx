"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { usePathname } from "next/navigation"
import { navLink } from "@/Constants"
import { cardsData } from "@/Constants"
import Mobile from "./Mobile"  

import AlertDilog from "./AlertDilog"

import ImagesSliderDemo  from "./Hero"


export function Component() {

 
  const pathName = usePathname()
  return (
    <div className="flex  flex-col min-h-[100dvh]">
      
      <header className="flex fixed lg:w-[80%]  top-3 lg:right-[10rem] w-full  z-10 w- backdrop-blur-2xl items-center justify-between h-16 px-4 lg:px-16 rounded-full ">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-8 w-8" />
          <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">TrustedRepairs</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
{navLink.map((link)=>{
const isActive =link.route ===pathName
return(
          <Link href={link.route} key={link.key} className={`text-md font-bold text-slate-400 hover:underline ${isActive ? 'underline':' underline-offset-4'} `} prefetch={false}>
            {link.label}
          </Link>
) 
  
})}
      
<AlertDilog/>

        </nav>
      <Mobile/>

      </header>
   
      <main className="flex-1 ">
      <ImagesSliderDemo/>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {
                cardsData.map((plan,index)=>{
                  return(

              <Card key={index} className="p-6 space-y-4  shadow-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{plan.title}</h3>
                  <div className="text-3xl font-bold">{plan.price}</div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">{plan.description}</p>
                  
                  <ul className="space-y-1 text-muted-foreground" >
                  {plan.features.map((feature,i)=>{
                    return(

                    <li key={i}>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      {feature}
                    </li>
                   
                  
                    )
                  })}</ul>
                </div>
                <Button>{plan.cta}</Button>
              </Card>
                  )
                })
              }
           
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
             {
              cardsData.map((data,index)=>{
                return(

              <Card key={index} className="p-6 space-y-4 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {
                   data.images.map((image,i)=>{
                    return(

                      <Image key={i}
                        src={image}
                        alt="Image 1"
                        width={300}
                        height={300}
                        className="aspect-square object-cover rounded-md"
                      />
                    )
                   })
                  }
                 
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{data.title}</h3>
                  <div className="text-4xl font-bold">{data.price}</div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">{data.description}</p>
                  <p className="text-muted-foreground">{data.description}</p>
                  <ul className="space-y-1 text-muted-foreground">
                   {
                    data.features.map((desc,i)=>{
                      return(

                    <li  key={i}>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    {desc}
                    </li>
                      )
                    })
                   }
                  
                  </ul>
                </div>
                <Button>{data.cta}</Button>
              </Card>
                )
              })
             }
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 trustedRepairs. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="https://wa.me/+917669145885"  className="text-xs hover:underline underline-offset-4" prefetch={false}>
            <Image src='/assets/icons/whatapp.svg' alt="whatsapp" height={20} width={20}></Image>
          </Link>
          <Link href="https://www.instagram.com/trustedrepairs/" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            <Image src='/assets/icons/insta.svg' alt="whatsapp" height={20} width={20}></Image>
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CheckIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
   
<svg {...props} width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18,9.5V8H17V7a2,2,0,0,0-2-2H4A2,2,0,0,0,2,7v7a2,2,0,0,0,2,2H15a2,2,0,0,0,2-2V13h1V11.5h4v-2ZM14,14H5V13h9Zm0-2H5V11h9Zm0-2H5V9h9Zm0-2H5V7h9ZM3,17H16v2H3Z"/><rect width="24" height="24" fill="none"/></svg>
    
  )
}

