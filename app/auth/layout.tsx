import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication | Apatheia UK',
  description: 'Sign in or create an account to access Apatheia UK therapy resources.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Optional auth-specific header */}
      <div className="py-8 text-center">
        <Link href="/" className="inline-block">
          <div className="relative h-12 w-48 mx-auto">
            {/* Replace with your actual logo path */}
            <Image 
              src="/images/logo.png" 
              alt="Apatheia UK" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>
      </div>
      
      {/* Main content */}
      {children}
    </div>
  );
} 