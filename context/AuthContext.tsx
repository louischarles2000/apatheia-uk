"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

// Define user type
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateJoined: Date;
}

// Define context type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (userData: SignUpData) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
}

// Sign up data interface
interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider props
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Check if user is already authenticated
  useEffect(() => {
    // Here you would check for an existing token or session
    // This is just a mock implementation
    const checkAuth = async () => {
      try {
        // Simulating an API call to verify auth status
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // For demo purposes - replace with actual auth check
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Sign in function
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Replace with your actual authentication API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      if (email && password) {
        const mockUser: User = {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: email,
          dateJoined: new Date('2023-01-15'),
        };
        
        setUser(mockUser);
        // Store user in localStorage for persistence
        localStorage.setItem('user', JSON.stringify(mockUser));
        return;
      }
      
      throw new Error('Invalid credentials');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Sign up function
  const signUp = async (userData: SignUpData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Replace with your actual sign up API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration
      const newUser: User = {
        id: '2', // In a real app, this would come from the backend
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        dateJoined: new Date(),
      };
      
      setUser(newUser);
      // Store user in localStorage for persistence
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (err) {
      setError('Registration failed. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Sign out function
  const signOut = async () => {
    setLoading(true);
    
    try {
      // Replace with your actual sign out API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Clear user data
      setUser(null);
      localStorage.removeItem('user');
      
      // Redirect to home page
      router.push('/');
    } catch (err) {
      console.error('Sign out failed:', err);
    } finally {
      setLoading(false);
    }
  };

  // Forgot password function
  const forgotPassword = async (email: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Replace with your actual forgot password API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would send a reset email
      console.log(`Password reset email sent to ${email}`);
    } catch (err) {
      setError('Failed to send password reset email. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Reset password function
  const resetPassword = async (token: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Replace with your actual reset password API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would verify the token and update the password
      console.log(`Password reset successful for token ${token}`);
    } catch (err) {
      setError('Password reset failed. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    forgotPassword,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Higher-order component for protected routes
export function withAuth<T>(Component: React.ComponentType<T>) {
  return function AuthenticatedComponent(props: T) {
    const { user, loading } = useAuth();
    const router = useRouter();
    
    useEffect(() => {
      if (!loading && !user) {
        router.replace('/auth/signin?redirect=' + encodeURIComponent(window.location.pathname));
      }
    }, [user, loading, router]);
    
    // Show loading state or redirect if not authenticated
    if (loading) {
      return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }
    
    if (!user) {
      return null; // Will redirect in the useEffect
    }
    
    return <Component {...props} />;
  };
} 