"use client"
import React, { useEffect, useState,useCallback,useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Input } from '../ui/input'
import { TrendingSearches } from './TrendingSearches'
import { Search ,MapPin,ShoppingCart, ClipboardList,UserRoundPen, } from 'lucide-react'

import DynamicSheet from './multicategorySheet'
import { LayoutGridDemo } from './layoutGrid'


const Main = () => {
  const placeholders=[
    "'microwave'","'three-phase motor'","'alternater'","'crane'"

  ]
  const trendingSearches = [
    'Hair cut',
    'AC repair',
    'Home cleaning',
    'Plumbing',
    'Massage therapy',
  ]
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [currentPlaceholder, setCurrentPlaceholder] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [showTrending, setShowTrending] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  
  const typeEffect = useCallback(() => {
    if (isFocused) return

    const currentText = placeholders[placeholderIndex]
    const shouldDelete = currentPlaceholder === currentText || isDeleting

    if (shouldDelete) {
      setIsDeleting(true)
      setCurrentPlaceholder((prev) => prev.slice(0, -1))
    } else {
      setCurrentPlaceholder((prev) => currentText.slice(0, prev.length + 1))
    }

    if (!shouldDelete && currentPlaceholder === currentText) {
      setTimeout(() => setIsDeleting(true), 1500)
    } else if (isDeleting && currentPlaceholder === '') {
      setIsDeleting(false)
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
    }
  }, [placeholderIndex, currentPlaceholder, isDeleting, isFocused])

  useEffect(() => {
    const timer = setTimeout(typeEffect, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [typeEffect, isDeleting])

  const handleFocus = () => {
    setIsFocused(true)
    setShowTrending(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
    // Delay hiding trending searches to allow for clicks
    setTimeout(() => setShowTrending(false), 200)
  }

  const handleTrendingClick = (search: string) => {
    if (inputRef.current) {
      inputRef.current.value = search
      inputRef.current.focus()
    }
    setShowTrending(false)
  }
  return (
    <main className='w-full h-screen bg-white relative'>
        <nav className=' h-fit fixed bg-white w-full border-b-[1px] px-4
          border-gray-200 flex py-4 flex-col md:flex-row justify-center items-center lg:gap-2 gap-4
 z-20
         '>
         <div className='lg:w-[50%] w-full flex  justify-between gap-8 items-center '>
            
            <Link href='/main' className=' items-center font-bold flex'>
            <Image src='/assets/icons/motor.svg' alt='icon' height={25} width={36}/>
            Trustedrepairs</Link>
            <div className="relative">
        <Input
          type="text"
          
          placeholder='use current Location'
          onClick={()=>setCurrentPlaceholder('service')}
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
          ref={inputRef}
          placeholder={isFocused ? 'Search a service' : `search a ${currentPlaceholder}`}
          onFocus={handleFocus}
        onBlur={handleBlur}
          className="w-full border-none shadow-xl h-14 pl-10 pr-4 py-2"
          aria-label="Search for services"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 h-5 w-5" />
        {showTrending && ( 
          <TrendingSearches searches={trendingSearches} onSearchClick={handleTrendingClick} />
)}
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
     <section className=' w-full absolute top-32 lg:top-6 md:top-6  left-0 h-screen flex flex-col lg:flex-row md:flex-row lg:justify-center items-center  gap-4 px-4 lg:px-14'>
       <div className=' w-full lg:w-[50%] md:w-[50%] flex flex-col gap-4 mt-16'>
        <h1 className=' text-2xl lg:text-4xl font-[600]'>Home services at  your <br />doorstep</h1>
        <div className='w-full lg:w-[90%]  h-fit border-[10px] flex flex-col p-2 gap-4 rounded-lg shadow-xl'>
         <h3 className='font-semibold'>What are you looking for?</h3>
         <div className='w-full flex justify-center items-center gap-4'>
          <DynamicSheet/>
         
          
         
         </div>
        </div>
       </div>
       <div className="w-full lg:w-[70%] md:w-[70%] hidden lg:block md:block">
<LayoutGridDemo/>
</div>

     </section>
    </main>
  )
}

export default Main