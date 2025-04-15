import React, { useState } from 'react';
import { CheckCircle, Calculator, Info, ArrowRight, Phone } from 'lucide-react';
import SEOHead from './SEOHead';
import QuotePopup from './QuotePopup';

interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: string[];
}

export default function PricingPage() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const residentialPricing: PricingTier[] = [
    {
      name: "Driveway Cleaning",
      description: "Removes stubborn dirt, oil stains, and tyre marks",
      price: "From R800",
      features: [
        "High-pressure cleaning",
        "Oil stain treatment",
        "Weed removal",
        "Suitable for concrete, brick, and paved",
        "Same-day service available"
      ]
    },
    {
      name: "Roof Cleaning",
      description: "Eliminates moss, algae, and dirt buildup",
      price: "From R1,500",
      features: [
        "Soft-wash technique",
        "Moss and algae removal",
        "Gutter cleaning included",
        "Extends roof lifespan",
        "Full inspection report"
      ]
    },
    {
      name: "House Exterior",
      description: "Removes mould, mildew, and grime from walls",
      price: "From R1,200",
      features: [
        "Safe for brick, plaster, and painted surfaces",
        "Patio/deck cleaning",
        "Walkways included",
        "Mold treatment",
        "Paint preparation"
      ]
    }
  ];

  const commercialPricing: PricingTier[] = [
    {
      name: "Small Business",
      description: "Shops, Offices, Restaurants",
      price: "From R2,500",
      features: [
        "Storefront cleaning",
        "Sidewalk cleaning",
        "Entranceways and signage",
        "After-hours service",
        "Helps attract more customers"
      ]
    },
    {
      name: "Medium Commercial",
      description: "Warehouses, Malls, Car Dealerships",
      price: "From R5,000",
      features: [
        "Building exterior",
        "Large parking areas",
        "Loading zones",
        "Multi-level properties",
        "Regular maintenance plans"
      ]
    },
    {
      name: "Large Commercial",
      description: "Factories, Industrial Parks, Shopping Centres",
      price: "Custom Quote",
      features: [
        "Heavy-duty pressure cleaning",
        "Multiple buildings",
        "Warehouse floors",
        "Custom scheduling",
        "Storage units and loading bays"
      ]
    }
  ];

  const additionalServices = [
    {
      service: "Solar Panel Cleaning",
      residential: "R500 - R1,000",
      commercial: "R1,500 - R3,000",
      note: "Price per array"
    },
    {
      service: "Gutter Cleaning",
      residential: "R400 - R800",
      commercial: "R800 - R2,000",
      note: "Price varies by length"
    },
    {
      service: "Patio/Deck Cleaning",
      residential: "R600 - R1,200",
      commercial: "R1,000 - R2,500",
      note: "Based on square meters"
    },
    {
      service: "Window Cleaning",
      residential: "R300 - R600",
      commercial: "R500 - R1,500",
      note: "Per floor"
    }
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Pressure Cleaning Prices | Cost Guide & Service Rates"
        description="Comprehensive pricing guide for pressure cleaning services. View our residential and commercial rates, and get instant quotes for your cleaning needs."
      />

      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-24" style={{
        backgroundImage: "url('/images/Residential Pressure Cleaning 1920 x 800 (1).jpg')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Pressure Cleaning Pricing
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Transparent pricing for all your pressure cleaning needs
            </p>
          </div>
        </div>
      </div>

      {/* Residential Pricing */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Residential Pressure Cleaning Prices
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional cleaning solutions for your home
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {residentialPricing.map((tier) => (
              <div key={tier.name} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="h-48 overflow-hidden">
                  {tier.name === "Driveway Cleaning" && (
                    <img
                      src="/images/Pressure-Washing-Cleaning-6.jpg"
                      alt="Driveway pressure cleaning"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {tier.name === "Roof Cleaning" && (
                    <img
                      src="/images/washing-plastic-carport-roof-2022-12-16-11-41-57-utc.jpg"
                      alt="Roof pressure cleaning"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {tier.name === "House Exterior" && (
                    <img
                      src="/images/Residential Pressure Cleaning 550x400 (7).jpg"
                      alt="House exterior cleaning"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                  <p className="mt-2 text-gray-600">{tier.description}</p>
                  <p className="mt-4 text-3xl font-extrabold text-blue-600">{tier.price}</p>
                  <ul className="mt-6 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setIsQuotePopupOpen(true)}
                    className="mt-8 w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commercial Pricing */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/Commercial Pressure Cleaning 1920 x 800 (6).jpg"
              alt="Commercial pressure cleaning service"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Commercial Pressure Cleaning Prices
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Scalable solutions for businesses of all sizes
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {commercialPricing.map((tier) => (
              <div key={tier.name} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="h-48 overflow-hidden">
                  {tier.name === "Small Business" && (
                    <img
                      src="/images/Commercial Pressure Cleaning 1200 x 800 (1).jpg"
                      alt="Small business pressure cleaning"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {tier.name === "Medium Commercial" && (
                    <img
                      src="/images/Commercial Pressure Cleaning 1200 x 800 (7).jpg"
                      alt="Medium commercial pressure cleaning"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {tier.name === "Large Commercial" && (
                    <img
                      src="/images/Commercial Pressure Cleaning 1920 x 800 (2).jpg"
                      alt="Large commercial pressure cleaning"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                  <p className="mt-2 text-gray-600">{tier.description}</p>
                  <p className="mt-4 text-3xl font-extrabold text-blue-600">{tier.price}</p>
                  <ul className="mt-6 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setIsQuotePopupOpen(true)}
                    className="mt-8 w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/Commercial Pressure Cleaning 1200 x 800 (5).jpg"
              alt="Specialized pressure cleaning services"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Additional Pressure Cleaning Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Specialized cleaning services and add-ons
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Residential
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Commercial
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {additionalServices.map((service) => (
                  <tr key={service.service}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {service.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {service.residential}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {service.commercial}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {service.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pricing Notes */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="h-6 w-6 text-blue-600 mr-2" />
              What's Included?
            </h3>
            <div className="space-y-8">
              <div>
                <p className="text-gray-600 mb-6">
                  When you choose our professional cleaning services, you receive a comprehensive package designed to deliver exceptional results. Our standard service includes:
                </p>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      Professional Equipment and Cleaning Solutions
                    </h5>
                    <p className="text-gray-600 pl-7">
                      We use industry-leading pressure washers, soft washing systems, eco-friendly detergents, and specialized treatments to ensure optimal cleaning results while protecting your property.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      Experienced and Trained Technicians
                    </h5>
                    <p className="text-gray-600 pl-7">
                      Our team consists of skilled professionals with extensive training in surface cleaning, stain removal, and safety protocols. We ensure that every technician follows best practices to provide high-quality service.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      Pre and Post-Service Inspection
                    </h5>
                    <p className="text-gray-600 pl-7">
                      Before starting, we assess the area to determine the best cleaning method and address any concerns. After completion, we conduct a final walkthrough to ensure your satisfaction and check for any areas requiring touch-ups.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      100% Satisfaction Guarantee
                    </h5>
                    <p className="text-gray-600 pl-7">
                      Customer satisfaction is our top priority. If you're not completely satisfied with our work, we'll readdress any concerns to make sure the job meets your expectations.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-xl text-gray-900 mb-4">Pricing Factors</h4>
                <p className="text-gray-600 mb-6">
                  Several variables affect the cost of our cleaning services. Below are the primary factors that influence pricing:
                </p>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🛑 Size of the Area</h5>
                    <ul className="text-gray-600 space-y-2 pl-4">
                      <li>Larger surfaces require more water, cleaning agents, and time to complete the job.</li>
                      <li>Pricing is typically based on square footage, with discounts available for larger projects.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🔍 Type of Surface</h5>
                    <ul className="text-gray-600 space-y-2 pl-4">
                      <li>Different materials require different cleaning techniques.</li>
                      <li>Delicate surfaces such as roofing, painted wood, or stucco may require low-pressure or soft washing to prevent damage.</li>
                      <li>Hard surfaces like concrete, brick, and stone can withstand higher pressure, which may speed up cleaning.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">💧 Level of Dirt & Stains</h5>
                    <ul className="text-gray-600 space-y-2 pl-4">
                      <li>Mild dirt buildup is easier and quicker to clean, while heavy grime, mold, algae, or grease stains require specialized treatments.</li>
                      <li>Oil stains, rust, and graffiti may need additional chemical applications, increasing the service cost.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🏗 Accessibility</h5>
                    <ul className="text-gray-600 space-y-2 pl-4">
                      <li>Hard-to-reach areas, such as multi-story buildings, high walls, or tight spaces, may require special equipment like scaffolding or extension wands.</li>
                      <li>Additional labor may be needed for these challenging locations.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🛠 Additional Services (Optional Enhancements)</h5>
                    <ul className="text-gray-600 space-y-2 pl-4">
                      <li>Surface Sealing: Protects driveways, patios, and decks from future staining and wear.</li>
                      <li>Post-Cleaning Treatments: Anti-mold and algae treatments extend cleanliness and prevent regrowth.</li>
                      <li>Gutter Cleaning: Removing debris and buildup ensures proper drainage and prevents water damage.</li>
                      <li>Rust, Graffiti, or Stain Removal: Specialized solutions available for tough stains and discoloration.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid-page CTA */}
            <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Property?
                </h3>
                <p className="text-blue-100 mb-8">
                  Our expert team is ready to provide you with a detailed quote tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setIsQuotePopupOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
                  >
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <a
                    href="tel:0800123456"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call for Immediate Service
                  </a>
                </div>
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