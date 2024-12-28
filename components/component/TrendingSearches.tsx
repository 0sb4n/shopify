import React from 'react'
import { Flame,TrendingUp } from 'lucide-react'
import { Button } from '../ui/button'
interface TrendingSearchesProps {
  searches: string[]
  onSearchClick: (search: string) => void
}

export function TrendingSearches({ searches, onSearchClick }: TrendingSearchesProps) {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-500 mb-2 flex items-center">
          <Flame className="w-4 h-4 mr-2 text-orange-500" />
          Trending Searches
        </h3>
        <ul className="space-y-2 flex gap-4 justify-center items-start flex-wrap">
          {searches.map((search, index) => (
            <li key={index} >
              <Button

              variant='secondary'
                className="w-full text-left px-2 py-1 rounded hover:bg-gray-100 transition-colors duration-200 text-gray-700"
                onClick={() => onSearchClick(search)}

              >
                <TrendingUp/>
                {search}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

