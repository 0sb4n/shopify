"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { navLink } from "@/Constants"
import Image from "next/image"
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
        <Button>Get Started</Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Professional Services
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover our comprehensive suite of professional services designed to help your business thrive. From
                  strategy to execution, we've got you covered.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="bg-muted rounded-lg p-6 shadow-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Strategy Consulting"
                    width={64}
                    height={64}
                    className="mb-4"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">Strategy Consulting</h3>
                  <p className="text-muted-foreground">
                    Our experienced consultants will work with you to develop a comprehensive business strategy tailored
                    to your unique needs.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </div>
                <div className="bg-muted rounded-lg p-6 shadow-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Digital Transformation"
                    width={64}
                    height={64}
                    className="mb-4"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">Digital Transformation</h3>
                  <p className="text-muted-foreground">
                    Leverage the power of technology to streamline your operations and drive innovation in your
                    business.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </div>
                <div className="bg-muted rounded-lg p-6 shadow-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Marketing Solutions"
                    width={64}
                    height={64}
                    className="mb-4"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">Marketing Solutions</h3>
                  <p className="text-muted-foreground">
                    Our marketing experts will help you reach your target audience and increase brand awareness through
                    data-driven strategies.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </div>
                <div className="bg-muted rounded-lg p-6 shadow-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="IT Consulting"
                    width={64}
                    height={64}
                    className="mb-4"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">IT Consulting</h3>
                  <p className="text-muted-foreground">
                    Optimize your IT infrastructure and ensure your technology is aligned with your business goals.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Services. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
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
function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
   
<svg {...props} width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18,9.5V8H17V7a2,2,0,0,0-2-2H4A2,2,0,0,0,2,7v7a2,2,0,0,0,2,2H15a2,2,0,0,0,2-2V13h1V11.5h4v-2ZM14,14H5V13h9Zm0-2H5V11h9Zm0-2H5V9h9Zm0-2H5V7h9ZM3,17H16v2H3Z"/><rect width="24" height="24" fill="none"/></svg>
    
  )
}