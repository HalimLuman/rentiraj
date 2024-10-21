'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci"

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative flex-1">
      <Input
        className='h-10 2xl:h-14 px-5 pr-12 rounded-lg 2xl:text-md font-medium tracking-wide drop-shadow-sm focus:border focus:border-blue-200'
        placeholder='Enter the product...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <CiSearch size={20} />
      </button>
    </form>
  )
}

export default SearchBar