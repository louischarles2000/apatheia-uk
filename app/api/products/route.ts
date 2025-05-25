// app/api/products/route.js
import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios'; // Assuming you're using axios for API calls

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL!}/product/${searchParams.toString() != '' ? `?${searchParams.toString()}` : ''}`);

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