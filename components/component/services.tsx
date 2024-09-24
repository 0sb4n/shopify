"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"
import { navLink, serviceSection } from "@/Constants"
import Image from "next/image"
import Mobile from "./Mobile"
export function Services() {
  const pathName = usePathname()
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center justify-between h-16 px-4 lg:px-6 border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-8 w-8" />
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Professional Electric Services
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
               
                We provide expert electrical services for both home appliances, like fans, ACs, and washing machines, as well as commercial equipment, including motors and generators. Whether for your home or business, count on us for reliable, efficient service.
                </p>
              </div>
          
         <div className="grid gap-6">{
          serviceSection.map((data,index)=>{
            return(

         <div className="bg-muted rounded-lg p-6 shadow-lg" key={index}>
                  <Image
                    src={data.image}
                    alt="Innovative Solutions"
                    width={64}
                    height={64}
                    className="mb-4"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">{data.category}</h3>
                 <div className="flex justify-center gap-2 items-center mt-2">
                  {
                    data.services.map((service,index)=>{
                    return(
                  
                  <div className="p-2 shadow-2xl bg-white rounded-md" key={index}>
                    <Image src={service.image} alt="icon" height={26} width={26}/>
                    <h4 className="text-lg font-bold">{service.name}</h4>
                    <p className="text-sm font-medium">{service.description}</p>
                  </div>
                    )
                  })
                    }
                 
                 </div>
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
function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
   
<svg {...props} width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18,9.5V8H17V7a2,2,0,0,0-2-2H4A2,2,0,0,0,2,7v7a2,2,0,0,0,2,2H15a2,2,0,0,0,2-2V13h1V11.5h4v-2ZM14,14H5V13h9Zm0-2H5V11h9Zm0-2H5V9h9Zm0-2H5V7h9ZM3,17H16v2H3Z"/><rect width="24" height="24" fill="none"/></svg>
    
  )
}