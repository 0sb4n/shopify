'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { TrendingSearches } from './TrendingSearches'

const placeholders = [
  'Search for salon services',
  'Find a plumber near you',
  'Book a house cleaning',
  'Hire a yoga instructor',
  'Get an electrician',
]

const trendingSearches = [
  'Hair cut',
  'AC repair',
  'Home cleaning',
  'Plumbing',
  'Massage therapy',
]

export default function UrbanClapSearchInput() {
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
    <div className="relative max-w-xl w-full mx-auto">
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          className="pr-10"
          placeholder={isFocused ? 'Search a service' : currentPlaceholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      {showTrending && (
        <TrendingSearches searches={trendingSearches} onSearchClick={handleTrendingClick} />
      )}
    </div>
  )
}
