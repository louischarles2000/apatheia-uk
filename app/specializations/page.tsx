"use client";

import React, { useState } from 'react';
import Badge from '../../components/ui/Badge';
import SpecializationCard from '../../components/specializations/SpecializationCard';
import { Specialization } from '../../types/specialization';

export default function SpecializationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter specializations based on search query
  const filteredSpecializations = mockSpecializations.filter(spec => {
    if (searchQuery && !spec.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-secondary py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge variant="primary" className="mb-3">Specializations</Badge>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
            Find resources for your area of expertise
          </h1>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Browse our collection of specialized resources designed for therapists working in specific domains
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search specializations..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecializations.map((specialization) => (
            <SpecializationCard 
              key={specialization.id} 
              specialization={specialization} 
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredSpecializations.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg text-text/70">No specializations found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Mock Data
const mockSpecializations: Specialization[] = [
  {
    id: "1",
    name: "Anxiety Disorders",
    slug: "anxiety-disorders",
    description: "Resources for helping clients manage various forms of anxiety, from general worry to specific phobias.",
    iconUrl: "/images/specializations/anxiety.svg",
    relatedResources: ["1", "6"]
  },
  {
    id: "2",
    name: "Relationship Issues",
    slug: "relationship-issues",
    description: "Tools to address interpersonal conflicts, communication problems, and attachment styles.",
    iconUrl: "/images/specializations/relationships.svg",
    relatedResources: []
  },
  {
    id: "3",
    name: "Stress Management",
    slug: "stress-management",
    description: "Techniques for helping clients cope with daily stressors and develop resilience.",
    iconUrl: "/images/specializations/stress.svg",
    relatedResources: ["3", "6"]
  },
  {
    id: "4",
    name: "Substance Addiction",
    slug: "substance-addiction",
    description: "Frameworks for understanding and treating various forms of substance use disorders.",
    iconUrl: "/images/specializations/addiction.svg",
    relatedResources: []
  },
  {
    id: "5",
    name: "Chronic Pain Management",
    slug: "chronic-pain-management",
    description: "Approaches to help clients manage persistent pain and improve quality of life.",
    iconUrl: "/images/specializations/pain.svg",
    relatedResources: []
  },
  {
    id: "6",
    name: "Parenting and Family Issues",
    slug: "parenting-family-issues",
    description: "Resources for supporting family dynamics, parenting challenges, and child development.",
    iconUrl: "/images/specializations/family.svg",
    relatedResources: []
  },
  {
    id: "7",
    name: "Gender and Sexual Identity",
    slug: "gender-sexual-identity",
    description: "Tools for affirming care and supporting clients exploring gender and sexuality.",
    iconUrl: "/images/specializations/identity.svg",
    relatedResources: []
  },
  {
    id: "8",
    name: "Childhood Abuse",
    slug: "childhood-abuse",
    description: "Trauma-informed approaches to help adults heal from childhood experiences.",
    iconUrl: "/images/specializations/trauma.svg",
    relatedResources: ["4"]
  }
];
