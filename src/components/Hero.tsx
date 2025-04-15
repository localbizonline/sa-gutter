import { BusinessConfig } from '../data/config';

interface HeroProps {
  config: BusinessConfig;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  showContactButton?: boolean;
}

export default function Hero({
  config,
  title,
  subtitle,
  imageUrl,
  showContactButton = true
}: HeroProps) {
  return (
    <div className="relative bg-gray-900">
      {/* Background Image */}
      {imageUrl && (
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
        </div>
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title || `Professional ${config.businessType} Services in ${config.contactInfo.city}`}
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          {subtitle || config.seo.description}
        </p>
        
        {showContactButton && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${config.contactInfo.phone}`}
              className="btn-primary text-center"
            >
              Call Us Now
            </a>
            <a
              href="#contact"
              className="btn-secondary text-center"
            >
              Get a Free Quote
            </a>
          </div>
        )}
      </div>
    </div>
  );
} 