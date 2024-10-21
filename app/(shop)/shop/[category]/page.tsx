'use client'

import { useState, useEffect } from 'react'
import { ProductGrid } from '@/components/shop/global/ProductGrid'
import { Product } from './[subcategory]/[id]/page'

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/products?category=${encodeURIComponent(params.category)}`)
        const data = await response.json()

        if (data.success) {
          setProducts(data.products)
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
  }, [params.category])

  if (loading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{params.category} Products</h2>
      <ProductGrid products={products} />
    </div>
  )
}