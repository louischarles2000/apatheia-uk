"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-10 bg-primary rounded-full mr-3 flex items-center justify-center">
            <span className="text-white font-serif font-bold">A</span>
          </div>
          <span className="font-serif text-xl font-bold text-text">Apatheia UK</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/resources" className="text-text hover:text-primary transition-colors">
            Resource Library
          </Link>
          <Link href="/specializations" className="text-text hover:text-primary transition-colors">
            Specializations
          </Link>
          <Link href="/about" className="text-text hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-text hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>

        {/* Right side elements */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-text hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link href="/account" className="text-text hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
          <Button href="/resources" variant="primary">Browse Resources</Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden py-4">
            <div className="container-custom flex flex-col space-y-3">
              <Link 
                href="/resources" 
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resource Library
              </Link>
              <Link 
                href="/specializations" 
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Specializations
              </Link>
              <Link 
                href="/about" 
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/account" 
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                My Account
              </Link>
              <Button 
                href="/resources" 
                variant="primary"
                className="w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Resources
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
