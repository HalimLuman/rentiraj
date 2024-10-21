import { NextRequest, NextResponse } from 'next/server';
import Product from '@/models/Product';
import mongooseConnection from '@/lib/mongooseConnection';

export async function GET(req: NextRequest) {
  try {
    await mongooseConnection(); // Establish MongoDB connection

    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');

    // Initialize an empty query object
    let searchQuery: any = {};

    // If there's a search query, search across multiple fields (name, description, etc.)
    if (query) {
      searchQuery.$or = [
        { name: { $regex: query, $options: 'i' } },  // Case-insensitive search in 'name'
      ];
    }
    // Fetch matching products from the database
    const products = await Product.find(searchQuery).limit(20); // Limit to 20 results

    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
  }
}
