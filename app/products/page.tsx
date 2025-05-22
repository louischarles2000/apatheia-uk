"use client";

import React, { useState } from 'react';
import Badge from '../../components/ui/Badge';
import ProductCard from '../../components/products/ProductCard';
import { Product } from '../../types/resource';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on active tab and search query
  const filteredProducts = products.filter(product => {
    // Filter by tab
    if (activeTab !== "all" && product.type !== activeTab) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="bg-secondary py-12">
      <div className="container-custom">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <Badge variant="primary" className="mb-3">Product Catalog</Badge>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
            Professional Personal Development Resources
          </h1>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Practical tools for meaningful personal growth to help you build habits, improve focus, and achieve your goals
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === "all" ? "bg-primary text-white" : "bg-white text-text hover:bg-primary/10"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Products
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === "Audio Book" ? "bg-primary text-white" : "bg-white text-text hover:bg-primary/10"
            }`}
            onClick={() => setActiveTab("Audio Book")}
          >
            Audio Books
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === "Video Course" ? "bg-primary text-white" : "bg-white text-text hover:bg-primary/10"
            }`}
            onClick={() => setActiveTab("Video Course")}
          >
            Video Courses
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === "Ebook" ? "bg-primary text-white" : "bg-white text-text hover:bg-primary/10"
            }`}
            onClick={() => setActiveTab("Ebook")}
          >
            Ebooks
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg text-text/70">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Product Data
const products: Product[] = [
  {
    id: "1",
    title: "The Art Of Consistency",
    slug: "the-art-of-consistency",
    type: "Audio Book",
    format: ["Audio Book", "Checklist"],
    description: "Build lasting habits through the power of consistent action. Master the daily disciplines that lead to achievement.",
    price: 59.99,
    downloadCount: 2453,
    rating: 4.8,
    imageUrl: "/images/products/mental.jpg",
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
    description: "Master your attention in a distracted world. Learn proven techniques to eliminate distractions and achieve deep focus.",
    fullDescription: "In today's constantly connected world, the ability to focus deeply is becoming a rare and valuable skill. This comprehensive course teaches you practical strategies to overcome digital distractions, strengthen your attention span, and enter flow states consistently. Through a series of video lessons and exercises, you'll rebuild your capacity for deep work and increase your productive output.",
    price: 79.99,
    downloadCount: 1829,
    rating: 4.9,
    imageUrl: "/images/products/mind.jpg",
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
  {
    id: "3",
    title: "Level Up Your Leadership",
    slug: "level-up-your-leadership",
    type: "Video Course",
    format: ["Video Course", "Audio Files", "Ebook", "Checklist"],
    description: "Develop essential skills to lead effectively. Transform your leadership approach with practical, actionable strategies.",
    price: 89.99,
    downloadCount: 1556,
    rating: 4.7,
    imageUrl: "/images/products/therapy.jpg",
    fileSize: "78MB",
    pages: 45,
    videoDuration: "36 minutes",
    includes: [
      "Comprehensive ebook (45 pages)",
      "10 instructional videos with voiceover",
      "10 audio files",
      "Leadership assessment checklist"
    ],
    dateAdded: new Date("2023-07-20"),
    featured: true
  },
  {
    id: "4",
    title: "Make Things Happen",
    slug: "make-things-happen",
    type: "Audio Book",
    format: ["Audio", "Book"],
    description: "Turn ideas into reality through effective execution. Stop procrastinating and start achieving your goals.",
    price: 64.99,
    downloadCount: 2890,
    rating: 4.6,
    imageUrl: "/images/products/wellness.jpg",
    fileSize: "47MB",
    pages: 43,
    includes: [
      "Comprehensive ebook (43 pages)",
      "Audio version for on-the-go learning"
    ],
    dateAdded: new Date("2023-06-15")
  },
  {
    id: "5",
    title: "The Influential Leader",
    slug: "the-influential-leader",
    type: "Video Course",
    format: ["Video", "Book", "Checklist"],
    description: "Master the art of positive influence. Learn to communicate effectively and inspire others to follow your vision.",
    price: 79.99,
    downloadCount: 1256,
    rating: 4.8,
    imageUrl: "/images/products/therapy.jpg",
    fileSize: "55MB",
    pages: 41,
    videoDuration: "24 minutes",
    includes: [
      "Comprehensive ebook (41 pages)",
      "10 instructional videos with voiceover",
      "Leadership influence checklist"
    ],
    dateAdded: new Date("2023-03-05")
  },
  {
    id: "6",
    title: "Crush Excuses",
    slug: "crush-excuses",
    type: "Audio Book",
    format: ["Audio", "Book", "Checklist"],
    description: "Eliminate the excuses holding you back. Build discipline and achieve what matters most to you.",
    price: 59.99,
    downloadCount: 2211,
    rating: 4.5,
    imageUrl: "/images/products/mental.jpg",
    fileSize: "25MB",
    pages: 47,
    includes: [
      "Comprehensive ebook (47 pages)",
      "Audio version for on-the-go learning",
      "Excuse elimination checklist"
    ],
    dateAdded: new Date("2023-04-10")
  },
  {
    id: "7",
    title: "Transform Your Life",
    slug: "transform-your-life",
    type: "Audio Book",
    format: ["Audio", "Book"],
    description: "Build habits that lead to lasting change. Create systems that transform your life from the inside out.",
    price: 69.99,
    downloadCount: 3102,
    rating: 4.9,
    imageUrl: "/images/products/wellness.jpg",
    fileSize: "28MB",
    pages: 75,
    includes: [
      "Comprehensive ebook (75 pages)",
      "Audio version for on-the-go learning"
    ],
    dateAdded: new Date("2023-06-15"),
    featured: true
  },
  {
    id: "8",
    title: "Beating Procrastination",
    slug: "beating-procrastination",
    type: "Audio Course",
    format: ["Audio Course"],
    description: "Overcome the habit of putting things off. Practical strategies to start taking action consistently.",
    price: 54.99,
    downloadCount: 2544,
    rating: 4.7,
    imageUrl: "/images/products/procrastination.jpg",
    fileSize: "77MB",
    videoDuration: "49 minutes",
    includes: [
      "Complete audio course (49 minutes)"
    ],
    dateAdded: new Date("2023-05-05")
  },
  {
    id: "9",
    title: "Social Marketing School",
    slug: "social-marketing-school",
    type: "Video Course",
    format: ["Video Course", "Audio Files", "Ebook", "Checklist"],
    description: "Build your personal brand on social media. Learn to grow your audience and showcase your expertise effectively.",
    price: 99.99,
    downloadCount: 1756,
    rating: 4.8,
    imageUrl: "/images/products/social.jpg",
    fileSize: "120MB",
    pages: 45,
    videoDuration: "29 minutes",
    includes: [
      "Comprehensive ebook (45 pages)",
      "10 instructional videos with voiceover",
      "10 audio files",
      "Social media strategy checklist"
    ],
    dateAdded: new Date("2023-07-10")
  },
  {
    id: "10",
    title: "The Authorpreneur Masterclass",
    slug: "authorpreneur-masterclass",
    type: "Video Course",
    format: ["Audio", "Video"],
    description: "Turn your expertise into books, courses, and digital products. Create multiple income streams as an author.",
    price: 89.99,
    downloadCount: 1305,
    rating: 4.6,
    imageUrl: "/images/products/authorpreneur.jpg",
    fileSize: "167MB",
    videoDuration: "37 minutes",
    includes: [
      "20 HD videos covering all aspects of authorpreneurship",
      "Audio versions for on-the-go learning"
    ],
    dateAdded: new Date("2023-02-20")
  }
]; 