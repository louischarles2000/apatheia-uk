"use client";

import React, { useState } from 'react';
import Badge from '../../components/ui/Badge';

// FAQ Item component
const FAQItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 text-text transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`mt-2 text-text/80 ${isOpen ? 'block' : 'hidden'}`}>
        {answer}
      </div>
    </div>
  );
};

export default function FAQPage() {
  return (
    <div className="bg-secondary py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-3">Help Center</Badge>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>
          
          {/* FAQ Categories */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-10">
            <h2 className="font-serif text-2xl font-bold mb-6">Products & Purchasing</h2>
            <div className="space-y-2">
              <FAQItem
                question="What types of products do you offer?"
                answer={
                  <p>
                    We offer a variety of digital personal development resources including audio books, 
                    video courses, ebooks, and printable worksheets. All our products focus on practical 
                    tools for personal growth, habit building, leadership, and productivity.
                  </p>
                }
              />
              <FAQItem
                question="How do I purchase a product?"
                answer={
                  <p>
                    Simply browse our product catalog, select the item you're interested in, and click 
                    "Add to Cart." When you're ready to complete your purchase, proceed to checkout, 
                    enter your payment details, and confirm your order. After successful payment, you'll 
                    receive immediate access to your purchased items.
                  </p>
                }
              />
              <FAQItem
                question="What payment methods do you accept?"
                answer={
                  <p>
                    We accept all major credit and debit cards (Visa, Mastercard, American Express), 
                    as well as PayPal. All payments are processed securely through emerchantpay, 
                    our trusted payment processor.
                  </p>
                }
              />
              <FAQItem
                question="Are there any discounts available?"
                answer={
                  <p>
                    We occasionally offer seasonal discounts and special promotions. 
                    The best way to stay informed about these offers is to subscribe to our 
                    newsletter. Additionally, we sometimes offer bundle discounts when purchasing 
                    multiple related products together.
                  </p>
                }
              />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-10">
            <h2 className="font-serif text-2xl font-bold mb-6">Digital Downloads & Access</h2>
            <div className="space-y-2">
              <FAQItem
                question="How do I access my purchased products?"
                answer={
                  <p>
                    After purchase, you can access your products in two ways:
                    <br /><br />
                    1. From your Account Dashboard under "My Purchases"
                    <br />
                    2. Via the download links sent to your email
                    <br /><br />
                    We recommend downloading and saving your files to your device for offline access.
                  </p>
                }
              />
              <FAQItem
                question="How long will I have access to my purchases?"
                answer={
                  <p>
                    Your purchased products remain available in your account for download for 2 years 
                    from the date of purchase. However, we recommend downloading and saving copies of 
                    your files shortly after purchase to ensure you always have access to them.
                  </p>
                }
              />
              <FAQItem
                question="What file formats are your products in?"
                answer={
                  <p>
                    Our products come in the following formats:
                    <br /><br />
                    • eBooks: PDF format
                    <br />
                    • Audio products: MP3 format
                    <br />
                    • Video courses: MP4 format
                    <br />
                    • Worksheets/Checklists: PDF format
                  </p>
                }
              />
              <FAQItem
                question="Can I use your products on multiple devices?"
                answer={
                  <p>
                    Yes, you can download and use your purchased products on multiple personal devices. 
                    However, sharing files with others or redistributing them is prohibited as per our 
                    Terms & Conditions.
                  </p>
                }
              />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-10">
            <h2 className="font-serif text-2xl font-bold mb-6">Returns & Refunds</h2>
            <div className="space-y-2">
              <FAQItem
                question="What is your refund policy?"
                answer={
                  <p>
                    Due to the digital nature of our products, all sales are generally final. However, 
                    we do offer refunds in specific circumstances:
                    <br /><br />
                    • If you experience technical issues that prevent access to your purchase
                    <br />
                    • If the product significantly differs from its description
                    <br /><br />
                    In either case, please contact us within 7 days of purchase.
                  </p>
                }
              />
              <FAQItem
                question="How do I request a refund?"
                answer={
                  <p>
                    To request a refund, please email support@apatheia.org.uk within 7 days of your purchase. 
                    Include your order number, the product name, and a detailed explanation of why you're 
                    requesting a refund. Our team will review your request and respond within 48 hours.
                  </p>
                }
              />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="font-serif text-2xl font-bold mb-6">Account Management</h2>
            <div className="space-y-2">
              <FAQItem
                question="How do I create an account?"
                answer={
                  <p>
                    You can create an account by clicking on the "Account" icon in the top navigation 
                    menu and selecting "Register." Alternatively, you'll be prompted to create an account 
                    during the checkout process if you don't already have one.
                  </p>
                }
              />
              <FAQItem
                question="I forgot my password. How do I reset it?"
                answer={
                  <p>
                    To reset your password, click on the "Account" icon, select "Login," and then click 
                    on the "Forgot Password" link. Enter your email address, and we'll send you 
                    instructions to reset your password.
                  </p>
                }
              />
              <FAQItem
                question="How do I update my account information?"
                answer={
                  <p>
                    To update your account information, log in to your account, click on the "Account" 
                    icon, and select "Profile." From there, you can update your name, email, password, 
                    and other account details.
                  </p>
                }
              />
              <FAQItem
                question="How do I delete my account?"
                answer={
                  <p>
                    If you wish to delete your account, please email support@apatheia.org.uk with the 
                    subject line "Account Deletion Request." Please note that deleting your account 
                    will remove access to any purchased products, so we recommend downloading all your 
                    files before requesting account deletion.
                  </p>
                }
              />
            </div>
          </div>
          
          {/* Still Have Questions Section */}
          <div className="mt-12 text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6 text-lg">
              If you couldn't find the answer you were looking for, please get in touch with our support team.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary text-white py-3 px-8 rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 