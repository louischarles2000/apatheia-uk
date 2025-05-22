import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Rating from '../ui/Rating';
import { Product } from '../../types/resource';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={product.imageUrl || "/images/placeholder.jpg"}
          alt={product.title}
          fill
          className="object-cover"
        />
        {product.featured && (
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
          <Badge variant="primary">{product.type}</Badge>
        </div>
        
        <p className="text-text/70 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.format.map((format, i) => (
            <span 
              key={i}
              className="text-xs bg-secondary py-1 px-2 rounded-full"
            >
              {format}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Rating value={product.rating} />
            <span className="ml-2 text-xs text-text/60">({product.downloadCount})</span>
          </div>
          <span className="font-bold">€{product.price}</span>
        </div>
        
        <Button href={`/products/${product.slug}`} variant="primary" className="w-full">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard; 