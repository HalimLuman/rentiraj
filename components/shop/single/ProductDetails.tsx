'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Product } from '@/app/(shop)/shop/[category]/[subcategory]/[id]/page'

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <div className="md:w-1/2 p-6">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.category}</p>
      <div className="text-2xl font-bold mb-6">${product.price}/day</div>
      
      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="rental-period">Rental Period</Label>
          <div className="flex space-x-2 mt-1">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[160px] justify-start text-left font-normal overflow-hidden">
                  <CalendarIcon className="h-4 w-4" />
                  {startDate ? format(startDate, 'PPP') : <span>Start date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[160px] justify-start text-left font-normal overflow-hidden">
                  <CalendarIcon className="h-4 w-4" />
                  {endDate ? format(endDate, 'PPP') : <span>End date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input type="number" id="quantity" defaultValue="1" min="1" className="w-20 mt-1" />
        </div>
      </div>
      
      <Button size="lg" className="w-full mb-4">Rent Now</Button>
      
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Key Features:</h2>
        <ul className="list-disc list-inside space-y-1">
          {product.features && product.features.map((feature, index) => (
            <li key={index}>{feature.name}: {feature.value}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}