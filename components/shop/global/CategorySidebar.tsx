'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { categories } from '@/constants'

interface Category {
  name: string
  subcategories?: string[]
}

interface CategorySidebarProps {
  isOpen: boolean
  onClose: () => void
}


export function CategorySidebar({ isOpen, onClose }: CategorySidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const router = useRouter()

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  // Handle navigation
  const handleCategoryClick = (category: string, subcategory?: string) => {
    if (subcategory) {
      // Navigate to /shop/[category]/[subcategory]
      router.push(`/shop/${category.toLowerCase()}/${subcategory.toLowerCase()}`)
    } else {
      // Navigate to /shop/[category]
      router.push(`/shop/${category.toLowerCase()}`)
    }
    onClose() // Close the sidebar after selecting a category
  }

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}></div>
      <aside className={`bg-white w-64 fixed inset-y-0 left-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out lg:static lg:w-1/4`}>
        <div className="flex justify-between items-center p-4 border-b lg:hidden">
          <h2 className="text-xl font-semibold">Categories</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <ScrollArea className="h-full">
          <nav className="p-4">
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.label}>
                  <button
                    onClick={() => toggleCategory(category.label)}
                    className="flex items-center justify-between w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-medium">{category.label}</span>
                    {category.subCategories && (
                      expandedCategories.includes(category.label) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )
                    )}
                  </button>
                  {category.subCategories && expandedCategories.includes(category.label) && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {category.subCategories.map((subcategory) => (
                        <li key={subcategory.value}>
                          <button
                            onClick={() => handleCategoryClick(category.label, subcategory.label)}
                            className="block w-full text-left py-1 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                          >
                            {subcategory.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="h-[1px] bg-gray-100 mt-2" />
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
      </aside>
    </>
  )
}
