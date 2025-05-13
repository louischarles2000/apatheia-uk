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
            <Badge variant="primary" className="mb-4">About Us</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6">
              Our mission is to empower mental health professionals
            </h1>
            <p className="text-lg text-text/80 mb-8">
              Apatheia UK was founded with a singular focus: to provide therapists and counsellors with the highest quality resources to enhance their practice and improve client outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Our Story</Badge>
              <h2 className="font-serif text-3xl font-bold text-text mb-6">
                Founded by therapists, for therapists
              </h2>
              <p className="text-text/80 mb-4">
                Apatheia UK was established in 2018 by a team of experienced therapists who recognized a gap in the market for high-quality, evidence-based resources that were both accessible and practical.
              </p>
              <p className="text-text/80 mb-4">
                Our founders, having worked across various therapeutic modalities and settings, were frustrated by the lack of comprehensive, ready-to-use materials that could be easily integrated into daily practice.
              </p>
              <p className="text-text/80">
                What began as a small collection of resources shared among colleagues has grown into a comprehensive library serving thousands of mental health professionals across the United Kingdom and beyond.
              </p>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="/images/about/team.jpg"
                alt="Apatheia UK founding team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">Our Values</Badge>
            <h2 className="font-serif text-3xl font-bold text-text mb-6">
              The principles that guide us
            </h2>
            <p className="text-lg text-text/80 max-w-2xl mx-auto">
              At Apatheia UK, our work is underpinned by a set of core values that inform everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                  <div className="w-8 h-8 flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-text/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">Our Team</Badge>
            <h2 className="font-serif text-3xl font-bold text-text mb-6">
              Meet the experts behind our resources
            </h2>
            <p className="text-lg text-text/80 max-w-2xl mx-auto">
              Our team brings together decades of experience across various therapeutic modalities and specializations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-2">{member.title}</p>
                <p className="text-text/70 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Ready to enhance your therapeutic practice?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Explore our extensive library of resources designed specifically for mental health professionals like you.
          </p>
          <Button href="/resources" variant="secondary" className="text-lg px-8 py-3">
            Browse Our Resources
          </Button>
        </div>
      </section>
    </div>
  );
}

// Mock data
const values = [
  {
    title: "Evidence-Based Practice",
    description: "We are committed to providing resources that are grounded in the latest research and clinical evidence.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "Practicality & Applicability",
    description: "Our resources are designed to be immediately useful in real-world therapeutic settings.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  },
  {
    title: "Inclusivity & Diversity",
    description: "We create materials that respect and address the diverse needs of clients from all backgrounds and identities.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  },
];

const team = [
  {
    name: "Dr. Eleanor Richards",
    title: "Founder & Clinical Psychologist",
    bio: "With over 20 years of experience, Eleanor specializes in trauma-informed cognitive behavioral approaches.",
    image: "/images/about/team-1.jpg"
  },
  {
    name: "James Wilson",
    title: "Content Director & Counselor",
    bio: "James brings his expertise in relationship counseling and narrative therapy to our resource development.",
    image: "/images/about/team-2.jpg"
  },
  {
    name: "Dr. Sophia Chen",
    title: "Research Lead & Therapist",
    bio: "Sophia ensures all our materials are backed by the latest research and clinical evidence.",
    image: "/images/about/team-3.jpg"
  },
  {
    name: "Marcus Johnson",
    title: "Operations & Support",
    bio: "Marcus handles the day-to-day operations and ensures our platform runs smoothly for all users.",
    image: "/images/about/team-4.jpg"
  }
];
