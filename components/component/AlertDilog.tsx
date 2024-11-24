import React from 'react'
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
const AlertDilog = () => {
  const chatHandler=()=>{
      
  }
  return (
    <div>
      <AlertDialog>
  <AlertDialogTrigger> 
    
  
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
Chat-support
          <Image src="/assets/icons/voite.svg" alt="ch" height={20} width={20}/>
        </button>
  
       
      
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
   
      <Button variant="outline" onClick={chatHandler}><Link href='/Chat'>Let&apos;s chat</Link></Button>
     <Button><Link href='/sign-in'>sign-up</Link></Button>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>
  )
}

export default AlertDilog
