'use client'

import { useState, useEffect } from 'react'
import { ProductGrid } from '@/components/shop/global/ProductGrid'
import { Product } from './[category]/[subcategory]/[id]/page'

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/products')
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
  }, [])

  if (loading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <ProductGrid products={products} />
    </div>
  )
}