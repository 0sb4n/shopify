import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
      <Toaster/>
      {children}
    
    </main>
  )
}

export default layout