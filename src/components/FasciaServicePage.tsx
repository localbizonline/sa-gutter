import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import { CheckCircle, ArrowRight, Phone, MessageCircle, Shield, PenTool as Tool, Clock, Ruler, Mail } from 'lucide-react';
import QuotePopup from './QuotePopup';

export default function FasciaServicePage() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="Fascia & Barge Boards Installation | Colorlume® & Nutec® | SA Gutter"
        description="Professional fascia & barge board installation using premium Colorlume® & Nutec® materials. Enhance your roofline with durable, weather-resistant solutions."
      />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[500px]" style={{
        backgroundImage: "url('/images/Fascia Boards (4).jpg')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className={`text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl ${isVisible ? 'animate' : ''}`}>
              Fascia and Barge Boards
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Protect and enhance your roofline with our premium Colorlume® and Nutec® fascia and barge boards.
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
              What Are Fascia and Barge Boards?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Fascia and barge boards are essential components of your roof structure, providing both protection and aesthetic appeal. They play a crucial role in supporting the roof, preventing moisture damage, and enhancing the overall look of your property.
            </p>
          </div>
        </div>
        
        {/* Overlapping Gallery */}
        <div className="relative -mb-48 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Facia Boards/Barge Board.jpg"
                alt="Professional fascia installation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Facia Boards/Barge Board 1.jpg"
                alt="Premium materials"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Facia Boards/Facia boards 550x400 (3).jpg"
                alt="Finished installation"
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
              Why Choose Our Fascia and Barge Boards?
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
                  <h3 className="text-xl font-semibold text-gray-900">Superior Protection</h3>
                  <p className="mt-2 text-gray-600">
                    Fascia boards provide a solid backing for gutters, preventing water damage to the roof structure and protecting your home from rot and decay.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1F732C] text-white">
                    <Tool className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Aesthetic Enhancement</h3>
                  <p className="mt-2 text-gray-600">
                    Barge boards create a polished and refined look for the edges of your roof, complementing your home's architectural style.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1F732C] text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Durability & Weather Resistance</h3>
                  <p className="mt-2 text-gray-600">
                    Made from Colorlume® and Nutec®, our fascia and barge boards resist harsh weather conditions, ensuring long-term performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Material Options Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Fascia and Barge Board Options
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Choices</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Colorlume® Fascia and Barge Boards</h4>
                  <p className="text-gray-600">
                    Pre-painted Aluminium-Zinc coated steel that offers superior protection and long-lasting appeal.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Nutec® Fascia and Barge Boards</h4>
                  <p className="text-gray-600">
                    Made from fiber cement, Nutec® boards are lightweight, fire-resistant, and extremely durable.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Installation Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-800 text-white text-sm mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Site Assessment & Consultation</h4>
                    <p className="text-gray-600">We evaluate your roof structure and recommend the best options.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-800 text-white text-sm mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Material Selection & Custom Cutting</h4>
                    <p className="text-gray-600">Precise measurements and cuts for a perfect fit.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-800 text-white text-sm mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Professional Installation</h4>
                    <p className="text-gray-600">Expert fitting using industry-best practices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-800 text-white text-sm mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Quality Inspection</h4>
                    <p className="text-gray-600">Thorough checks to ensure perfect installation.</p>
                  </div>
                </li>
              </ol>
            </div>
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
                question: "What is the purpose of fascia and barge boards?",
                answer: "Fascia boards support gutters and protect the roof from water damage, while barge boards provide a finished look and prevent weather-related wear on the edges of the roof."
              },
              {
                question: "How long do fascia and barge boards last?",
                answer: "When made from Colorlume® or Nutec®, these boards can last decades with minimal maintenance."
              },
              {
                question: "Are these boards available in different colors?",
                answer: "Yes! We offer a variety of pre-painted Colorlume® options to complement your home's exterior."
              },
              {
                question: "Can you replace old fascia and barge boards?",
                answer: "Absolutely! We provide removal and replacement services to upgrade your roofline with durable, high-quality materials."
              },
              {
                question: "Do I need maintenance for fascia and barge boards?",
                answer: "Minimal maintenance is required. Regular cleaning and occasional inspections ensure they stay in excellent condition."
              },
              {
                question: "What warranty do you offer?",
                answer: "We offer a 10-year limited product warranty on Colorlume® fascia and barge boards."
              },
              {
                question: "How can I get a free quote?",
                answer: "Simply contact us today via our website or call us to schedule your free, no-obligation estimate."
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

      <QuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
      />
    </div>
  );
}