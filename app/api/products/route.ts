import { NextRequest, NextResponse } from 'next/server'
import Product from '@/models/Product'
import mongooseConnection from '@/lib/mongooseConnection'

export async function GET(req: NextRequest) {
  try {
    await mongooseConnection()

    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const subcategory = searchParams.get('subcategory')

    let query: any = {}
    if (category) {
      query.category = category
      if (subcategory) {
        query.subcategory = subcategory
      }
    }

    const products = await Product.find(query)

    return NextResponse.json({ success: true, products })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 })
  }
}