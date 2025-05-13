import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Rating from '../ui/Rating';
import { Resource } from '../../types/resource';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-serif text-lg font-bold text-text">
            <Link href={`/resources/${resource.slug}`} className="hover:text-primary transition-colors">
              {resource.title}
            </Link>
          </h3>
          <Badge variant="primary">{resource.type}</Badge>
        </div>
        
        <p className="text-text/70 text-sm mb-4 line-clamp-2">
          {resource.description}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-sm text-text/60">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>{resource.downloadCount} downloads</span>
          </div>
          <Rating value={resource.rating} />
        </div>
        
        <Button href={`/resources/${resource.slug}`} variant="primary" className="w-full">
          Download
        </Button>
      </div>
    </div>
  );
};

export default ResourceCard;
