"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { withAuth } from '../../context/AuthContext';

function AccountDashboard() {
  const { user, signOut, loading } = useAuth();
  
  // Mock purchased resources
  const purchasedResources = [
    {
      id: "1",
      title: "Understanding Cognitive Behavioral Therapy",
      purchaseDate: new Date("2023-05-20"),
      imageUrl: "/images/resources/cbt-guide.jpg",
    },
    {
      id: "6",
      title: "Anxiety Management Techniques",
      purchaseDate: new Date("2023-07-12"),
      imageUrl: "/images/resources/anxiety-techniques.jpg",
    }
  ];

  return (
    <div className="bg-secondary py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="p-0 overflow-hidden">
              <div className="bg-primary text-white p-6">
                <h2 className="font-serif text-xl font-bold">My Account</h2>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="/account" 
                      className="block p-2 rounded-md bg-primary/10 text-primary font-medium"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/account/purchases" 
                      className="block p-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Purchase History
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/account/saved" 
                      className="block p-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Saved Resources
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/account/settings" 
                      className="block p-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Account Settings
                    </Link>
                  </li>
                  <li>
                    <button 
                      onClick={signOut}
                      disabled={loading}
                      className="block w-full text-left p-2 rounded-md hover:bg-gray-100 transition-colors text-red-500"
                    >
                      {loading ? 'Signing out...' : 'Sign Out'}
                    </button>
                  </li>
                </ul>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Welcome Card */}
            <Card className="mb-8 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-serif text-2xl font-bold mb-2">
                    Welcome back, {user?.firstName || 'User'}!
                  </h1>
                  <p className="text-text/70">
                    Member since {user?.dateJoined ? new Date(user.dateJoined).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
                <Button href="/resources" variant="primary">
                  Browse Resources
                </Button>
              </div>
            </Card>

            {/* Recent Purchases */}
            <div className="mb-8">
              <h2 className="font-serif text-xl font-bold mb-4">Recent Purchases</h2>
              <Card>
                {purchasedResources.length > 0 ? (
                  <div className="divide-y">
                    {purchasedResources.map((resource) => (
                      <div key={resource.id} className="p-4 flex items-center">
                        <div className="h-16 w-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden relative mr-4">
                          <Image
                            src={resource.imageUrl}
                            alt={resource.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium mb-1">
                            <Link href={`/resources/${resource.id}`} className="hover:text-primary transition-colors">
                              {resource.title}
                            </Link>
                          </h3>
                          <p className="text-sm text-text/60">
                            Purchased on {resource.purchaseDate.toLocaleDateString()}
                          </p>
                        </div>
                        <Link 
                          href={`/resources/${resource.id}`} 
                          className="text-primary hover:text-primary/80 transition-colors ml-4"
                        >
                          Download
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    {/* <p className="text-text/70 mb-4">You haven't purchased any resources yet.</p> */}
                    <p className="text-text/70 mb-4">You haven&apos;t purchased any resources yet.</p>
                    <Button href="/resources" variant="primary">
                      Explore Resources
                    </Button>
                  </div>
                )}
              </Card>
              {purchasedResources.length > 0 && (
                <div className="mt-4 text-right">
                  <Link 
                    href="/account/purchases" 
                    className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                  >
                    View all purchases
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>

            {/* Account Overview */}
            <div>
              <h2 className="font-serif text-xl font-bold mb-4">Account Overview</h2>
              <Card className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Account Details</h3>
                    <p className="mb-1">
                      <span className="text-text/70">Name:</span> {user?.firstName || ''} {user?.lastName || ''}
                    </p>
                    <p>
                      <span className="text-text/70">Email:</span> {user?.email || ''}
                    </p>
                    <div className="mt-4">
                      <Link 
                        href="/account/settings" 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        Edit account details
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Subscription</h3>
                    <p className="mb-4">You are not currently subscribed to any plan.</p>
                    <Button href="/subscription" variant="outline">
                      View Subscription Options
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrap the component with the withAuth HOC to protect this route
export default withAuth(AccountDashboard);
