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
          <span className="font-serif text-xl font-bold text-text">Apatheia</span>
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
          <Link href="/" className="text-text hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-text hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-text hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-text hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right side elements */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <Link href="/account" className="text-text hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
          <Link href="/cart" className="text-text hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link> */}
          <Button href="/products" variant="primary">Shop Now</Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden py-4">
            <div className="container-custom flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/account" 
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                My Account
              </Link>
              <Link 
                href="/cart" 
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
              </Link>
              <Button 
                href="/products" 
                variant="primary"
                className="w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
