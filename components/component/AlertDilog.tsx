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
  <AlertDialogTrigger> <Button variant="secondary" className="shadow-lg" >
        Chat Support
        <Image src="/assets/icons/voite.svg" alt="ch" height={20} width={20}/>
        </Button> </AlertDialogTrigger>
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
   
      <Button variant="outline" onClick={chatHandler}><Link href='/Chat'>Let's chat</Link></Button>
     <Button><Link href='/sign-in'>sign-up</Link></Button>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>
  )
}

export default AlertDilog
