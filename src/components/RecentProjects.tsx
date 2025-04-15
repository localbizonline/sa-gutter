import React from 'react';
import SEOHead from './SEOHead';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import ImageModal from './ImageModal';

export default function RecentProjects() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const projects = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    image: `/images/Recent Projects/Completed projects 800x600 (${i + 1}).jpg`,
    alt: `Project ${i + 1}`
  }));

  return (
    <div className="pt-16">
      <SEOHead
        title="Recent Projects | SA Gutter"
        description="View our recently completed gutter installation and roofing projects across South Africa. Quality workmanship and professional results."
      />

      {/* Hero Section */}
      <div className="relative bg-[#1F732C] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Recent Projects
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
              A showcase of our recently completed gutter and roofing projects
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative h-72 bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
            </div>
          ))}
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
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ''}
        alt="Project detail"
      />
    </div>
  );
}