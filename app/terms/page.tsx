import React from 'react';
import Badge from '../../components/ui/Badge';

export default function TermsPage() {
  return (
    <div className="bg-secondary py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-3">Legal</Badge>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          
          {/* Content */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <h2>1. Terms of Use</h2>
              <p>Welcome to Apatheia.org.uk. By accessing and using this website and its products, you accept and agree to be bound by the terms and conditions set forth in this agreement. If you do not agree to abide by these terms, please do not use this website or purchase our products.</p>
              
              <h3>1.1 Account Creation</h3>
              <p>To purchase products from our website, you must create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
              
              <h3>1.2 Eligibility</h3>
              <p>You must be at least 18 years old to use our services. By using our website and services, you represent and warrant that you are at least 18 years old and that you have the legal capacity to enter into a binding agreement.</p>
              
              <h2>2. Digital Product Policy</h2>
              <p>All products offered by Apatheia are digital downloads. After purchasing a product, you will have immediate access to download the digital files through your account dashboard.</p>
              
              <h3>2.1 Access to Purchased Products</h3>
              <p>After your purchase is complete, you will have access to download your purchased products for a period of 2 years. We recommend downloading and saving your purchased files promptly after purchase.</p>
              
              <h3>2.2 Technical Requirements</h3>
              <p>Our digital products are provided in common formats including PDF, MP3, MP4, and EPUB. You are responsible for having the necessary software and hardware to access and use these formats. We are not responsible for any issues related to compatibility with your devices or software.</p>
              
              <h2>3. Refund Policy</h2>
              <p>Due to the nature of digital products, all sales are final, and we do not offer refunds except under the following circumstances:</p>
              
              <h3>3.1 Technical Issues</h3>
              <p>If you experience technical issues that prevent you from accessing your purchased product, please contact our support team at support@apatheia.org.uk within 7 days of purchase. We will work to resolve the issue or provide a refund if the problem cannot be resolved.</p>
              
              <h3>3.2 Product Misrepresentation</h3>
              <p>If the product significantly differs from its description on our website, you may request a refund within 7 days of purchase by contacting support@apatheia.org.uk. Please include details about the discrepancy between the product description and the actual product.</p>
              
              <h2>4. Intellectual Property Rights</h2>
              <p>All content included on this website and in our digital products, such as text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Apatheia UK LTD or its content suppliers and is protected by international copyright laws.</p>
              
              <h3>4.1 License for Personal Use</h3>
              <p>When you purchase a digital product from our website, you are granted a non-exclusive, non-transferable license to use the product for your personal development. This license does not allow you to:</p>
              <ul>
                <li>Share, distribute, or sell the product to others</li>
                <li>Modify, adapt, or create derivative works based on the product</li>
                <li>Use the product for commercial purposes</li>
                <li>Remove any copyright or other proprietary notices from the product</li>
              </ul>
              
              <h3>4.2 Copyright Infringement</h3>
              <p>If you believe that any content on our website infringes upon your copyright, please send a notice of copyright infringement to support@apatheia.org.uk. Your notice must include:</p>
              <ul>
                <li>A description of the copyrighted work that you claim has been infringed</li>
                <li>The URL where the allegedly infringing material is located</li>
                <li>Your contact information</li>
                <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner</li>
                <li>A statement, made under penalty of perjury, that the information in your notice is accurate</li>
              </ul>
              
              <h2>5. Limitation of Liability</h2>
              <p>Apatheia UK LTD and its directors, officers, employees, and agents shall not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, the website or products purchased through the website.</p>
              
              <h2>6. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Your continued use of the website after changes to the terms constitutes your acceptance of the new terms. We will notify registered users of any material changes to these terms via email.</p>
              
              <h2>7. Contact Information</h2>
              <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
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