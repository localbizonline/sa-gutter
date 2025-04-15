import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import { CheckCircle, ArrowRight, Phone, MessageCircle, Shield, Droplet, Ruler, HeaterIcon as WaterIcon, Mail } from 'lucide-react';

export default function SpecializedGuttersPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="Box Gutters & Hopper Systems | Custom Drainage Solutions | SA Gutter"
        description="Expert installation of specialized box gutters & hopper systems. Custom manufactured for optimal rainwater management in residential & commercial properties."
      />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[500px]" style={{
        backgroundImage: "url('/images/Custom Gutters/Gutter Hopper 1920x800.jpg')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className={`text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl ${isVisible ? 'animate' : ''}`}>
              Specialized Gutters and Hopper Boxes
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Efficient drainage solutions for unique applications, designed to manage high water flow while enhancing aesthetic appeal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1F732C] hover:bg-opacity-90"
              >
                Get a Quote
              </Link>
              <a
                href="tel:0832323215"
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              High-Performance Gutter Systems for Unique Applications
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At SA Gutter, we provide specialized gutters and hopper boxes not only for efficient drainage but also for rainwater collection and management. Our systems allow homeowners and businesses to reuse rainwater for irrigation, cleaning, and other eco-friendly applications.
            </p>
          </div>
        </div>
        
        {/* Gallery */}
        <div className="relative -mb-48 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Custom Gutters/Custom Gutters 550x400 (1).jpg"
                alt="Specialized gutter installation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold"></h3>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Custom Gutters/Custom Gutters 550x400 (2).jpg"
                alt="Hopper box installation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold"></h3>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Custom Gutters/Custom Gutters 550x400 (3).jpg"
                alt="Box gutter system"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="pt-48 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our Specialized Gutters and Hopper Boxes?
            </h2>
          </div>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1F732C] text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Superior Drainage Performance</h3>
                  <p className="mt-2 text-gray-600">
                    Our specialized gutter systems and hopper boxes are designed to handle high water volume, preventing overflow and ensuring proper drainage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1F732C] text-white">
                    <Ruler className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Custom Solutions for Every Property</h3>
                  <p className="mt-2 text-gray-600">
                    We provide bespoke designs for homes, office buildings, warehouses, and other large-scale properties requiring specialized drainage solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1F732C] text-white">
                    <Droplet className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Rainwater Collection & Management</h3>
                  <p className="mt-2 text-gray-600">
                    Hopper boxes act as rainwater heads, effectively channeling water into downpipes while preventing clogging and overflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Process */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Installation Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We follow a structured approach to ensure an efficient and long-lasting installation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Consultation & Assessment",
                description: "We evaluate your property's drainage requirements and recommend the best solution."
              },
              {
                step: 2,
                title: "Custom Manufacturing",
                description: "Our team fabricates seamless gutters and hopper boxes on-site for a precise fit."
              },
              {
                step: 3,
                title: "Expert Installation",
                description: "Our skilled professionals secure the system using high-quality fasteners and concealed brackets."
              },
              {
                step: 4,
                title: "Final Inspection",
                description: "We ensure optimal drainage performance before completing the project."
              }
            ].map((step) => (
              <div key={step.step} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#1F732C] text-white text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                question: "How do hopper boxes help with rainwater collection?",
                answer: "Hopper boxes act as rainwater collection points, efficiently channeling and collecting rainwater from gutters into downpipes, allowing for rainwater harvesting while preventing overflow and clogging."
              },
              {
                question: "What materials are used for specialized gutters and hopper boxes?",
                answer: "We offer options in Colorlume®, Galvanized Steel, and Stainless Steel, ensuring strength, durability, and corrosion resistance."
              },
              {
                question: "Are specialized gutters and hopper boxes suitable for all buildings?",
                answer: "Yes! We provide solutions for residential, commercial, and industrial properties, ensuring customized drainage solutions."
              },
              {
                question: "Do hopper boxes help prevent water damage?",
                answer: "Yes! Hopper boxes prevent excessive water buildup, reducing pressure on downpipes and preventing roof and structural damage."
              },
              {
                question: "How long does installation take?",
                answer: "Most installations can be completed within a day, depending on the project's complexity."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="mb-4 bg-white rounded-lg [&_summary::-webkit-details-marker]:hidden group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
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

      {/* CTA Section */}
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