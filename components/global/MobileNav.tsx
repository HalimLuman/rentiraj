'use client'

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, ChevronDown, ChevronUp } from "lucide-react"

const categories = [
  {
    name: "Electronics",
    subcategories: ["Phones", "Laptops", "Tablets"],
  },
  {
    name: "Home Appliances",
    subcategories: ["Vacuum Cleaners", "Microwaves", "Washing Machines"],
  },
  {
    name: "Gaming",
    subcategories: ["Consoles", "Games", "Accessories"],
  },
  {
    name: "Sports Equipment",
    subcategories: ["Bikes", "Weights", "Yoga Mats"],
  },
]

export default function MobileNav() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const handleCategoryToggle = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-sm flex flex-col">
        <SheetHeader>
          <SheetTitle>
            <Image src="/logo.png" alt="Logo" width={170} height={100} className="w-auto h-10" />
          </SheetTitle>
          <form className="py-4">
            <Input type="search" placeholder="Search products..." className="w-full" />
          </form>
        </SheetHeader>
        <nav className="flex-grow overflow-y-auto">
          {categories.map((category) => (
            <div key={category.name} className="border-b">
              <button
                onClick={() => handleCategoryToggle(category.name)}
                className="w-full flex justify-between items-center py-3 px-4 text-left"
              >
                <span className="text-lg font-semibold">{category.name}</span>
                {openCategory === category.name ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {openCategory === category.name && (
                <ul className="pl-8 pb-3">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory} className="py-1">
                      <Link href={`/category/${subcategory.toLowerCase().replace(' ', '-')}`} className="text-sm hover:underline">
                        {subcategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
        <div className="p-4 space-y-4 mt-auto">
          <Button variant="outline" className="w-full">
            Sign In
          </Button>
          <Button className="w-full">
            Sign Up
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}