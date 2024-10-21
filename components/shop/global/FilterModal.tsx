import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'

interface FilterDrawerProps {
  isOpen: boolean
  onClose: () => void
  priceRange: [number, number]
  onPriceRangeChange: (range: [number, number]) => void
}

export function FilterDrawer({ isOpen, onClose, priceRange, onPriceRangeChange }: FilterDrawerProps) {
  const handlePriceRangeChange = (value: number[]) => {
    onPriceRangeChange([value[0], value[1]])
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Products</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="price-range">Price Range (per day)</Label>
            <Slider
              id="price-range"
              min={0}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={handlePriceRangeChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          {/* Add more filter options here */}
        </div>
        <div className="mt-6">
          <Button onClick={onClose} className="w-full">Apply Filters</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}