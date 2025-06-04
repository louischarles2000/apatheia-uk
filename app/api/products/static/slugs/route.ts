// app/api/products/route.js
import { NextResponse } from 'next/server';
import axios from 'axios'; // Assuming you're using axios for API calls

export async function GET() {

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL!}/product/static/slugs`);

    if (!response.data) {
      console.error(`API Error: ${response.status}`);
      return NextResponse.json({ error: 'Failed to fetch slugs' }, { status: response.status });
    }

    const products: { slug: string }[] = await response.data.Data;
    return NextResponse.json({ slugs: products.map(product => product.slug), status: response.status }, { status: 200 });
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}