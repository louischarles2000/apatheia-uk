"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { useAuth } from '../../../context/AuthContext';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const { forgotPassword, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await forgotPassword(email);
      
      // Show success message
      setEmailSent(true);
    } catch (err) {
      // Error is handled by the auth context
      console.error('Password reset request failed:', err);
    }
  };

  return (
    <div className="bg-secondary py-16 min-h-[80vh] flex items-center justify-center">
      <div className="container-custom max-w-md">
        <Card className="p-8">
          <div className="text-center mb-8">
            <h1 className="font-serif text-2xl font-bold mb-2">Forgot Password</h1>
            <p className="text-text/70">
              Enter your email address and we'll send you a link to reset your password
            </p>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
          
          {emailSent ? (
            <div className="text-center">
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                Password reset email sent! Please check your inbox.
              </div>
              
              <p className="mb-6 text-text/70">
                Didn't receive an email? Check your spam folder or try again.
              </p>
              
              <Button
                onClick={() => setEmailSent(false)}
                variant="outline"
                className="mb-4"
              >
                Try Again
              </Button>
              
              <div className="mt-4">
                <Link
                  href="/auth/signin"
                  className="text-primary hover:text-primary/80"
                >
                  Return to Sign In
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </Button>
              
              <div className="mt-6 text-center">
                <Link
                  href="/auth/signin"
                  className="text-primary hover:text-primary/80"
                >
                  Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
} 