"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { Product } from '../../types/resource';

// For demo purposes - in a real app, this would come from the cart state
const cartItems = [
  {
    product: {
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
    quantity: 1
  },
  {
    product: {
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
    },
    quantity: 1
  }
];

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'United Kingdom',
    billingAddress: {
      address: '',
      city: '',
      state: '',
      postalCode: ''
    },
    paymentMethod: 'credit-card',
    cardDetails: {
      name: '',
      number: '',
      expiry: '',
      cvc: ''
    },
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }));
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
      window.scrollTo(0, 0);
    } else {
      // Handle payment and order submission
      alert('Order placed successfully! This is a demo.');
      // In a real app, you would submit the order to an API endpoint
    }
  };

  return (
    <div className="bg-secondary py-16">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <Badge variant="primary" className="mb-3">Checkout</Badge>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              Complete Your Purchase
            </h1>
            <p className="text-lg text-text/70 max-w-xl mx-auto">
              You're just a few steps away from accessing your personal development resources
            </p>
          </div>
          
          {/* Checkout Steps */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-text/60'
              }`}>
                1
              </div>
              <div className={`w-16 h-1 ${
                step >= 2 ? 'bg-primary' : 'bg-gray-200'
              }`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-text/60'
              }`}>
                2
              </div>
              <div className={`w-16 h-1 ${
                step >= 3 ? 'bg-primary' : 'bg-gray-200'
              }`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-text/60'
              }`}>
                3
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Checkout Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                {step === 1 && (
                  <form onSubmit={handleSubmit}>
                    <h2 className="font-serif text-2xl font-bold mb-6">Account Information</h2>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block mb-1 font-medium">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block mb-1 font-medium">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block mb-1 font-medium">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <p className="text-sm text-text/60 mt-1">
                        We'll send your purchase confirmation and download links to this email.
                      </p>
                    </div>
                    
                    <h2 className="font-serif text-2xl font-bold mb-6">Billing Information</h2>
                    
                    <div className="mb-6">
                      <label htmlFor="country" className="block mb-1 font-medium">
                        Country/Region*
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Spain">Spain</option>
                        <option value="Italy">Italy</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Ireland">Ireland</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="billingAddress.address" className="block mb-1 font-medium">
                        Street Address*
                      </label>
                      <input
                        type="text"
                        id="billingAddress.address"
                        name="billingAddress.address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        value={formData.billingAddress.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <label htmlFor="billingAddress.city" className="block mb-1 font-medium">
                          City*
                        </label>
                        <input
                          type="text"
                          id="billingAddress.city"
                          name="billingAddress.city"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                          value={formData.billingAddress.city}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="billingAddress.state" className="block mb-1 font-medium">
                          State/Province*
                        </label>
                        <input
                          type="text"
                          id="billingAddress.state"
                          name="billingAddress.state"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                          value={formData.billingAddress.state}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="billingAddress.postalCode" className="block mb-1 font-medium">
                          Postal Code*
                        </label>
                        <input
                          type="text"
                          id="billingAddress.postalCode"
                          name="billingAddress.postalCode"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                          value={formData.billingAddress.postalCode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <Link 
                        href="/cart" 
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Cart
                      </Link>
                      <Button type="submit" variant="primary">
                        Continue to Payment
                      </Button>
                    </div>
                  </form>
                )}
                
                {step === 2 && (
                  <form onSubmit={handleSubmit}>
                    <h2 className="font-serif text-2xl font-bold mb-6">Payment Method</h2>
                    
                    <div className="space-y-4 mb-6">
                      <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="credit-card" 
                          className="h-5 w-5 text-primary"
                          checked={formData.paymentMethod === 'credit-card'}
                          onChange={handleInputChange}
                        />
                        <div className="ml-3">
                          <span className="font-medium">Credit / Debit Card</span>
                          <div className="flex space-x-2 mt-1">
                            <span className="w-10 h-6 bg-blue-100 rounded flex items-center justify-center text-xs font-medium text-blue-700">Visa</span>
                            <span className="w-10 h-6 bg-red-100 rounded flex items-center justify-center text-xs font-medium text-red-700">MC</span>
                            <span className="w-10 h-6 bg-green-100 rounded flex items-center justify-center text-xs font-medium text-green-700">Amex</span>
                          </div>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="paypal" 
                          className="h-5 w-5 text-primary"
                          checked={formData.paymentMethod === 'paypal'}
                          onChange={handleInputChange}
                        />
                        <div className="ml-3">
                          <span className="font-medium">PayPal</span>
                        </div>
                      </label>
                    </div>
                    
                    {formData.paymentMethod === 'credit-card' && (
                      <div className="bg-gray-50 p-6 rounded-md mb-6">
                        <h3 className="font-medium mb-4">Card Details</h3>
                        
                        <div className="mb-4">
                          <label htmlFor="cardDetails.name" className="block mb-1 font-medium">
                            Name on Card*
                          </label>
                          <input
                            type="text"
                            id="cardDetails.name"
                            name="cardDetails.name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                            value={formData.cardDetails.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="cardDetails.number" className="block mb-1 font-medium">
                            Card Number*
                          </label>
                          <input
                            type="text"
                            id="cardDetails.number"
                            name="cardDetails.number"
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                            value={formData.cardDetails.number}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="cardDetails.expiry" className="block mb-1 font-medium">
                              Expiry Date*
                            </label>
                            <input
                              type="text"
                              id="cardDetails.expiry"
                              name="cardDetails.expiry"
                              placeholder="MM/YY"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              required
                              value={formData.cardDetails.expiry}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <label htmlFor="cardDetails.cvc" className="block mb-1 font-medium">
                              CVC*
                            </label>
                            <input
                              type="text"
                              id="cardDetails.cvc"
                              name="cardDetails.cvc"
                              placeholder="123"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              required
                              value={formData.cardDetails.cvc}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="agreeToTerms" 
                          className="h-5 w-5 text-primary" 
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          required
                        />
                        <span className="ml-3 text-sm">
                          I agree to the <Link href="/terms" className="text-primary">Terms & Conditions</Link> and <Link href="/privacy" className="text-primary">Privacy Policy</Link>
                        </span>
                      </label>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <button 
                        type="button" 
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                        onClick={() => setStep(1)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Information
                      </button>
                      <Button type="submit" variant="primary">
                        Complete Purchase
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h2 className="font-serif text-xl font-bold mb-4">Order Summary</h2>
                
                {/* Items */}
                <div className="mb-4">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex py-3 border-b">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.imageUrl || "/images/placeholder.jpg"}
                          alt={item.product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium text-sm">
                          {item.product.title}
                        </h3>
                        <p className="text-xs text-text/60">{item.product.type}</p>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs">Qty: {item.quantity}</span>
                          <span className="font-medium">€{(item.product.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pricing */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-text/70">Subtotal</span>
                    <span className="font-medium">€{calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text/70">VAT (0%)</span>
                    <span className="font-medium">€0.00</span>
                  </div>
                </div>
                
                {/* Total */}
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>€{calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Guarantee */}
                <div className="bg-green-50 p-4 rounded-md text-green-800 text-sm">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-medium">Secure Purchase</span>
                  </div>
                  <p>Your payment information is processed securely. We do not store your card details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
