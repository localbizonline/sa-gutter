import { defaultConfig } from '../data/config';
import { defaultServices } from '../data/services';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header config={defaultConfig} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          config={defaultConfig}
          imageUrl="/images/hero-bg.jpg"
        />

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Services
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Professional services tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {defaultServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About {defaultConfig.businessName}
                </h2>
                <p className="text-gray-600 mb-4">
                  We are a professional service provider dedicated to delivering
                  high-quality solutions to our clients in {defaultConfig.contactInfo.city}
                  and surrounding areas.
                </p>
                <p className="text-gray-600">
                  With years of experience and a commitment to excellence, we
                  ensure that every project is completed to the highest standards.
                </p>
              </div>
              <div className="relative h-96">
                <img
                  src="/images/about.jpg"
                  alt="About us"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Contact Us
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                  Get in touch for a free consultation
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <ContactForm config={defaultConfig} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer config={defaultConfig} />
    </div>
  );
} 