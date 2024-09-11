"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { navLink } from "@/Constants"
import Image from "next/image"
export function About() {
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Acme Services</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Acme Services is a leading provider of professional services, dedicated to helping businesses of all
                  sizes achieve their goals. With a team of experienced consultants and a commitment to excellence, we
                  offer a comprehensive suite of services designed to drive growth, improve efficiency, and unlock new
                  opportunities.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our mission is to be a trusted partner to our clients, providing tailored solutions that address their
                  unique challenges and empower them to succeed in an ever-evolving business landscape. We pride
                  ourselves on our ability to deliver measurable results, leveraging the latest industry insights and
                  cutting-edge technologies to ensure our clients stay ahead of the curve.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="bg-muted rounded-lg p-6 shadow-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Our Team"
                    width={64}
                    height={64}
                    className="mb-4"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">Our Team</h3>
                  <p className="text-muted-foreground">
                    At the heart of Acme Services are our talented and dedicated professionals, each with a unique set
                    of skills and expertise. Our team is committed to delivering exceptional service and driving
                    transformative change for our clients.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Meet the Team
                  </Button>
                </div>
                <div className="bg-muted rounded-lg p-6 shadow-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Our Approach"
                    width={64}
                    height={64}
                    className="mb-4"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">Our Approach</h3>
                  <p className="text-muted-foreground">
                    We believe in a collaborative and data-driven approach to problem-solving. By working closely with
                    our clients, we develop a deep understanding of their unique needs and challenges, and then craft
                    tailored solutions that deliver measurable results.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </div>
                <div className="bg-muted rounded-lg p-6 shadow-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Our Values"
                    width={64}
                    height={64}
                    className="mb-4"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">Our Values</h3>
                  <p className="text-muted-foreground">
                    Integrity, excellence, and innovation are the core values that guide our work at Acme Services. We
                    are committed to upholding the highest ethical standards and delivering exceptional results for our
                    clients.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Explore Our Values
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