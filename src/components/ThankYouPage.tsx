import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import SEOHead from './SEOHead';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <SEOHead
        title="Thank You | Quote Request Received | SA Gutter"
        description="Thank you for your quote request. We'll be in touch shortly to discuss your guttering needs."
      />
      
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Thank You!</h2>
            <p className="mt-2 text-sm text-gray-600">
              Your quote request has been received successfully.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              One of our team members will be in touch with you shortly to discuss your requirements.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-900">Need immediate assistance?</h3>
              <div className="mt-3 space-y-3">
                <a
                  href="tel:0832323215"
                  className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#1F732C] hover:bg-[#1F732C]/90"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us: 08 32 32 32 15
                </a>
                <a
                  href="https://wa.me/27832323215"
                  className="flex items-center justify-center px-4 py-2 border border-[#1F732C] text-sm font-medium rounded-md text-[#1F732C] hover:bg-[#1F732C]/5"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <Link
              to="/"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}