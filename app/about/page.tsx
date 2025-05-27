import React from 'react';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

export default function AboutPage() {
  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 opacity-10 bg-circle-pattern"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">About Apatheia</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6">
              Transforming potential into reality through practical tools
            </h1>
            <p className="text-lg text-text/80 mb-8">
              Apatheia (from ancient Greek philosophy) represents mental resilience and clarity - the foundation of effective personal development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Our Philosophy</Badge>
              <h2 className="font-serif text-3xl font-bold text-text mb-6">
                Meaningful growth through practical tools
              </h2>
              <p className="text-text/80 mb-4">
                We believe meaningful growth comes from practical tools, not just inspiration. Our resources provide actionable strategies that fit into your real life, helping you build habits, improve focus, enhance leadership skills, and achieve your goals.
              </p>
              <p className="text-text/80 mb-4">
                Each product combines research-backed approaches with step-by-step guidance, delivered in multiple formats to suit different learning preferences.
              </p>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="/images/products/mind.jpg"
                alt="Practical personal development tools"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">Our Principles</Badge>
            <h2 className="font-serif text-3xl font-bold text-text mb-6">
              The principles that guide us
            </h2>
            <p className="text-lg text-text/80 max-w-2xl mx-auto">
              At Apatheia, our work is underpinned by a set of core principles that inform everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                  <div className="w-8 h-8 flex items-center justify-center text-primary">
                    {principle.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-text/70">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="accent" className="mb-4">Company Information</Badge>
              <h2 className="font-serif text-3xl font-bold text-text mb-6">
                About Our Company
              </h2>
            </div>
            
            <div className="bg-secondary p-8 rounded-lg">
              <p className="text-text/80 mb-4">
                <strong>Apatheia UK LTD</strong> is registered in England and Wales.
              </p>
              <p className="text-text/80 mb-4">
                <strong>Registration Number:</strong> 16424981
              </p>
              <p className="text-text/80">
                <strong>Registered Address:</strong> 3rd Floor, 45 Albemarle Street, Mayfair, London, W1S 4JL
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Ready to transform your potential?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Explore our extensive library of resources designed to help you build habits, improve focus, and achieve your goals.
          </p>
          <Button href="/products" variant="secondary" className="text-lg px-8 py-3">
            Browse Our Products
          </Button>
        </div>
      </section>
    </div>
  );
}

// Principles data
const principles = [
  {
    title: "Practical over theoretical",
    description: "We focus on what works in real life, not just what sounds good.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  },
  {
    title: "Action over information",
    description: "Knowledge is only valuable when applied. Our resources emphasize implementation.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  },
  {
    title: "Accessible to everyone",
    description: "Personal development should be straightforward and applicable regardless of your background.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  },
];
