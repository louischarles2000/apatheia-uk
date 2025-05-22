import React from 'react';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import ProductCard from '../components/products/ProductCard';
import { Product } from '../types/resource';

export default function Home() {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);

  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-16 md:py-24">
        <div className="absolute inset-0 opacity-10 bg-circle-pattern"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4">
                Transform Your Potential into Reality
              </h1>
              <p className="text-lg md:text-xl text-text/80 mb-8">
                Professional-grade personal development resources for achievers
              </p>
              <Button href="/products" variant="primary" className="text-lg px-8 py-3">
                Shop Now
              </Button>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96">
              <Image
                src="/images/mental.jpg"
                alt="Personal development resources"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-6">
              Practical Tools for Meaningful Growth
            </h2>
            <p className="text-lg text-text/70">
              At Apatheia, we provide practical tools for meaningful personal growth. Our digital resources help you build habits, improve focus, enhance leadership skills, and achieve your goals without overwhelm.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-3">Featured Products</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              Recommended for You
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              These top-rated resources have helped thousands transform their lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/products" variant="outline">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Our Resources Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              Why Choose Our Resources
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              We focus on creating resources that deliver real-world results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Practical Application */}
            <Card className="flex flex-col items-center text-center p-8 transition-transform hover:translate-y-[-8px]">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Practical Application</h3>
              <p className="text-text/70 mb-6">
                Step-by-step guidance you can implement today. Our resources focus on actionable strategies rather than just theory.
              </p>
            </Card>

            {/* Multimedia Learning */}
            <Card className="flex flex-col items-center text-center p-8 transition-transform hover:translate-y-[-8px]">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Multimedia Learning</h3>
              <p className="text-text/70 mb-6">
                Audio, video, and written content for different learning styles. Consume our content in whatever format works best for you.
              </p>
            </Card>

            {/* Expert Knowledge */}
            <Card className="flex flex-col items-center text-center p-8 transition-transform hover:translate-y-[-8px]">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Expert Knowledge</h3>
              <p className="text-text/70 mb-6">
                Research-backed strategies for lasting results. Our materials combine academic insights with real-world application.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Hear from people who have transformed their lives with our resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-text/70">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-text/80 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
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
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Michael Thompson",
    title: "Business Professional",
    quote: "The Focus Mastery program completely changed how I work. I'm now twice as productive and feel much less stressed at the end of each day."
  },
  {
    name: "Sarah Johnson",
    title: "Leadership Coach",
    quote: "As someone who teaches leadership skills, I'm impressed by the quality of the Level Up Your Leadership resource. It's comprehensive yet practical."
  },
  {
    name: "David Chen",
    title: "Entrepreneur",
    quote: "The Consistent Action Framework gave me the structure I needed to finally make progress on my business goals. Worth every penny."
  }
];
