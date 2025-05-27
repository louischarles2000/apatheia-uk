"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { useCurrency } from '../../context/CurrencyContext';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  const availableCurrencies = ["GBP", "USD", "AUD", "EUR", "CAD"];

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value as typeof currency);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="apatheia.svg" className='w-24' alt="Apatheia UK" width={48} height={48} />
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
          {/* Currency Selector */}
          <div className="relative">
            <select
              value={currency}
              onChange={handleCurrencyChange}
              className="appearance-none bg-transparent border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            >
              {availableCurrencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <Button href="/products" variant="primary">Shop Now</Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden py-4">
            <div className="container-custom flex flex-col space-y-3">
              {/* Currency Selector - Mobile */}
              <div className="px-4">
                <label htmlFor="mobile-currency-select" className="block text-sm font-medium text-gray-700 mb-1">
                  Currency:
                </label>
                <select
                  id="mobile-currency-select"
                  value={currency}
                  onChange={(e) => {
                    handleCurrencyChange(e);
                    setIsMenuOpen(false);
                  }}
                  className="w-full appearance-none bg-transparent border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                  {availableCurrencies.map((cur) => (
                    <option key={cur} value={cur}>
                      {cur}
                    </option>
                  ))}
                </select>
              </div>
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
