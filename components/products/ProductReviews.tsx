'use client'
import React, { useEffect, useState } from 'react'
import { ReviewType } from '../../types/types';
import axios from 'axios';
import Card from '../ui/Card';
import { formatDate } from '../../lib/utils';

function ProductReviews({productId}: {productId: number}) {
  const [testimonials, setTestimonials] = useState<ReviewType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      try {
        const reviews = await axios.get("/api/reviews", { params: { limit: 3, rating: 5, product_id: productId } });
        setTestimonials(reviews.data.Data.reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  getReviews();
  }, [productId]);

  if (loading || testimonials.length === 0) {
    return null;
  }

  return (
   <div className="mt-12">
    <h2 className="font-serif text-2xl font-bold mb-6">Reviews</h2>
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
  )
}

export default ProductReviews