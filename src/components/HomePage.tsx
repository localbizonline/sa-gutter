import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import { 
  Ruler, 
  Shield, 
  Factory as Manufacturing, 
  Award, 
  CheckCircle, 
  Phone, 
  Mail,
  MapPin, 
  MessageCircle, 
  ArrowRight,
  Home,
  Building2,
  Factory
} from 'lucide-react';
import { services } from '../data/services';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="SA Gutter | Custom Seamless Gutters & Professional Installation"
        description="Expert seamless gutter manufacturing & installation in South Africa. Specializing in Colorlume®, residential & commercial guttering solutions. 10-year warranty."
      />
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-[600px] lg:h-screen"
        style={{
          backgroundImage: "url('/images/Seamless gutters/Rain gutter Main 1920x800 (1).jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className={`text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl ${isVisible ? 'animate' : ''}`}>
              South Africa's Leading
              <br />
              Seamless Gutter Manufacturer
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white max-w-3xl">
              Custom manufactured seamless gutters for residential and commercial properties.
              Professional installation and maintenance services across South Africa.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0832323215"
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1F732C] hover:bg-opacity-90 w-full sm:w-auto"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Solutions
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Link to="/services/seamless-gutters" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="/images/Seamless gutters/Residential Gutter Small (2).jpeg"
                  alt="Seamless Gutters & Downpipes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Seamless Gutters & Downpipes
                </h3>
                <p className="mt-2 text-gray-600">
                  Seamless gutters are the most advanced and efficient guttering system available today. Unlike traditional sectional gutters, seamless gutters are manufactured to fit your property perfectly, ensuring a custom, leak-free installation. With no seams or joints, they offer superior durability.
                </p>
              </div>
            </Link>

            <Link to="/services/specialized-gutters" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="/images/Custom Gutters/Custom Gutters 550x400 (2).jpg"
                  alt="Box Gutters & Hopper Boxes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Specialized Gutters and Hopper Boxes
                </h3>
                <p className="mt-2 text-gray-600">
                  At SA Gutter, we provide specialized gutters and hopper boxes not only for efficient drainage but also for rainwater collection and management. Our systems allow homeowners and businesses to reuse rainwater for irrigation, cleaning, and other eco-friendly applications.
                </p>
              </div>
            </Link>

            <Link to="/services/fascia-and-barge-boards" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="/images/Facia Boards/Facia boards 550x400 (3).jpg"
                  alt="Fascia & Barge Board Installations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Fascia & Barge Boards
                </h3>
                <p className="mt-2 text-gray-600">
                  Fascia and barge boards are essential components of your roof structure, providing both protection and aesthetic appeal. They play a crucial role in supporting the roof, preventing moisture damage, and enhancing the overall look of your property.
                </p>
              </div>
            </Link>

            <Link to="/services/roof-painting" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src="/images/Roof Painting/Roof Painting 550x400 (2).jpg"
                  alt="Roof Painting & Maintenance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Roof Painting and Spraying
                </h3>
                <p className="mt-2 text-gray-600">
                  At SA Gutter, we provide professional roof painting and spraying services designed to enhance the durability, appearance, and protection of your roof. Our expert team uses high-quality coatings to safeguard your roof against harsh weather conditions, prolonging its lifespan while improving your property's curb appeal.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose SA Gutter?
            </h2>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                'Over 20 years of industry experience',
                'High-quality materials – Colorlume®, Galvanized & Stainless Steel',
                'Seamless gutters manufactured on-site for a perfect fit',
                'Professional installation with no external brackets',
                'Servicing residential, commercial, and industrial properties',
                '10-Year limited product guarantee against corrosion, flake & peel',
                'Trusted by thousands of homeowners and contractors in South Africa'
              ].map((point, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-gray-800 flex-shrink-0" />
                  <span className="ml-3 text-gray-800">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Excellence Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Commitment to Service Excellence
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              At SA Gutter, we prioritize customer satisfaction and quality workmanship. Here's how we ensure excellence:
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-gray-800 mb-4">1️⃣</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Supply</h3>
              <p className="text-gray-600">Strong partnerships with trusted suppliers ensure consistent product quality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-gray-800 mb-4">2️⃣</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Control</h3>
              <p className="text-gray-600">Every installation is inspected and supervised for precision and durability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-gray-800 mb-4">3️⃣</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Installation</h3>
              <p className="text-gray-600">Our skilled teams handle projects of all sizes, from homes to large office parks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-gray-800 mb-4">4️⃣</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">After-Sales Service</h3>
              <p className="text-gray-600">We provide prompt solutions for any issues that arise post-installation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-gray-800 mb-4">5️⃣</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Guarantee</h3>
              <p className="text-gray-600">Our Colorlume® seamless gutters come with a 10-year limited warranty.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-gray-800 mb-4">6️⃣</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hassle-Free Payments</h3>
              <p className="text-gray-600">We accept all major credit cards for seamless transactions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>
          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'What are seamless gutters?',
                answer: 'Seamless gutters are custom-made on-site to fit your property perfectly. Unlike traditional gutters, they have no joints, reducing leaks and enhancing durability.'
              },
              {
                question: 'What materials do you use for gutters?',
                answer: 'We offer Colorlume®, Galvanized Steel, and Stainless Steel gutters, ensuring strength, corrosion resistance, and long-lasting performance.'
              },
              {
                question: 'Do seamless gutters require maintenance?',
                answer: 'Yes, but minimal maintenance is required. Regular cleaning and occasional inspections will keep them functioning optimally.'
              },
              {
                question: 'Can I get gutters in different colors?',
                answer: 'Yes! Our Colorlume® gutters are available in over 15 different colors to match your home\'s aesthetic.'
              },
              {
                question: 'How long does installation take?',
                answer: 'Most residential installations are completed within a day, depending on the project size.'
              },
              {
                question: 'Do you install gutters for commercial properties?',
                answer: 'Yes, we cater to both residential and commercial buildings, including office parks, industrial facilities, and housing developments.'
              },
              {
                question: 'What areas do you serve?',
                answer: 'SA Gutter serves the following areas: Johannesburg (Randburg, Sandton, Midrand), Joburg South / Alberton, East Rand (Boksburg, Kempton Park, Germiston, Benoni, Springs), Centurion, Rustenburg, Pretoria, West Rand (Roodepoort, Krugersdorp), and Witbank. These areas cover a broad range of residential and commercial properties, ensuring high-quality gutter installations and maintenance services.'
              },
              {
                question: 'What warranty do you offer?',
                answer: 'We provide a 10-year limited product warranty against corrosion, flake, and peel.'
              },
              {
                question: 'How do I get a quote?',
                answer: 'Contact us via our website or call us for a free, no-obligation quote.'
              },
              {
                question: 'Why should I choose seamless gutters over traditional gutters?',
                answer: 'Seamless gutters are more durable, leak-resistant, and visually appealing, making them the best long-term solution for your home or business.'
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50 rounded-lg [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-1.5 p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-500 transition group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div 
        id="contact" 
        className="relative bg-cover bg-center py-16"
        style={{
          backgroundImage: "url('/images/Seamless gutters/Rain Gutter Main 1920x600.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-xl text-white/80">
              Contact us now for a free quote
            </p>
          </div>
          <div className="mt-10 relative">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center">
                  <Phone className="h-8 w-8 text-gray-800" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Call Us</h3>
                    <p className="mt-1 text-gray-600">
                      Available for emergency service
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <a
                    href="tel:0832323215"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1F732C] hover:bg-[#1F732C]/90"
                  >
                    08 32 32 32 15
                  </a>
                  <a
                    href="tel:0649014512"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1F732C] hover:bg-[#1F732C]/90"
                  >
                    064 901 4512
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center">
                  <Mail className="h-8 w-8 text-gray-800" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Email Us</h3>
                    <p className="mt-1 text-gray-600">
                      Send us an email anytime
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:mc@sa-gutter.co.za"
                  className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1F732C] hover:bg-[#1F732C]/90"
                >
                  Send Email
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center">
                  <MessageCircle className="h-8 w-8 text-gray-800" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">WhatsApp</h3>
                    <p className="mt-1 text-gray-600">
                      Message us on WhatsApp
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/27832323215"
                  className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1F732C] hover:bg-[#1F732C]/90"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}