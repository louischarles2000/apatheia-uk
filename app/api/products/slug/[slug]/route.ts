// app/api/products/route.js
import { NextResponse } from 'next/server';
import axios from 'axios'; // Assuming you're using axios for API calls

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!slug) {
    return NextResponse.json({ error: 'Product ID is required' }, { status: 200 });
  }

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL!}/product/slug/${slug}`);

    if (!response.data) {
      console.error(`API Error: ${response.status}`);
      return NextResponse.json({ error: 'Failed to fetch products' }, { status: response.status });
    }

    const products = await response.data;
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}