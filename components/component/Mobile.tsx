import React from 'react'

import { usePathname } from 'next/navigation'
import {
    Sheet,
    SheetContent,
    
    SheetTrigger,
  } from "@/components/ui/sheet"
import { navLink } from '@/Constants'
import {
  AlertDialog,

  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Mobile = () => {
 
    const pathName = usePathname();
  return (
    <>
    <Sheet >
      <div  className='md:hidden flex items-center justify-center gap-3'>
      <AlertDialog>
  <AlertDialogTrigger>
        <Image src="/assets/icons/voite.svg" alt="ch" height={26} width={26}/>
         </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <div className="flex justify-between items-center ">
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogCancel>x</AlertDialogCancel>
      </div>
      <AlertDialogDescription>
      To use chat support, please sign in first. If you have an account, you can start chatting; otherwise, please sign up
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
   
      <Button variant="outline">
        <Link href='/Chat'>Let&apos;s Chat</Link>
      </Button>
     <Button><Link href='/sign-in'>sign-up</Link></Button>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
  <SheetTrigger>
    <MountainIcon className='h-8 w-8 rounded-md p-1 bg-white shadow-xl'/>
  </SheetTrigger>
      </div>
   
  <SheetContent className=' shadow-inner bg-white backdrop-blur-xl w-56 outline-none border-l-0 rounded-md'>
    <div>
{navLink.map((link)=>{
    const isActive = link.route === pathName
    return(
<ul className='w-full mt-3 ' key={link.key}>
    <li >
        <Link href={link.route}  className={`w-full block text-black text-lg p-2 ${isActive ? 'border-[1px] rounded-lg': 'border-none'}`}  >
        {link.label}</Link>
        
    </li>
</ul>
    )
})}

       
    </div>
   
  </SheetContent>
</Sheet>

    </>
  )
}
const MountainIcon=(props: React.SVGProps<SVGSVGElement>)=>{
  return(
    <svg {...props} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
<path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
<path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
</svg>
  )
}

export default Mobile