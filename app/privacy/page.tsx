/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Badge from '../../components/ui/Badge';

export default function PrivacyPage() {
  return (
    <div className="bg-secondary py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-3">Legal</Badge>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          
          {/* Content */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <h2>Introduction</h2>
              <p>Apatheia UK LTD ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website apatheia.org.uk, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").</p>
              
              <p>Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site. We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy.</p>
              
              <h2>1. Information We Collect</h2>
              
              <h3>1.1 Personal Data</h3>
              <p>We may collect personal information that you voluntarily provide to us when you register on the Site, express an interest in obtaining information about us or our products, when you participate in activities on the Site, or otherwise when you contact us. The personal information we collect may include:</p>
              <ul>
                <li>Name and contact information (such as email address, mailing address, phone number)</li>
                <li>Billing information (such as credit card number, billing address)</li>
                <li>Account credentials (such as username, password)</li>
                <li>Profile information (such as profile picture, biography, preferences)</li>
                <li>User-generated content (such as comments, feedback, product reviews)</li>
              </ul>
              
              <h3>1.2 Automatically Collected Information</h3>
              <p>When you access our Site, we may automatically collect certain information about your device, including:</p>
              <ul>
                <li>Device information (such as your IP address, browser type, operating system)</li>
                <li>Usage data (such as pages visited, time spent on pages, links clicked)</li>
                <li>Location data (approximate location based on IP address)</li>
              </ul>
              
              <h2>2. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing, maintaining, and improving our Site and services</li>
                <li>Processing transactions and sending related information (such as confirmations and receipts)</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Sending you technical notices, updates, security alerts, and administrative messages</li>
                <li>Sending you promotional communications, such as newsletters, special offers, or other marketing materials</li>
                <li>Monitoring and analyzing trends, usage, and activities in connection with our Site</li>
                <li>Detecting, preventing, and addressing technical issues, fraud, or other illegal activities</li>
                <li>Complying with legal obligations</li>
              </ul>
              
              <h2>3. Cookies and Similar Technologies</h2>
              <p>We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are small data files that are placed on your device when you visit a website.</p>
              
              <h3>3.1 Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential cookies:</strong> These cookies are necessary for the Site to function properly and cannot be switched off in our systems.</li>
                <li><strong>Functionality cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences.</li>
                <li><strong>Analytical cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Site.</li>
                <li><strong>Marketing cookies:</strong> These cookies are used to track visitors across websites and display ads that are relevant and engaging.</li>
              </ul>
              
              <h3>3.2 Your Cookie Choices</h3>
              <p>Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject cookies. Be aware that disabling cookies may affect the functionality of this and many other websites that you visit.</p>
              
              <h2>4. Third-Party Services</h2>
              <p>We may use third-party service providers to help us operate our business, administer the Site, or provide services on our behalf. These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
              
              <h3>4.1 Payment Processing</h3>
              <p>We use emerchantpay to process payments. When you make a purchase on our Site, your payment information is collected and processed by emerchantpay. We do not store your payment information on our servers. Please review emerchantpay's privacy policy for more information on their data practices.</p>
              
              <h3>4.2 Analytics</h3>
              <p>We use analytics providers, such as Google Analytics, to help us understand how users engage with the Site. These tools may use cookies, web beacons, and other technologies to collect information about your use of the Site. This information is used to improve our Site and services.</p>
              
              <h2>5. Data Retention and Security</h2>
              <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>
              
              <p>We implement appropriate technical and organizational measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
              
              <h2>6. International Data Transfers</h2>
              <p>Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.</p>
              
              <p>If you are located outside the United Kingdom and choose to provide information to us, please note that we transfer the data to the United Kingdom and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
              
              <h2>7. Your Data Protection Rights</h2>
              <p>Under the GDPR and other applicable data protection laws, you have certain rights regarding your personal information:</p>
              <ul>
                <li><strong>Right to access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>Right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                <li><strong>Right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>Right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li><strong>Right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                <li><strong>Right to data portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
              
              <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: support@apatheia.org.uk.</p>
              
              <h2>8. Children's Privacy</h2>
              <p>Our Site is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.</p>
              
              <h2>9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>
                Apatheia UK LTD<br />
                3rd Floor, 45 Albemarle Street<br />
                Mayfair, London, W1S 4JL<br />
                Email: support@apatheia.org.uk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 