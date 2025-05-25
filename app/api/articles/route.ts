import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios'; // Assuming you're using axios for API calls

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  try {
    console.log('Fetching articles with params:', searchParams.toString());
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL!}/article${searchParams.toString() != '' ? `?${searchParams.toString()}` : ''}`);

    if (!response.data) {
      console.error(`API Error: ${response.status}`);
      return NextResponse.json({ error: 'Failed to fetch articles' }, { status: response.status });
    }

    const articles = await response.data;
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}