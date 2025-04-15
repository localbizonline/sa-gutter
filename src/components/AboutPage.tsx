import React from 'react';
import SEOHead from './SEOHead';
import { Star } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-16">
      <SEOHead
        title="About SA Gutter | Leading Seamless Gutter Manufacturer in South Africa"
        description="Learn about SA Gutter's journey since 2008, our commitment to quality, and our expertise in seamless guttering solutions across South Africa."
      />

      {/* Hero Section */}
      <div className="relative bg-[#1F732C] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              About SA Gutter
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
              Nearly two decades of excellence in seamless guttering solutions
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">MC De Beer</h3>
                <p className="text-lg text-gray-600">Founder & Managing Director</p>
                <p className="text-lg text-gray-600">083 232 3215</p>
              </div>
              <div className="text-center mt-[100px]">
                <h3 className="text-2xl font-bold text-gray-900">Danie Schoombee</h3>
                <p className="text-lg text-gray-600">Sales Representative</p>
                <p className="text-lg text-gray-600">064 901 4512</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 text-center">Our Story</h2>
                <p className="mt-4 text-lg text-gray-600">
                  At SA Gutter, we take pride in delivering top-quality seamless guttering and roofing solutions. Established in 2008 by MC De Beer, we have been serving Johannesburg, Pretoria, and surrounding areas for nearly two decades. Our expertise extends across residential and commercial gutter installations, fascia and barge board installations, roof painting, and specialized box gutters.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 text-center">Our Commitment</h2>
                <p className="mt-4 text-lg text-gray-600">
                  With a commitment to durability, aesthetics, and functionality, we use premium materials like Colorlume®, Aluzinc, Galvanized, and Stainless Steel to ensure long-lasting, maintenance-free solutions. Our seamless gutters are roll-formed on-site for a custom fit, with concealed brackets for a clean, modern look.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 text-center">Service Excellence</h2>
                <p className="mt-4 text-lg text-gray-600">
                  At SA Gutter, service excellence is non-negotiable. From supply and quality control to professional installation and after-sales support, we guarantee precision workmanship and reliability. We back our products with a 10-year limited warranty against corrosion, peeling, and flaking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Willie Botha Testimonial */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Just wanted to say thank you so much for the great service and excellent experience I had with your whole team – from the lady that gave us the quote, you with your help arranging the date for the installation and the guys you sent out to come and do the work. Everyone was so professional and I would just like to say thank you so much. Glad there are still companies in this world that provide a good service."
              </p>
              <div className="font-semibold text-gray-900">Willie Botha</div>
            </div>

            {/* Sean Olivier Testimonial */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Thank you for the prompt service. Your on site staff were very professional and did an awesome job. It is good to see that there are companies in South Africa that deliver a high standard of service. Thanks again."
              </p>
              <div className="font-semibold text-gray-900">Sean Olivier</div>
            </div>

            {/* Colin Broadbent Testimonial */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "I will be grateful if you would pass onto those responsible my sincere thanks for the extremely efficient manner in which the fitting of the gutters was carried out. We are all thrilled with the result and it has certainly added value to our property: they look fantastic. Again many thanks to all those involved. I wish your organization every success for the future."
              </p>
              <div className="font-semibold text-gray-900">Colin Broadbent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}