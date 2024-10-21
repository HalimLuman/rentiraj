'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { CategorySidebar } from '@/components/shop/global/CategorySidebar'
import { SortFilterBar } from '@/components/shop/global/SortingBar'
import { FilterDrawer } from '@/components/shop/global/FilterModal'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
  const [sortOption, setSortOption] = useState<string>('featured')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])

  const pathname = usePathname()
  const isProductPage = /^\/shop\/[^/]+\/[^/]+\/[^/]+$/.test(pathname)

  const handleSortChange = (option: string) => {
    setSortOption(option)
    // You might want to trigger a re-fetch or re-sort of products here
  }

  const handlePriceRangeChange = (range: [number, number]) => {
    setPriceRange(range)
    // You might want to trigger a re-fetch or re-filter of products here
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleFilterDrawer = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen)
  }

  if (isProductPage) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8 flex">
        <CategorySidebar 
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className="lg:w-3/4 space-y-6 w-full">
          <SortFilterBar 
            onSortChange={handleSortChange}
            onFilterClick={toggleFilterDrawer}
          />
          <main>{children}</main>
        </div>
      </div>
      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={toggleFilterDrawer}
        priceRange={priceRange}
        onPriceRangeChange={handlePriceRangeChange}
      />
    </div>
  )
}