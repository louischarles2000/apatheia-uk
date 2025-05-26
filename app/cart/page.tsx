"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { Product } from '../../types/resource';

// Sample product data for demonstration
const sampleProducts: Product[] = [
  {
    id: "1",
    title: "The Art Of Consistency",
    slug: "the-art-of-consistency",
    type: "Audio Book",
    format: ["Audio Book", "Checklist"],
    description: "Build lasting habits through the power of consistent action.",
    price: 59.99,
    downloadCount: 2453,
    rating: 4.8,
    imageUrl: "/images/products/consistency.jpg",
    fileSize: "75MB",
    pages: 39,
    includes: [
      "Comprehensive ebook (39 pages)",
      "10 audio files",
      "Printable consistency checklist",
      "Quick-reference cheatsheet"
    ],
    dateAdded: new Date("2023-05-15"),
    featured: true
  },
  {
    id: "2",
    title: "Focus Mastery",
    slug: "focus-mastery",
    type: "Video Course",
    format: ["Video Course", "Audio Files", "Ebook", "Checklist"],
    description: "Master your attention in a distracted world.",
    price: 79.99,
    downloadCount: 1829,
    rating: 4.9,
    imageUrl: "/images/products/focus.jpg",
    fileSize: "126MB",
    pages: 36,
    videoDuration: "36 minutes",
    includes: [
      "Comprehensive ebook (36 pages)",
      "10 instructional videos with voiceover",
      "10 audio files",
      "Printable focus checklist"
    ],
    dateAdded: new Date("2023-06-02"),
    featured: true
  }
];

type CartItem = {
  product: Product;
  quantity: number;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  // In a real app, this would fetch from a cart API or localStorage
  useEffect(() => {
    // Simulate loading cart items
    setTimeout(() => {
      // For demo purposes, load sample products
      const initialCart: CartItem[] = [
        { product: sampleProducts[0], quantity: 1 },
        { product: sampleProducts[1], quantity: 1 }
      ];
      setCartItems(initialCart);
      setIsLoading(false);
    }, 500);
  }, []);

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "WELCOME10") {
      setCouponApplied(true);
      setDiscountAmount(calculateSubtotal() * 0.1); // 10% discount
    } else {
      alert("Invalid coupon code");
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity, 
      0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal() - discountAmount;
  };

  if (isLoading) {
    return (
      <div className="bg-secondary py-16 min-h-screen">
        <div className="container-custom">
          <div className="text-center py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-white/50 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-white/50 rounded w-1/4 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-secondary py-16 min-h-screen">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto text-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16 mx-auto text-primary/50 mb-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            <h1 className="font-serif text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-text/70 mb-8">
              It looks like you haven&rsquo;t added any products to your cart yet.
            </p>
            <Button href="/products" variant="primary">
              Browse Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary py-16 min-h-screen">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <Badge variant="primary" className="mb-3">Shopping Cart</Badge>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              Your Cart
            </h1>
            <p className="text-lg text-text/70">
              Review your items before proceeding to checkout
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Cart Header */}
                <div className="p-4 bg-secondary/30 border-b flex items-center">
                  <div className="flex-1 font-medium">Product</div>
                  <div className="w-24 text-center font-medium">Quantity</div>
                  <div className="w-24 text-right font-medium">Price</div>
                </div>
                
                {/* Cart Items */}
                <div>
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="p-4 border-b flex flex-wrap md:flex-nowrap items-center">
                      {/* Product Image and Info */}
                      <div className="flex items-center flex-1 mb-4 md:mb-0">
                        <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                          <Image
                            src={item.product.imageUrl || "/images/placeholder.jpg"}
                            alt={item.product.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            <Link href={`/products/${item.product.slug}`} className="hover:text-primary transition-colors">
                              {item.product.title}
                            </Link>
                          </h3>
                          <p className="text-sm text-text/60">{item.product.type}</p>
                        </div>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="w-full md:w-24 flex justify-between md:justify-center items-center mb-4 md:mb-0">
                        <button 
                          className="text-text/60 hover:text-primary"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button 
                          className="text-text/60 hover:text-primary"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Price and Remove */}
                      <div className="w-full md:w-24 flex justify-between items-center">
                        <span className="font-medium md:hidden">Price:</span>
                        <span className="font-medium text-right flex-1">
                          €{(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button 
                          className="ml-4 text-red-500 hover:text-red-700"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Continue Shopping */}
                <div className="p-4">
                  <Link 
                    href="/products" 
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="font-serif text-xl font-bold mb-4">Order Summary</h2>
                
                {/* Subtotal */}
                <div className="flex justify-between py-2 border-b">
                  <span className="text-text/70">Subtotal</span>
                  <span className="font-medium">€{calculateSubtotal().toFixed(2)}</span>
                </div>
                
                {/* Discount */}
                {couponApplied && (
                  <div className="flex justify-between py-2 border-b text-green-600">
                    <span>Discount</span>
                    <span>-€{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                
                {/* Total */}
                <div className="flex justify-between py-3 font-bold text-lg">
                  <span>Total</span>
                  <span>€{calculateTotal().toFixed(2)}</span>
                </div>
                
                {/* Coupon Code */}
                <div className="mt-4 mb-6">
                  <label htmlFor="coupon" className="block text-sm font-medium mb-2">
                    Have a coupon?
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="coupon"
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={couponApplied}
                    />
                    <button
                      className={`px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90 transition-colors ${couponApplied ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={applyCoupon}
                      disabled={couponApplied}
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <p className="text-green-600 text-sm mt-1">Coupon applied successfully!</p>
                  )}
                </div>
                
                {/* Checkout Button */}
                <Button href="/checkout" variant="primary" className="w-full">
                  Proceed to Checkout
                </Button>
                
                {/* Secure checkout note */}
                <p className="text-center text-sm text-text/60 mt-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 