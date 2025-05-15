"use client";

import React from 'react';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import OrderSummary from '../../components/checkout/OrderSummary';
import { useRouter } from 'next/navigation';

// Define a type for the form data
interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  cardNumber?: string;
  expiryDate?: string;
  cvc?: string;
}

export default function CheckoutPage() {
  const router = useRouter();

  // Mock order items
  const orderItems = [
    {
      id: "1",
      name: "CBT Resource Pack",
      price: 49.99,
      quantity: 1,
      imageUrl: "/images/resources/cbt-guide.jpg"
    },
    {
      id: "2",
      name: "Anxiety Assessment Tools",
      price: 29.99,
      quantity: 1,
      imageUrl: "/images/resources/anxiety-techniques.jpg"
    }
  ];

  const handleSubmit = (formData: FormData) => {
    console.log("Checkout submitted with data:", formData);
    // In a real app, you would process payment here
    
    // Simulate a successful checkout
    setTimeout(() => {
      alert("Purchase complete! Thank you for your order.");
      router.push('/'); // Redirect to home page
    }, 1000);
  };

  return (
    <div className="bg-secondary py-12">
      <div className="container-custom">
        <h1 className="font-serif text-3xl font-bold mb-8 text-center md:text-left">Checkout</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Checkout form */}
          <div className="order-2 md:order-1">
            <CheckoutForm onSubmit={handleSubmit} />
          </div>
          
          {/* Order summary */}
          <div className="order-1 md:order-2">
            <OrderSummary items={orderItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
