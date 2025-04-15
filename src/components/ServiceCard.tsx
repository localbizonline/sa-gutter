import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      {service.imageUrl && (
        <div className="mb-4">
          <img
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
      
      <p className="text-gray-600 mb-4">{service.description}</p>
      
      {service.priceRange && (
        <p className="text-primary font-medium mb-4">{service.priceRange}</p>
      )}
      
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-5 w-5 text-primary mr-2 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      <a
        href={`/services/${service.id}`}
        className="btn-primary w-full text-center"
      >
        Learn More
      </a>
    </div>
  );
} 