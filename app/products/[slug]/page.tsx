"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/ui/Button';
import Rating from '../../../components/ui/Rating';
import Badge from '../../../components/ui/Badge';
import { Product } from '../../../types/resource';
import ProductCard from '../../../components/products/ProductCard';

// In a real application, this would come from a database or API
const getProductBySlug = (slug: string) => {
  return products.find(product => product.slug === slug);
};

const getRelatedProducts = (product: Product) => {
  // Get 3 related products based on type
  return products
    .filter(p => p.id !== product.id && p.type === product.type)
    .slice(0, 3);
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const [quantity, setQuantity] = useState(1);
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Button href="/products" variant="primary">
          Back to Products
        </Button>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="bg-secondary py-12">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <p className="text-sm text-text/60">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link> /
            <Link href="/products" className="mx-2 hover:text-primary transition-colors">Products</Link> /
            <span>{product.title}</span>
          </p>
        </div>

        {/* Product Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative min-h-[300px]">
              <Image
                src={product.imageUrl || "/images/placeholder.jpg"}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div>
              <div className="mb-4 flex items-center">
                <Badge variant="primary" className="mr-3">{product.type}</Badge>
                <Rating value={product.rating} />
                <span className="ml-2 text-sm text-text/60">({product.downloadCount} downloads)</span>
              </div>

              <h1 className="font-serif text-3xl font-bold text-text mb-4">{product.title}</h1>

              <p className="text-text/80 mb-6">
                {product.fullDescription || product.description}
              </p>

              <div className="mb-4">
                <h3 className="font-medium mb-2">Format:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.format.map((format, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-secondary py-1 px-2 rounded-full"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-medium mb-2">Includes:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.includes.map((item, i) => (
                    <li key={i} className="text-text/80">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="font-medium mr-2">File Size:</span>
                  <span className="text-text/80">{product.fileSize}</span>
                </div>
                
                {product.pages && (
                  <div className="flex items-center mb-2">
                    <span className="font-medium mr-2">Pages:</span>
                    <span className="text-text/80">{product.pages}</span>
                  </div>
                )}
                
                {product.videoDuration && (
                  <div className="flex items-center mb-2">
                    <span className="font-medium mr-2">Video Duration:</span>
                    <span className="text-text/80">{product.videoDuration}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4 mt-6">
                <span className="text-2xl font-bold">€{product.price}</span>
                <div className="flex items-center border rounded-md">
                  <button 
                    className="px-3 py-1 border-r"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button 
                    className="px-3 py-1 border-l"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <Button variant="primary" className="px-8">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl font-bold mb-6">You might also like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
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
    imageUrl: "/images/products/leadership.jpg",
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
    imageUrl: "/images/products/happen.jpg",
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
    imageUrl: "/images/products/influential.jpg",
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
    imageUrl: "/images/products/excuses.jpg",
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
    imageUrl: "/images/products/transform.jpg",
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