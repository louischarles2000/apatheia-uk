'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Rating from '../ui/Rating';
import { ProductType } from '../../types/types';
import { IMAGE_PREFIX } from '../../lib/constants';
import { formatDecodedString } from '../../lib/utils';
import PriceFormat from './PriceFormat';

interface ProductCardProps {
  product: ProductType;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={product.image ? `${IMAGE_PREFIX}/${product.image}`  : "/images/placeholder.jpg"}
          alt={product.title}
          fill
          className="object-cover"
        />
        {featured && (
          <span className="absolute top-2 right-2 bg-accent text-white text-xs py-1 px-2 rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-serif text-lg font-bold text-text">
            <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
              {product.title}
            </Link>
          </h3>
          <Badge variant="primary">{product.category_name}</Badge>
        </div>
        
        <p className="text-text/70 text-sm mb-4 line-clamp-2">
          {formatDecodedString(product.description)}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags &&product.tags.split(',').splice(0, 4).map((format, i) => (
            <span 
              key={i}
              className="text-xs bg-secondary py-1 px-2 rounded-full capitalize"
            >
              {format}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Rating value={product.rating??0} />
            {/* <span className="ml-2 text-xs text-text/60">({product.totalReviews ?? 0})</span> */}
          </div>
          {!product.discount_price && <span className="font-bold"><PriceFormat amount={product.price} /></span>}
          {product.discount_price && (
            <div className="flex items-baseline">
              <span className="font-bold text-sm text-red-500 line-through mr-2">
                <PriceFormat amount={product.price} />
              </span>
              <span className="font-bold">
                <PriceFormat amount={product.discount_price} />
              </span>
            </div>
          )}
        </div>
        
        <Button href={`/products/${product.slug}`} variant="primary" className="w-full">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard; 