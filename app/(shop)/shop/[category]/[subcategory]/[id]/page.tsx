'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { RelatedProducts } from '@/components/shop/single/RelatedProducts'
import { ProductDescription } from '@/components/shop/single/ProductDescription'
import { ProductDetails } from '@/components/shop/single/ProductDetails'
import { ProductImage } from '@/components/shop/single/ProductImage'

export interface Product {
  _id: string
  name: string
  category: string
  subcategory: string
  price: number
  image: string
  mainImage: string
  description: string
  features: string[]
  specifications: { [key: string]: string }
}

export default function SingleProductPage({ params }: { params: {category: string; subcategory: string; id: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`)
        const data = await response.json()

        if (data.success) {
          setProduct(data.product)
          setSelectedImage(data.product.image)
        } else {
          setError('Failed to fetch product')
        }
      } catch (error) {
        setError('An error occurred while fetching the product')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  if (loading) {
    return <p>Loading product...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center text-gray-600"
            onClick={() => router.back()}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <ProductImage image={selectedImage || product.mainImage} name={product.name} />
            <ProductDetails product={product} />
          </div>
          <ProductDescription product={product} />
        </div>
        <RelatedProducts params={{ category: params.category, subcategory: params.subcategory }} />

      </main>
    </div>
  )
}
