'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Product } from '@/app/(shop)/shop/[category]/[subcategory]/[id]/page'

export function RelatedProducts({ params }: { params: { category: string; subcategory: string } }) {
  const [products, setProducts] = useState<Product[]>([]) // Initialize as an array of products
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/products?category=${encodeURIComponent(params.category)}&subcategory=${encodeURIComponent(params.subcategory)}`)
        const data = await response.json()

        if (data.success) {
          setProducts(data.products) // Set the fetched products
        } else {
          setError('Failed to fetch products')
        }
      } catch (error) {
        setError('An error occurred while fetching products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [params.category, params.subcategory])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1 truncate">{product.name}</h3>
              <p className="text-gray-600 mb-2">${product.price}/day</p>
              <Button size="sm" className="w-full" onClick={() => router.push(`/shop/${params.category}/${params.subcategory}/${product._id}`)}>
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
