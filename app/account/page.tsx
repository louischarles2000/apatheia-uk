"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { withAuth } from '../../context/AuthContext';
import Badge from '../../components/ui/Badge';
import { Product } from '../../types/resource';

function AccountDashboard() {
  const { user, signOut, loading } = useAuth();
  const [activeTab, setActiveTab] = useState("purchases");
  
  // Mock purchased resources
  const purchasedResources = [
    {
      id: "1",
      title: "Understanding Cognitive Behavioral Therapy",
      purchaseDate: new Date("2023-05-20"),
      imageUrl: "/images/resources/cbt-guide.jpg",
    },
    {
      id: "6",
      title: "Anxiety Management Techniques",
      purchaseDate: new Date("2023-07-12"),
      imageUrl: "/images/resources/anxiety-techniques.jpg",
    }
  ];

  // Sample product data for purchase history
  const purchasedProducts: (Product & { purchaseDate: Date })[] = [
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
      purchaseDate: new Date("2023-10-15"),
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
      purchaseDate: new Date("2023-11-03"),
      featured: true
    }
  ];

  return (
    <div className="bg-secondary py-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <Badge variant="primary" className="mb-3">My Account</Badge>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              Welcome, {user?.firstName || 'User'}
            </h1>
            <p className="text-lg text-text/70">
              Manage your purchases and account settings
            </p>
          </div>
          
          {/* Account Tabs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex border-b">
              <button
                className={`flex-1 py-4 font-medium text-center ${
                  activeTab === "purchases" 
                    ? "bg-primary text-white" 
                    : "hover:bg-primary/10 hover:text-primary"
                }`}
                onClick={() => setActiveTab("purchases")}
              >
                My Purchases
              </button>
              <button
                className={`flex-1 py-4 font-medium text-center ${
                  activeTab === "account" 
                    ? "bg-primary text-white" 
                    : "hover:bg-primary/10 hover:text-primary"
                }`}
                onClick={() => setActiveTab("account")}
              >
                Account Details
              </button>
              <button
                className={`flex-1 py-4 font-medium text-center ${
                  activeTab === "settings" 
                    ? "bg-primary text-white" 
                    : "hover:bg-primary/10 hover:text-primary"
                }`}
                onClick={() => setActiveTab("settings")}
              >
                Settings
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {/* My Purchases Tab */}
              {activeTab === "purchases" && (
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-6">My Purchases</h2>
                  
                  {purchasedProducts.length === 0 ? (
                    <div className="text-center py-8">
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
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" 
                        />
                      </svg>
                      <h3 className="font-serif text-xl font-bold mb-2">No purchases yet</h3>
                      <p className="text-text/70 mb-4">
                        You haven't purchased any products yet.
                      </p>
                      <Button href="/products" variant="primary">
                        Browse Products
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {purchasedProducts.map(product => (
                        <div key={product.id} className="border rounded-lg overflow-hidden">
                          <div className="flex flex-wrap md:flex-nowrap">
                            <div className="w-full md:w-1/4 relative h-40 md:h-auto">
                              <Image
                                src={product.imageUrl || "/images/placeholder.jpg"}
                                alt={product.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="w-full md:w-3/4 p-4 md:p-6">
                              <div className="flex flex-wrap justify-between items-start mb-2">
                                <h3 className="font-serif text-xl font-bold">
                                  <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
                                    {product.title}
                                  </Link>
                                </h3>
                                <Badge variant="primary">{product.type}</Badge>
                              </div>
                              
                              <p className="text-sm text-text/70 mb-4">{product.description}</p>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                <div>
                                  <span className="block text-xs text-text/60">Purchase Date</span>
                                  <span className="font-medium">
                                    {product.purchaseDate.toLocaleDateString()}
                                  </span>
                                </div>
                                <div>
                                  <span className="block text-xs text-text/60">Price</span>
                                  <span className="font-medium">€{product.price.toFixed(2)}</span>
                                </div>
                                <div>
                                  <span className="block text-xs text-text/60">Format</span>
                                  <span className="font-medium">{product.format.join(", ")}</span>
                                </div>
                                <div>
                                  <span className="block text-xs text-text/60">File Size</span>
                                  <span className="font-medium">{product.fileSize}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-2">
                                <Button 
                                  href="#" 
                                  variant="primary" 
                                  className="text-sm px-4 py-2"
                                >
                                  Download Files
                                </Button>
                                <Button 
                                  href={`/products/${product.slug}`} 
                                  variant="outline" 
                                  className="text-sm px-4 py-2"
                                >
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {/* Account Details Tab */}
              {activeTab === "account" && (
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-6">Account Details</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Name</h3>
                      <p>{user?.firstName || ''} {user?.lastName || ''}</p>
                    </div>
                    
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Email</h3>
                      <p>{user?.email || ''}</p>
                    </div>
                    
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Account Created</h3>
                      <p>{user?.dateJoined ? new Date(user.dateJoined).toLocaleDateString() : 'N/A'}</p>
                    </div>
                    
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Purchases</h3>
                      <p>{purchasedProducts.length} products</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button href="/account/settings" variant="primary">
                      Edit Account Details
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-4">Email Preferences</h3>
                      
                      <div className="space-y-3">
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="h-5 w-5 text-primary" defaultChecked />
                          <span className="ml-3">Receive order confirmations and updates</span>
                        </label>
                        
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="h-5 w-5 text-primary" defaultChecked />
                          <span className="ml-3">Receive newsletter and product updates</span>
                        </label>
                        
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="h-5 w-5 text-primary" />
                          <span className="ml-3">Receive promotional offers and discounts</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-4">Password</h3>
                      <Button href="#" variant="outline">
                        Change Password
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-4">Account Actions</h3>
                      <div className="space-y-3">
                        <Button href="#" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                          Delete Account
                        </Button>
                      </div>
                      <p className="mt-2 text-sm text-text/60">
                        Warning: Deleting your account will remove access to all your purchased products.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <Button href="#" variant="primary">
                      Save Settings
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrap the component with the withAuth HOC to protect this route
export default withAuth(AccountDashboard);
