import React from 'react';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';

export default function Home() {
  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-16 md:py-24">
        <div className="absolute inset-0 opacity-10 bg-circle-pattern"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4">
                Let's build a world of healthy minds.
              </h1>
              <p className="text-lg md:text-xl text-text/80 mb-8">
                Create understanding and growth in significant aspects of your life.
              </p>
              <Button href="/resources" variant="primary" className="text-lg px-8 py-3">
                Browse Resources
              </Button>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96">
              <Image
                src="/images/hero-image.jpg"
                alt="Professional with resources"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              Empower your practice
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Here you will find professional resources to enhance your therapy work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Psychotherapy Card */}
            <Card className="flex flex-col items-center text-center p-8 transition-transform hover:translate-y-[-8px]">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Psychotherapy</h3>
              <p className="text-text/70 mb-6">
                Access evidence-based approaches and frameworks to enhance your verbal therapy sessions and client outcomes.
              </p>
              <Button href="/specializations/psychotherapy" variant="outline">Learn More</Button>
            </Card>

            {/* Astrology Card */}
            <Card className="flex flex-col items-center text-center p-8 transition-transform hover:translate-y-[-8px]">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Astrology</h3>
              <p className="text-text/70 mb-6">
                Discover how astrological insights can be integrated into therapeutic practices for a holistic approach to wellbeing.
              </p>
              <Button href="/specializations/astrology" variant="outline">Learn More</Button>
            </Card>

            {/* Assessments Card */}
            <Card className="flex flex-col items-center text-center p-8 transition-transform hover:translate-y-[-8px]">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Assessments</h3>
              <p className="text-text/70 mb-6">
                Comprehensive evaluation tools to help you understand client needs, track progress, and measure treatment efficacy.
              </p>
              <Button href="/specializations/assessments" variant="outline">Learn More</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <Badge variant="accent" className="mb-3">Specialties</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text">
                Range of specialities to meet<br className="hidden md:block" /> your specific needs.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="p-6 transition-all hover:shadow-lg">
                <h3 className="font-serif text-lg font-bold mb-2">{specialty.title}</h3>
                <p className="text-text/70 text-sm">{specialty.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              Trusted by mental health professionals
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Hear what therapists and counsellors have to say about our resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-text/70">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-text/80 italic">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Mock data
const specialties = [
  {
    title: "Anxiety disorders",
    description: "Resources for helping clients manage various forms of anxiety, from general worry to specific phobias."
  },
  {
    title: "Relationship issues",
    description: "Tools to address interpersonal conflicts, communication problems, and attachment styles."
  },
  {
    title: "Stress management",
    description: "Techniques for helping clients cope with daily stressors and develop resilience."
  },
  {
    title: "Substance addiction",
    description: "Frameworks for understanding and treating various forms of substance use disorders."
  },
  {
    title: "Chronic pain management",
    description: "Approaches to help clients manage persistent pain and improve quality of life."
  },
  {
    title: "Parenting and family issues",
    description: "Resources for supporting family dynamics, parenting challenges, and child development."
  },
  {
    title: "Gender and sexual identity",
    description: "Tools for affirming care and supporting clients exploring gender and sexuality."
  },
  {
    title: "Childhood abuse",
    description: "Trauma-informed approaches to help adults heal from childhood experiences."
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    title: "Clinical Psychologist",
    quote: "The resources from Apatheia UK have transformed my practice. The assessment tools are comprehensive and the therapy guides are evidence-based and easy to implement."
  },
  {
    name: "Mark Thompson",
    title: "Marriage Counselor",
    quote: "I've been using the relationship counseling materials with my clients for months now and have seen remarkable progress. Highly recommended for any relationship therapist."
  },
  {
    name: "Dr. Amelia Chen",
    title: "Trauma Specialist",
    quote: "The trauma-informed resources are exceptional. They're sensitive, well-researched, and provide a clear framework for helping clients process difficult experiences."
  }
];
