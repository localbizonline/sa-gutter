export interface LocationData {
  city: string;
  coverageAreas: string[];
  services: Service[];
  testimonials: Testimonial[];
  emergencyPhone: string;
  whatsapp: string;
}

export interface Service {
  name: string;
  description: string;
  priceRange: string;
}

export interface Testimonial {
  name: string;
  location: string;
  comment: string;
  rating: number;
  service: string;
}

export interface ServicePageData {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  priceRange: string;
  image: string;
}