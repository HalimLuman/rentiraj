import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { SlidersHorizontal } from 'lucide-react'

interface SortFilterBarProps {
  onSortChange: (option: string) => void
  onFilterClick: () => void
}

export function SortFilterBar({ onSortChange, onFilterClick }: SortFilterBarProps) {
  return (
    <div className="flex justify-end gap-5 items-center bg-white p-4">
      <div className="flex items-center space-x-4">
        <Select onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button variant="outline" onClick={onFilterClick} className="flex items-center space-x-2">
        <SlidersHorizontal className="h-4 w-4" />
        <span>Filter</span>
      </Button>
    </div>
  )
}