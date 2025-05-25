"use client";

import React, { useState } from 'react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import axios from 'axios';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/contact', formData);
      if (res) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message. We will get back to you soon!'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      question: "What formats do your digital products come in?",
      answer: "Our products come in various formats including PDF ebooks, MP3 audio files, and MP4 video files."
    },
    {
      question: "Can I access my purchases on multiple devices?",
      answer: "Yes, you can download your purchases on any device by logging into your account."
    },
    {
      question: "Are the products one-time purchases or subscriptions?",
      answer: "All products are one-time purchases. We do not offer subscription models."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards and other payment methods through emerchantpay."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Due to the digital nature of our products, all sales are final and non-refundable."
    },
    {
      question: "How long do I have access to my purchases?",
      answer: "You have lifetime access to your purchases. You can download them anytime from your account."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, for any questions or issues, please contact us at support@apatheia.org.uk."
    }
  ];

  return (
    <div className="bg-secondary py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-3">Contact Us</Badge>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-text/70">
              {`Have questions about our products? We're here to help.`}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-serif text-2xl font-bold text-text mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Email:</h3>
                  <p className="text-text/80">support@apatheia.org.uk</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Address:</h3>
                  <p className="text-text/80">
                    Apatheia UK LTD<br />
                    3rd Floor, 45 Albemarle Street<br />
                    Mayfair, London, W1S 4JL
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Company Registration:</h3>
                  <p className="text-text/80">16424981</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-serif text-2xl font-bold text-text mb-6">
                Send us a message
              </h2>
              
              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" className="w-full disabled:bg-primary/50" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-3">FAQ</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    className="w-full px-8 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium text-text">{faq.question}</span>
                    <span className="ml-6 flex-shrink-0">
                      {openFaqIndex === index ? (
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-8 py-4 bg-gray-50">
                      <p className="text-text/80">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 