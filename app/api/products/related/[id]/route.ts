// app/api/products/route.js
import { NextResponse } from 'next/server';
import axios from 'axios'; // Assuming you're using axios for API calls

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { searchParams } = new URL(request.url);

  if (!id) {
    return NextResponse.json({ error: 'Article ID is required' }, { status: 200 });
  }

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL!}/product/related/${id}/${searchParams.toString() != '' ? `?${searchParams.toString()}` : ''}`);

    if (!response.data) {
      console.error(`API Error: ${response.status}`);
      return NextResponse.json({ error: 'Failed to fetch article' }, { status: response.status });
    }

    const products = await response.data;
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}