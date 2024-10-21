import { NextRequest, NextResponse } from 'next/server'
import Product from '@/models/Product'
import mongooseConnection from '@/lib/mongooseConnection'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    console.log(params)
  try {
    await mongooseConnection()

    const product = await Product.findById({ _id: params.id })

    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, product })
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json({ success: false, error: 'Failed to fetch product' }, { status: 500 })
  }
}
