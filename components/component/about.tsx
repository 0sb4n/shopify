"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { navLink } from "@/Constants"
import { about } from "@/Constants"
import Image from "next/image"
import Mobile from "./Mobile"
export function About() {
  const pathName = usePathname()
  return (
    
    <div className="flex flex-col min-h-[100dvh]">

      <header className="flex items-center justify-between h-16 px-4 lg:px-6 border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Image src='/assets/icons/motor.svg' alt="cut" height={26} width={26} className="contain"></Image>
          <span className="text-lg font-semibold">TrustedRepairs</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
{navLink.map((link)=>{
const isActive =link.route ===pathName
return(
          <Link href={link.route} key={link.key} className={`text-sm font-medium hover:underline ${isActive ? 'underline':' underline-offset-4'} `} prefetch={false}>
            {link.label}
          </Link>
) 
  
})}
        
        </nav>
        <Mobile/>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About trustedRepairs</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We provide expert repair and maintenance for home and commercial appliances, including fans, ACs, washing machines, motors, and generators. Our mission is to offer affordable, efficient solutions that ensure smooth operations and client satisfaction.
                </p>
             
              </div>
              <div className="grid gap-6">
                {
                  about.map((data,i)=>{
                    return(

                <div className="bg-muted rounded-lg p-6 shadow-lg" key={i}>
                  <Image src={data.image} alt="image" height={26} width={26}/>
                  <h3 className="text-xl font-bold">{data.role}</h3>
                  <p className="text-muted-foreground">
                   {
                    data.description
                   }
                  </p>
                  <Button variant="outline" className="mt-4">
                    Meet the Team
                  </Button>
                </div>
                    )
                  })
                }
             
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Trustedrepairs. All rights reserved.</p>
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
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Refrel
          </Link>
        </nav>
      </footer>
    </div>
    
  )
}
