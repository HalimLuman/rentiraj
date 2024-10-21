import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Product } from '@/app/(shop)/shop/[category]/[subcategory]/[id]/page'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()

  const handleNavigation = () => {
    // Navigate to /shop/[category]/[subcategory]/[id]
    router.push(`/shop/${product.category.toLowerCase()}/${product.subcategory.toLowerCase()}/${product._id}`)
  }

  return (
    <div
      onClick={handleNavigation}
      className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <div className="relative aspect-square">
        <Image
          src={product.mainImage}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium mb-1 truncate">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price}/day</span>
          <Button size="sm" className="text-xs">Rent Now</Button>
        </div>
      </div>
    </div>
  )
}
