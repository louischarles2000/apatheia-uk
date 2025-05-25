
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request.
    const body = await request.json();
    const { name, email, message, subject } = body;

    // Basic validation: Check if required fields are present.
    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { message: 'Name, email, and message are required.' },
        { status: 400 } // Bad Request
      );
    }

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL!}/contact`, body);
    if (!response.data) {
      console.error(`API Error: ${response.status}`);
      return NextResponse.json({ error: 'Failed to send contact message' }, { status: response.status });
    }
    // Return a success response.
    return NextResponse.json(
      { message: 'Contact message received successfully!' },
      { status: 200 } // OK
    );

  } catch (error) {
    console.error('Error processing contact form submission:', error);

    // Return an error response.
    return NextResponse.json(
      { message: 'Failed to process contact message.', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 } // Internal Server Error
    );
  }
}
