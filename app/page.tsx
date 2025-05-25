import React from 'react';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import FeaturedProducts from '../components/products/FeaturedProducts';
import TopReviews from '../components/products/TopReviews';

export default function Home() {

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
      <FeaturedProducts />

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
      <TopReviews />
    </div>
  );
}

