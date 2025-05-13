import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import { Specialization } from '../../types/specialization';

interface SpecializationCardProps {
  specialization: Specialization;
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({ specialization }) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-lg">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          {specialization.iconUrl ? (
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
              <img
                src={specialization.iconUrl}
                alt={specialization.name}
                className="w-6 h-6"
              />
            </div>
          ) : (
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          )}
          <h3 className="font-serif text-lg font-bold">{specialization.name}</h3>
        </div>
        <p className="text-text/70 text-sm flex-grow">{specialization.description}</p>
        <div className="mt-4">
          <Link
            href={`/specializations/${specialization.slug}`}
            className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default SpecializationCard;
