"use client";
import { Toaster } from '@/components/ui/toaster'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth';


const layout = ({children}:{children:React.ReactNode},session:Session | null ) => {
  return (
    <main>
      <SessionProvider session={session}>
      <Toaster/>
      {children}</SessionProvider>
    
    </main>
  )
}

export default layout