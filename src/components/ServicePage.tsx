import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import { CheckCircle, ArrowRight, Phone, MessageCircle, Shield, Wrench, Clock, Ruler, Mail } from 'lucide-react';
import QuotePopup from './QuotePopup';

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="Custom Seamless Gutters | On-Site Manufacturing | SA Gutter"
        description="Premium seamless gutters manufactured on-site for perfect fit. Available in Colorlume®, Galvanized & Stainless Steel. Expert installation & 10-year warranty."
      />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[500px]" style={{
        backgroundImage: "url('/images/Seamless Gutters 1920x1080.jpg')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className={`text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl ${isVisible ? 'animate' : ''}`}>
              Seamless Gutters & Downpipes
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Advanced Guttering Solutions – Durable, Leak-Resistant, and Built to Last.
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

      {/* Seamless Gutters Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              The Ultimate Guttering Solution
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Seamless gutters are the most advanced and efficient guttering system available today. Unlike traditional sectional gutters, seamless gutters are manufactured to fit your property perfectly, ensuring a custom, leak-free installation. With no seams or joints, they offer superior durability, minimal maintenance, and enhanced curb appeal.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At SA Gutter, we specialize in seamless gutters made from Colorlume®, Galvanized Steel, and Stainless Steel, ensuring strength, longevity, and corrosion resistance.
            </p>
          </div>
        </div>
        
        {/* Overlapping Gallery */}
        <div className="relative -mb-48 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Seamless gutters/Residential Gutter Small (1).jpeg"
                alt="Professional gutter installation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Seamless gutters/Residential Gutter Small (2).jpeg"
                alt="Seamless gutter technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Recent Projects/Completed projects 800x600 (8).jpg"
                alt="Quality materials"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="pt-48 pb-24 bg-gray-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Seamless Gutters?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the ultimate in gutter technology with our seamless solutions
            </p>
          </div>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Leak-Proof Design</h3>
                    <p className="mt-2 text-gray-600">
                      With no joints or seams (except at corners and downspouts), seamless gutters eliminate leaks and reduce water damage risks. Our precision manufacturing ensures perfect water channeling.
                    </p>
                  </div>
                </div>
            </div>
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                      <Wrench className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Custom Fit for Your Home</h3>
                    <p className="mt-2 text-gray-600">
                      Each gutter is manufactured on-site to match your home or business perfectly, ensuring optimal performance and aesthetics. Our advanced manufacturing process guarantees precise measurements and flawless installation.
                    </p>
                  </div>
                </div>
            </div>
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Durable & Long-Lasting</h3>
                    <p className="mt-2 text-gray-600">
                      Made from Colorlume®, Galvanized Steel, or Stainless Steel, our seamless gutters withstand harsh weather conditions. Built to last with superior materials and craftsmanship.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Residential Gutters Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Residential Gutters - Protecting Homes with Style and Functionality
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#1F732C] flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Designed for Homes</h3>
                    <p className="mt-1 text-gray-600">
                      Our residential gutter systems are designed to provide efficient water management, preventing leaks and water damage to your home's foundation and landscaping.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#1F732C] flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Aesthetic Appeal</h3>
                    <p className="mt-1 text-gray-600">
                      Available in a range of colors and materials, our residential gutters seamlessly blend with your home's design while offering superior protection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#1F732C] flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Durable & Low Maintenance</h3>
                    <p className="mt-1 text-gray-600">
                      Made from Colorlume®, Galvanized Steel, and Stainless Steel, our gutters are built to withstand harsh weather conditions with minimal upkeep.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#1F732C] flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Custom Fit & Seamless Installation</h3>
                    <p className="mt-1 text-gray-600">
                      We manufacture gutters on-site to ensure a perfect fit, eliminating seams that cause leaks and enhancing the longevity of your system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/Recent Projects/Completed projects 800x600 (4).jpg"
                alt="Residential gutter installation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Gutters Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src="/images/Recent Projects/Completed projects 800x600 (13).jpg"
                alt="Commercial gutter installation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Commercial Gutters - Heavy-Duty Solutions for Businesses
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#1F732C] mt-1">🏢</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Engineered for High Water Volume</h3>
                    <p className="mt-1 text-gray-600">
                      Our commercial-grade gutters are designed to handle large amounts of rainwater, protecting office buildings, warehouses, shopping centers, and industrial properties.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#1F732C] mt-1">🏢</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Enhanced Durability & Strength</h3>
                    <p className="mt-1 text-gray-600">
                      Built from Colorlume®, Galvanized Steel, and Stainless Steel, our gutters withstand extreme weather conditions and heavy usage, making them perfect for large-scale applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#1F732C] mt-1">🏢</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Custom Sizing & Installation</h3>
                    <p className="mt-1 text-gray-600">
                      We offer specialized sizes, including 5-inch, 6-inch, and 150x150 square seamless box gutters, ensuring your commercial property gets the right drainage capacity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#1F732C] mt-1">🏢</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Minimal Maintenance & Longevity</h3>
                    <p className="mt-1 text-gray-600">
                      With fewer joints and a seamless design, our commercial gutters reduce clogging, leaks, and frequent maintenance, saving you time and money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colorlume Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">What is Colorlume®?</h2>
              <p className="text-gray-600 mb-4">
                Colorlume® is a premium pre-painted Aluminium-Zinc coated steel designed for superior durability and aesthetics. It is specifically engineered to resist corrosion and withstand harsh weather conditions, making it an ideal choice for seamless gutters.
              </p>
              <h4 className="font-semibold mb-2">🔹 Five Protective Layers</h4>
              <p className="text-gray-600 mb-4">
                Colorlume® consists of five layers that enhance its strength and longevity:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Structural Steel Base – Provides high tensile strength and durability.</li>
                <li>• Zinc/Aluminium Alloy Coating – Ensures corrosion resistance and long-lasting performance.</li>
                <li>• Conversion Coating – Improves adhesion and enhances durability.</li>
                <li>• Corrosion-Inhibitive Primer – Offers additional protection against rust and environmental elements.</li>
                <li>• High-Performance Exterior Finish – A factory-applied coating that provides an attractive finish and UV resistance.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Available Colors</h2>
              <p className="text-gray-600 mb-6">
                Colorlume® gutters come in a wide range of 15 colors, allowing homeowners and businesses to choose the perfect shade to complement their property's aesthetics.
              </p>
              <img
                src="/images/Available colours .jpg"
                alt="Colorlume available color options"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gutter Options Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Seamless Gutter Options
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Ruler className="h-6 w-6 inline-block mr-2" />
                Gutter Profiles & Sizes
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 5-inch domestic (125mm x 85mm)</li>
                <li>• 6-inch industrial (150mm x 100mm)</li>
                <li>• 150x150 Square Seamless Box Gutters</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Wrench className="h-6 w-6 inline-block mr-2" />
                Material Choices
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Colorlume® Gutters – Pre-painted Aluminium-Zinc coated steel</li>
                <li>• Galvanized Steel Gutters – Tough and cost-effective</li>
                <li>• Stainless Steel Gutters – Highly durable and rust-resistant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                question: "How long does it take to install seamless gutters?",
                answer: "Most residential installations are completed within a single day, depending on the project size."
              },
              {
                question: "Are seamless gutters available in different colors?",
                answer: "Yes! Our Colorlume® gutters come in over 15 colors to match your home's style."
              },
              {
                question: "Do seamless gutters require maintenance?",
                answer: "Yes, but maintenance is minimal compared to traditional gutters. Regular cleaning and occasional inspections ensure they remain functional."
              },
              {
                question: "How do seamless gutters prevent leaks?",
                answer: "With no joints along the length of the gutter, seamless gutters eliminate weak points where leaks typically form."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="mb-4 bg-gray-50 rounded-lg [&_summary::-webkit-details-marker]:hidden group"
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

      <QuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
      />
    </div>
  );}