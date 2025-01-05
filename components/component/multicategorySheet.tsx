"use client"

import { useState } from "react"
import {  Laptop, Shirt, Palette } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"


const categories = {
  home: [
    { name: "Cleaning", icon: "🧹" },
    { name: "Plumbing", icon: "🚰" },
    { name: "Electrical", icon: "⚡" },
    { name: "Painting", icon: "🎨" },
  ],
  commercial: [
    { name: "Office Cleaning", icon: "🧼" },
    { name: "HVAC Service", icon: "❄️" },
    { name: "IT Support", icon: "💻" },
    { name: "Security Systems", icon: "🔐" },
  ],
  personal: [
    { name: "Salon for Women", icon: "💇‍♀️" },
    { name: "Massage", icon: "💆‍♂️" },
    { name: "Yoga Instructor", icon: "🧘" },
    { name: "Personal Trainer", icon: "🏋️" },
  ],
  transport: [
    { name: "Car Wash", icon: "🚗" },
    { name: "Car Repair", icon: "🔧" },
    { name: "Bike Service", icon: "🏍️" },
    { name: "Towing Service", icon: "🚚" },
  ],
  food: [
    { name: "Catering", icon: "🍽️" },
    { name: "Personal Chef", icon: "👨‍🍳" },
    { name: "Meal Prep", icon: "🥡" },
    { name: "Cooking Classes", icon: "📚" },
  ],
  professional: [
    { name: "Legal Services", icon: "⚖️" },
    { name: "Accounting", icon: "🧮" },
    { name: "Consulting", icon: "💼" },
    { name: "Translation", icon: "🌐" },
  ],
  beauty: [
    { name: "Makeup Artist", icon: "💄" },
    { name: "Nail Technician", icon: "💅" },
    { name: "Hair Styling", icon: "💇" },
    { name: "Skincare", icon: "🧴" },
  ],
  tech: [
    { name: "Computer Repair", icon: "🖥️" },
    { name: "Phone Repair", icon: "📱" },
    { name: "Smart Home Setup", icon: "🏠" },
    { name: "Data Recovery", icon: "💾" },
  ],
  fashion: [
    { name: "Personal Stylist", icon: "👗" },
    { name: "Tailoring", icon: "🧵" },
    { name: "Shoe Repair", icon: "👞" },
    { name: "Wardrobe Organization", icon: "🗄️" },
  ],
  events: [
    { name: "Wedding Planning", icon: "💒" },
    { name: "Birthday Party", icon: "🎂" },
    { name: "Corporate Events", icon: "🎭" },
    { name: "Photography", icon: "📸" },
  ],
}

type CategoryType = keyof typeof categories

const categoryIcons = {
  home: <Image src='/assets/icons/home.svg' alt='icon' height={26} width={26}/>,
  commercial: <Image src='/assets/icons/home.svg' alt='icon' height={26} width={26}/>,
  personal: <Image src='/assets/icons/home.svg' alt='icon' height={26} width={26}/>,
  transport: <Image src='/assets/icons/home.svg' alt='icon' height={26} width={26}/>,
  food:  <Image src='/assets/icons/home.svg' alt='icon' height={26} width={26}/>,
  professional: <Image src='/assets/icons/home.svg' alt='icon' height={26} width={26}/>,
  beauty:  <Image src='/assets/icons/home.svg' alt='icon' height={26} width={26}/>,
  tech: <Laptop className="h-6 w-6 mb-2" />,
  fashion: <Shirt className="h-6 w-6 mb-2" />,
  events: <Palette className="h-6 w-6 mb-2" />,
}

export default function UrbanCategories() {
  const [openCategory, setOpenCategory] = useState<CategoryType | null>(null)

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {(Object.keys(categories) as CategoryType[]).map((category) => (
          <Sheet
            key={category}
            open={openCategory === category}
            onOpenChange={(open) => setOpenCategory(open ? category : null)}
          >
            <SheetTrigger asChild>
                
              <Button variant='secondary' className="flex flex-col items-center justify-center h-26 w-full shadow-xl">
              {categoryIcons[category]}
              
                    
                   
                <span className="text-sm text-center">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='bottom' className="h-[80vh]">
              <SheetHeader>
                <SheetTitle>{category.charAt(0).toUpperCase() + category.slice(1)} Services</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[calc(80vh-4rem)] mt-4">
                <div className="flex items-center gap-4 ">
                  {categories[category].map((item) => (
                    <Button
                      key={item.name}
                      variant='secondary'
                      className="h-20 w-[7rem] flex flex-col shadow-xl items-center justify-center text-center"
                      onClick={() => setOpenCategory(null)}
                    >
                      <span className="text-2xl mb-2">{item.icon}</span>
                      <span className="text-sm">{item.name}</span>
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </div>
  )
}

