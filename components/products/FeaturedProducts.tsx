'use client'
import React from 'react'
import { useStore } from '../../context/StoreProvider'
import Badge from '../ui/Badge';
import ProductCard from './ProductCard';
import Button from '../ui/Button';

function FeaturedProducts() {
  const { featuredProducts, loading } = useStore();

  if (loading) return null;

  return (
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
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/products" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts