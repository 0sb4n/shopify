"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { navLink } from "@/Constants"

export function Pricing() {
  const pathName =usePathname()
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover our flexible pricing options tailored to meet the needs of businesses of all sizes. Whether
                  you&rsquo;re a small startup or a large enterprise, we have a plan that will fit your budget and help you
                  achieve your goals.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="bg-muted rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <p className="text-4xl font-bold my-4">$49/mo</p>
                  <p className="text-muted-foreground">Perfect for small businesses and freelancers.</p>
                  <ul className="space-y-2 my-4">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      Up to 5 users
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      10GB storage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      Basic support
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </div>
                <div className="bg-muted rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="text-4xl font-bold my-4">$99/mo</p>
                  <p className="text-muted-foreground">Ideal for growing businesses and teams.</p>
                  <ul className="space-y-2 my-4">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      Up to 25 users
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      50GB storage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      Priority support
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </div>
                <div className="bg-muted rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <p className="text-4xl font-bold my-4">$499/mo</p>
                  <p className="text-muted-foreground">Tailored for large organizations and custom needs.</p>
                  <ul className="space-y-2 my-4">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      Unlimited users
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      Unlimited storage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      Dedicated support
                    </li>
                  </ul>
                  <Button className="w-full">Contact Sales</Button>
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

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
