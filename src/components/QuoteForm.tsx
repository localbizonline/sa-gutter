import React, { useEffect } from 'react';
import SEOHead from './SEOHead';

export default function QuoteForm() {
  useEffect(() => {
    // Create the script
    const script = document.createElement('script');
    script.src = 'https://www.cognitoforms.com/f/seamless.js';
    script.async = true;

    // Set the data attributes required by Cognito
    script.setAttribute('data-key', 'FrFy5Bh46kqtQq1QAwz51Q');
    script.setAttribute('data-form', '204');

    // Append script to the placeholder container
    const container = document.getElementById('cognito-form-container');
    if (container) container.appendChild(script);

    return () => {
      if (container) container.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="Get a Quote | SA Gutter"
        description="Request a quote for our professional gutter installation and roofing services. Fast, free quotes for all your guttering needs."
      />
      
      {/* Hero Section */}
      <div className="relative bg-[#1F732C] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Get a Quote
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you with a detailed quote
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Cognito Form will be injected here */}
          <div id="cognito-form-container"></div>
        </div>
      </div>
    </div>
  );
}