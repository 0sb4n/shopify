import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Input } from '../ui/input'
import { Search ,MapPin,ShoppingCart, ClipboardList,UserRound,UserRoundPen } from 'lucide-react'
const Main = () => {
  return (
    <main className='w-full h-screen bg-white'>
        <nav className=' h-fit fixed w-full border-b-2 px-10
         border-gray-200 flex py-4 flex-col md:flex-row justify-center items-center lg:gap-2 gap-4
         
         '>
         <div className='lg:w-[50%] w-full flex  justify-between gap-8 items-center '>
            
            <Link href='/main' className=' items-center font-bold flex'>
            <Image src='/assets/icons/motor.svg' alt='icon' height={25} width={36}/>
            Trustedrepairs</Link>
            <div className="relative">
        <Input
          type="text"
          placeholder="Search for services"
          
          className="w-full border-none shadow-xl h-14 pl-10 pr-4 py-2"
          aria-label="Search for services"
        />
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 h-5 w-5" />
        
          {/* <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
          
              <li
               
              >
                suggestion
              </li>
          
          </ul> */}
     
      </div>
         </div>
         
         <div className='lg:w-[50%] w-full flex justify-between items-center gap-6'>
         <div className="w-full relative">
        <Input
          type="text"
          placeholder="Search for services"
          
          className="w-full border-none shadow-xl h-14 pl-10 pr-4 py-2"
          aria-label="Search for services"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 h-5 w-5" />
        
          {/* <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
          
              <li
               
              >
                suggestion
              </li>
          
          </ul> */}
     
      </div>
      <div className='flex justify-center gap-6 items-center'>
      <ClipboardList className='text-purple-400  lg:inline-block hidden '/>
         
         <div className='border-4 border-gray-300 shadow-xl p-2 rounded-full'><ShoppingCart className='text-purple-400 '/></div>
         <UserRoundPen className='text-purple-400 md:inline-block hidden'/>
      </div>
          </div>
        </nav>
      
    </main>
  )
}

export default Main