import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/ui/Button';
import Rating from '../../../components/ui/Rating';
import Badge from '../../../components/ui/Badge';
import { Resource } from '../../../types/resource';
import ResourceCard from '../../../components/resources/ResourceCard';


// In a real application, this would come from a database or API
const getResourceBySlug = (slug: string) => {
  return mockResources.find(resource => resource.slug === slug);
};

const getRelatedResources = (resource: Resource) => {
  // Get 3 related resources based on specializations
  return mockResources
    .filter(r => r.id !== resource.id &&
      r.specializations.some(spec => resource.specializations.includes(spec)))
    .slice(0, 3);
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ResourceDetailPage({ params }: PageProps) {
  const resource = getResourceBySlug(params.slug);

  if (!resource) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="font-serif text-2xl mb-4">Resource not found</h1>
        <p className="mb-8">The resource you are looking for does not exist.</p>
        <Button href="/resources" variant="primary">
          Back to Resource Library
        </Button>
      </div>
    );
  }

  const relatedResources = getRelatedResources(resource);

  return (
    <div className="bg-secondary py-12">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <p className="text-sm text-text/60">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link> /
            <Link href="/resources" className="mx-2 hover:text-primary transition-colors">Resources</Link> /
            <span>{resource.title}</span>
          </p>
        </div>

        {/* Resource Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4 flex items-center">
                <Badge variant="primary" className="mr-3">{resource.type}</Badge>
                <Rating value={resource.rating} />
                <span className="ml-2 text-sm text-text/60">({resource.downloadCount} downloads)</span>
              </div>

              <h1 className="font-serif text-3xl font-bold text-text mb-4">{resource.title}</h1>

              <p className="text-text/80 mb-6">
                {resource.fullDescription || resource.description}
              </p>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="font-medium mr-2">Specializations:</span>
                  <div className="flex flex-wrap gap-2">
                    {resource.specializations.map((spec, i) => (
                      <Link
                        key={i}
                        href={`/specializations/${spec}`}
                        className="text-xs bg-primary/10 text-primary py-1 px-2 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {spec.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="font-medium mr-2">Date added:</span>
                  <span className="text-text/60">{resource.dateAdded.toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">${resource.price}</span>
                <Button variant="primary" className="px-8">Add to Cart</Button>
              </div>
            </div>

            <div className="relative min-h-[300px]">
              <Image
                src={resource.imageUrl || "/images/placeholder.jpg"}
                alt={resource.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Related Resources */}
        {relatedResources.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl font-bold mb-6">You might also like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedResources.map(relatedResource => (
                <ResourceCard key={relatedResource.id} resource={relatedResource} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Mock data
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
