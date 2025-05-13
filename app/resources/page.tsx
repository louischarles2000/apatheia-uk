"use client";

import React, { useState } from 'react';
import Badge from '../../components/ui/Badge';
import ResourceCard from '../../components/resources/ResourceCard';
import { Resource } from '../../types/resource';

export default function ResourceLibrary() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter resources based on active tab and search query
  const filteredResources = mockResources.filter(resource => {
    // Filter by tab
    if (activeTab !== "all" && resource.type !== activeTab) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !resource.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="bg-secondary py-12">
      <div className="container-custom">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <Badge variant="primary" className="mb-3">Resource Library</Badge>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
            Professional resources for therapists and counsellors
          </h1>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Access high-quality materials to enhance your practice and support your clients
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === "all" ? "bg-primary text-white" : "bg-white text-text hover:bg-primary/10"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Resources
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === "Guide" ? "bg-primary text-white" : "bg-white text-text hover:bg-primary/10"
            }`}
            onClick={() => setActiveTab("Guide")}
          >
            Therapy Guides
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === "Template" ? "bg-primary text-white" : "bg-white text-text hover:bg-primary/10"
            }`}
            onClick={() => setActiveTab("Template")}
          >
            Templates
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === "Script" ? "bg-primary text-white" : "bg-white text-text hover:bg-primary/10"
            }`}
            onClick={() => setActiveTab("Script")}
          >
            Wellness Resources
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search resources..."
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
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg text-text/70">No resources found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Mock Data
const mockResources: Resource[] = [
  {
    id: "1",
    title: "Understanding Cognitive Behavioral Therapy",
    slug: "understanding-cbt",
    type: "Guide",
    description: "A comprehensive guide to cognitive behavioral therapy techniques, interventions, and applications for various mental health conditions.",
    fullDescription: "This extensive guide provides a deep dive into Cognitive Behavioral Therapy (CBT), one of the most evidence-based psychotherapy approaches. It covers the theoretical foundations, core techniques, and practical applications across various mental health conditions including anxiety, depression, PTSD, and more.",
    price: 49.99,
    downloadCount: 2453,
    rating: 4.8,
    imageUrl: "/images/resources/cbt-guide.jpg",
    specializations: ["anxiety-disorders", "depression", "stress-management"],
    dateAdded: new Date("2023-05-15"),
    featured: true
  },
  {
    id: "2",
    title: "Client Assessment Templates",
    slug: "client-assessment-templates",
    type: "Template",
    description: "A collection of professionally designed templates for comprehensive client assessments, intake forms, and progress tracking.",
    price: 29.99,
    downloadCount: 1829,
    rating: 4.9,
    imageUrl: "/images/resources/assessment-templates.jpg",
    specializations: ["general-practice"],
    dateAdded: new Date("2023-06-02")
  },
  {
    id: "3",
    title: "Mindfulness Meditation Scripts",
    slug: "mindfulness-meditation-scripts",
    type: "Script",
    description: "Ready-to-use meditation scripts for therapists to guide clients through mindfulness practices and relaxation exercises.",
    price: 19.99,
    downloadCount: 3211,
    rating: 4.7,
    imageUrl: "/images/resources/meditation-scripts.jpg",
    specializations: ["stress-management", "anxiety-disorders"],
    dateAdded: new Date("2023-04-10"),
    featured: true
  },
  {
    id: "4",
    title: "Trauma-Informed Care Handbook",
    slug: "trauma-informed-care-handbook",
    type: "Guide",
    description: "A comprehensive handbook for implementing trauma-informed approaches in therapeutic settings and clinical practice.",
    price: 59.99,
    downloadCount: 1556,
    rating: 4.9,
    imageUrl: "/images/resources/trauma-handbook.jpg",
    specializations: ["trauma", "childhood-abuse"],
    dateAdded: new Date("2023-07-20")
  },
  {
    id: "5",
    title: "Progress Note Templates",
    slug: "progress-note-templates",
    type: "Template",
    description: "Professionally designed and easy-to-use templates for therapy progress notes, treatment plans, and session documentation.",
    price: 24.99,
    downloadCount: 4102,
    rating: 4.8,
    imageUrl: "/images/resources/progress-notes.jpg",
    specializations: ["general-practice"],
    dateAdded: new Date("2023-03-05"),
    featured: true
  },
  {
    id: "6",
    title: "Anxiety Management Techniques",
    slug: "anxiety-management-techniques",
    type: "Guide",
    description: "A collection of evidence-based techniques and interventions specifically designed to help clients manage various forms of anxiety.",
    price: 39.99,
    downloadCount: 2890,
    rating: 4.6,
    imageUrl: "/images/resources/anxiety-techniques.jpg",
    specializations: ["anxiety-disorders", "stress-management"],
    dateAdded: new Date("2023-06-15")
  }
];
