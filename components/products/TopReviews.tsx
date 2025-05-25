'use client'
import React from 'react'
import { useStore } from '../../context/StoreProvider'
import Card from '../ui/Card';
import { formatDate } from '../../lib/utils';

function TopReviews() {
  const { testimonials, loading } = useStore();

  if (loading) return null;

  return (
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
                  <span className="text-primary font-bold text-lg">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-text/70">{formatDate(testimonial.date_added)}</p>
                </div>
              </div>
              <p className="text-text/80 italic">&ldquo;{testimonial.text}&rdquo;</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopReviews