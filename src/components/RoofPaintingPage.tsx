import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import { CheckCircle, ArrowRight, Phone, MessageCircle, Shield, Brush, Sun, Droplet, Mail } from 'lucide-react';

export default function RoofPaintingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="Professional Roof Painting & Coating Services | SA Gutter"
        description="Transform & protect your roof with our expert painting & coating services. UV-resistant, waterproof solutions for lasting protection & enhanced curb appeal."
      />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[500px]" style={{
        backgroundImage: "url('/images/Roof Painting/Roof Painting 1920x800.jpg')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className={`text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl ${isVisible ? 'animate' : ''}`}>
              Roof Painting and Spraying
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Protect and beautify your roof with our professional painting and spraying services.
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
              Expert Roof Painting and Spraying Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At SA Gutter, we provide professional roof painting and spraying services designed to enhance the durability, appearance, and protection of your roof. Our expert team uses high-quality coatings to safeguard your roof against harsh weather conditions, prolonging its lifespan while improving your property's curb appeal.
            </p>
          </div>
        </div>
        
        {/* Gallery */}
        <div className="relative -mb-48 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Roof Painting/Roof Painting 550x400 (1).jpg"
                alt="Professional roof painting"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Roof Painting/Roof Painting 550x400 (2).jpg"
                alt="Roof coating application"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Roof Painting/Roof Painting 550x400 (3).jpg"
                alt="Finished roof painting"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="pt-48 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our Roof Painting Services?
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
                  <h3 className="text-xl font-semibold text-gray-900">Long-Lasting Protection</h3>
                  <p className="mt-2 text-gray-600">
                    Our advanced roof coatings protect against UV rays, rain, wind, and environmental pollutants, preventing damage and corrosion.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1F732C] text-white">
                    <Sun className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Reflective & Weather-Resistant</h3>
                  <p className="mt-2 text-gray-600">
                    Our specialized coatings provide superior waterproofing while incorporating reflective technology that lowers temperatures and improves insulation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1F732C] text-white">
                    <Brush className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Premium Quality Finishes</h3>
                  <p className="mt-2 text-gray-600">
                    We use premium roof paints and sealants that ensure long-lasting results and resistance to peeling, flaking, and fading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Residential Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Residential Roof Painting
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Transform and Protect Your Home",
                    description: "Our residential roof painting services help homeowners protect their investment while enhancing their property's overall aesthetic appeal."
                  },
                  {
                    title: "Improves Curb Appeal",
                    description: "A freshly painted roof instantly boosts the appearance of your home, increasing its value and visual charm."
                  },
                  {
                    title: "Energy-Efficient Reflective Coatings",
                    description: "We use reflective paints that reduce heat absorption, helping to keep your home cooler and lowering energy costs."
                  },
                  {
                    title: "Extends Roof Lifespan",
                    description: "Our professional painting services add years of protection to your roof, preventing damage from extreme weather conditions."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#1F732C] flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/Roof Painting/Residential Roof Painting 600x600.jpg"
                alt="Residential roof painting"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src="/images/Roof Painting/Commercial Roof Painting 600x600.jpg"
                alt="Commercial roof painting"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Commercial Roof Painting
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Protect Your Business",
                    description: "A well-maintained roof is crucial for businesses to avoid costly repairs and extend the life of their building."
                  },
                  {
                    title: "High-Performance Coatings",
                    description: "We provide specialized coatings for warehouses, office buildings, and industrial properties to protect against environmental wear and tear."
                  },
                  {
                    title: "Cost-Effective Alternative",
                    description: "Repainting a commercial roof is a more affordable option than replacing an entire roofing system, saving businesses significant costs."
                  },
                  {
                    title: "Durability and Weather Protection",
                    description: "Our industrial-grade coatings provide long-term resistance against leaks, corrosion, and extreme weather conditions."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#1F732C] flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Roof Painting Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Roof Inspection & Cleaning",
                description: "We assess the condition of your roof and remove dirt, moss, and debris to ensure proper adhesion."
              },
              {
                step: 2,
                title: "Surface Preparation",
                description: "Any necessary repairs or priming are done to improve the paint's longevity and effectiveness."
              },
              {
                step: 3,
                title: "Paint Application",
                description: "We apply multiple coats using advanced spraying techniques to achieve an even, smooth finish."
              },
              {
                step: 4,
                title: "Final Inspection",
                description: "Our team ensures a perfect finish with a final check-up before project completion."
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
                question: "How long does roof painting last?",
                answer: "With proper maintenance, our roof painting and spraying services can last 10+ years, depending on the environment."
              },
              {
                question: "What type of paint do you use?",
                answer: "We use high-quality, UV-resistant, and waterproof coatings for maximum durability and protection."
              },
              {
                question: "Can you paint all types of roofs?",
                answer: "Yes! We specialize in tile, metal, concrete, and Colorlume® roofs to ensure the best results for every surface."
              },
              {
                question: "How long does the process take?",
                answer: "Most residential projects take 1-2 days, while larger commercial properties may take longer depending on the roof size."
              },
              {
                question: "Will roof painting help prevent leaks?",
                answer: "Yes! Our waterproof coatings provide an extra layer of protection against moisture and leaks."
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