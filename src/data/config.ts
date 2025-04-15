export interface BusinessConfig {
  businessName: string;
  businessType: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  serviceAreas: string[];
  businessHours: {
    [key: string]: {
      open: string;
      close: string;
      closed: boolean;
    };
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    textColor: string;
    backgroundColor: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const defaultConfig: BusinessConfig = {
  businessName: "Your Business Name",
  businessType: "service",
  contactInfo: {
    phone: "(555) 123-4567",
    email: "contact@yourbusiness.com",
    address: "123 Business St",
    city: "Your City",
    state: "State",
    zipCode: "12345"
  },
  serviceAreas: ["City 1", "City 2", "City 3"],
  businessHours: {
    monday: { open: "8:00 AM", close: "5:00 PM", closed: false },
    tuesday: { open: "8:00 AM", close: "5:00 PM", closed: false },
    wednesday: { open: "8:00 AM", close: "5:00 PM", closed: false },
    thursday: { open: "8:00 AM", close: "5:00 PM", closed: false },
    friday: { open: "8:00 AM", close: "5:00 PM", closed: false },
    saturday: { open: "9:00 AM", close: "2:00 PM", closed: false },
    sunday: { closed: true, open: "", close: "" }
  },
  socialMedia: {
    facebook: "https://facebook.com/yourbusiness",
    instagram: "https://instagram.com/yourbusiness",
    twitter: "https://twitter.com/yourbusiness",
    linkedin: "https://linkedin.com/company/yourbusiness"
  },
  theme: {
    primaryColor: "#2563eb",
    secondaryColor: "#1e40af",
    accentColor: "#f59e0b",
    textColor: "#1f2937",
    backgroundColor: "#ffffff"
  },
  seo: {
    title: "Your Business Name - Professional Services in Your Area",
    description: "Professional services for your needs. Serving the local community with quality work and customer satisfaction.",
    keywords: ["service", "local", "professional", "business", "your city"]
  }
}; 