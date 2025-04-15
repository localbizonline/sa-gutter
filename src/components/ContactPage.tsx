import React, { useState } from 'react';
import SEOHead from './SEOHead';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { locations } from '../data/locations';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16">
      <SEOHead
        title="Contact Us | 24/7 Emergency Pressure Cleaning Services | Free Quotes | Professional Cleaning Experts"
        description="Get in touch with South Africa's leading pressure cleaning service. 24/7 emergency service available. Free quotes for residential, commercial, and industrial cleaning."
      />
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[300px]" style={{
        backgroundImage: "url('/images/Residential Pressure Cleaning 1920 x 800 (3).jpg')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Get in touch with our team for professional pressure cleaning services across South Africa
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-blue-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">24/7 Emergency Service:</span>
            <a href="tel:0800123456" className="underline hover:text-blue-100">
              0800 123 456
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get a Free Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <select
                    name="location"
                    id="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select a city</option>
                    {locations.map((location) => (
                      <option key={location.city} value={location.city}>
                        {location.city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service Required
                </label>
                <select
                  name="service"
                  id="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="industrial">Industrial Cleaning</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Please provide details about your cleaning needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="tel:0800123456"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Phone className="h-6 w-6 mr-3" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>0800 123 456</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@pressurecleaningpros.co.za"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Mail className="h-6 w-6 mr-3" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>info@pressurecleaningpros.co.za</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/27801234567"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <MessageCircle className="h-6 w-6 mr-3" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p>+27 80 123 4567</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {locations.map((location) => (
                    <div key={location.city} className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">{location.city}</p>
                        <p className="text-sm text-gray-600">
                          {location.emergencyPhone}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </p>
                  <p className="text-blue-600 font-semibold mt-4">
                    24/7 Emergency Service Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}