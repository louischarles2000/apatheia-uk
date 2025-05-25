// app/api/products/route.js
import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios'; // Assuming you're using axios for API calls

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  // const limit = searchParams.get('limit');
  // const page = searchParams.get('page');
  // const sort = searchParams.get('sort');
  // const order = searchParams.get('order');
  // const search = searchParams.get('search');
  // const category = searchParams.get('category');
  // const tags = searchParams.get('tags');
  // const model = searchParams.get('model');

  try {
    console.log('Fetching fcategories with params:', searchParams.toString());
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL!}/category${searchParams.toString() != '' ? `?${searchParams.toString()}` : ''}`);

    if (!response.data) {
      console.error(`API Error: ${response.status}`);
      return NextResponse.json({ error: 'Failed to fetch categories' }, { status: response.status });
    }

    const categories = await response.data;
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}