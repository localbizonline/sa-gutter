import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import { Phone, MessageCircle, Clock, Shield, MapPin, ArrowRight } from 'lucide-react';
import { locations } from '../data/locations';
import type { LocationData } from '../types';
import QuotePopup from './QuotePopup';

export default function LocationPage() {
  const { city } = useParams<{ city: string }>();
  const locationData = locations.find(
    (loc) => loc.city.toLowerCase() === city?.toLowerCase()
  ) as LocationData;
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!locationData) {
    return <div>Location not found</div>;
  }

  return (
    <div className="pt-16">
      <SEOHead
        title={`Professional Pressure Cleaning in ${locationData.city} | Residential & Commercial Services | 24/7 Emergency Cleaning`}
        description={`Expert pressure cleaning services in ${locationData.city}. Residential, commercial, and industrial cleaning with 24/7 emergency service. Serving ${locationData.coverageAreas.slice(0, 3).join(', ')} and surrounding areas.`}
      />
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-[400px] lg:h-96"
        style={{
          backgroundImage: "url('/images/Hero Home Page.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className={`text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl ${isVisible ? 'animate' : ''}`}>
            Professional Pressure Cleaning in {locationData.city}
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white max-w-3xl">
            Transforming properties across {locationData.city} with our premium
            pressure cleaning services. Available 24/7 for emergency cleaning.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${locationData.emergencyPhone}`}
              className="flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${locationData.whatsapp}`}
              className="flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive gutter and roofing solutions for your property
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/services/seamless-gutters" className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <img
                  src="/images/Seamless gutters 550x400 (13).jpg"
                  alt="Seamless Gutters"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1F732C]">
                    Seamless Gutters
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Custom manufactured seamless gutters for optimal drainage
                  </p>
                  <div className="mt-4 flex items-center text-[#1F732C]">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/services/specialized-gutters" className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <img
                  src="/images/Custom Gutters/Custom Gutters 550x400 (1).jpg"
                  alt="Specialized Gutters"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1F732C]">
                    Specialized Gutters
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Advanced drainage solutions for unique requirements
                  </p>
                  <div className="mt-4 flex items-center text-[#1F732C]">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/services/fascia-and-barge-boards" className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <img
                  src="/images/Barge and Facia Boards (4).jpg"
                  alt="Fascia & Barge Boards"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1F732C]">
                    Fascia & Barge Boards
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Premium Colorlume® and Nutec® installations
                  </p>
                  <div className="mt-4 flex items-center text-[#1F732C]">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/services/roof-painting" className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <img
                  src="/images/Roof Painting/Roof Painting 550x400 (1).jpg"
                  alt="Roof Painting"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1F732C]">
                    Roof Painting
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Professional roof painting and coating services
                  </p>
                  <div className="mt-4 flex items-center text-[#1F732C]">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Service Areas in {locationData.city}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide professional pressure cleaning services across these areas:
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {locationData.coverageAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Customer Testimonials
            </h2>
          </div>
          <div className="mt-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {locationData.testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.comment}</p>
                  <div className="mt-4 flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Transform Your Property?
            </h2>
            <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-blue-100">
              Contact us now for a free quote or emergency service
            </p>
          </div>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${locationData.emergencyPhone}`}
              className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              {locationData.emergencyPhone}
            </a>
            <button
              onClick={() => setIsQuotePopupOpen(true)}
              className="flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center">
                <Clock className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">24/7 Emergency Service</h3>
              <p className="mt-2 text-gray-600">
                Available around the clock for urgent cleaning needs
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Satisfaction Guarantee</h3>
              <p className="mt-2 text-gray-600">
                100% satisfaction guaranteed or we'll make it right
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <MapPin className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Local Experts</h3>
              <p className="mt-2 text-gray-600">
                Deep knowledge of {locationData.city}'s specific cleaning needs
              </p>
            </div>
          </div>
        </div>
      </div>
      <QuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
        defaultService={locationData.services[0].name}
      />
    </div>
  );
}