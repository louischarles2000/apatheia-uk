// app/api/products/route.js
import { NextResponse } from 'next/server';
import axios from 'axios'; // Assuming you're using axios for API calls

export async function GET() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL!}/store/currency`);

    if (!response.data) {
      console.error(`API Error: ${response.status}`);
      return NextResponse.json({ error: 'Failed to store currency' }, { status: response.status });
    }

    const products = await response.data;
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error store currency:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}