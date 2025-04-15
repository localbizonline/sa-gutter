export interface BusinessConfig {
  businessName: string;
  businessType: string;
  logo?: string;
  heroImage?: string;
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
  images: {
    galleries: {
      [key: string]: {
        name: string;
        description: string;
        images: Array<{
          url: string;
          alt: string;
          description?: string;
        }>;
      };
    };
    sections: {
      [key: string]: {
        name: string;
        description: string;
        images: Array<{
          url: string;
          alt: string;
          description?: string;
        }>;
      };
    };
  };
  contentChecklist: {
    homePage: {
      hero: {
        mainHeadline: string;
        subheadline: string;
        ctaButtonText: string;
        backgroundImage: string;
      };
      servicesOverview: {
        serviceCards: {
          title: string;
          description: string;
          icon: string;
        }[];
      };
      whyChooseUs: {
        benefits: {
          title: string;
          description: string;
          image: string;
        }[];
      };
      testimonials: {
        quote: string;
        customerName: string;
        location: string;
      }[];
      recentProjects: {
        image: string;
        description: string;
        beforeAfter: boolean;
      }[];
      ctaSection: {
        text: string;
        buttonText: string;
        backgroundImage: string;
      };
    };
    servicePages: {
      hero: {
        serviceName: string;
        description: string;
        heroImage: string;
      };
      details: {
        description: string;
        features: string[];
        processSteps: string[];
      };
      options: {
        tiers: {
          name: string;
          price: string;
          included: string[];
        }[];
      };
      gallery: {
        images: {
          url: string;
          description: string;
        }[];
      };
      faq: {
        questions: {
          question: string;
          answer: string;
        }[];
      };
    };
    aboutPage: {
      companyStory: {
        history: string;
        mission: string;
        values: string[];
      };
      team: {
        members: {
          name: string;
          role: string;
          bio: string;
          photo: string;
        }[];
      };
      certifications: {
        licenses: {
          name: string;
          number: string;
          image: string;
        }[];
      };
      whyChooseUs: {
        points: {
          title: string;
          description: string;
        }[];
      };
    };
    contactPage: {
      contactInfo: {
        phone: string;
        email: string;
        address: string;
      };
      businessHours: {
        hours: string;
        emergencyContact: string;
      };
      serviceAreas: string[];
      map: {
        location: string;
        serviceRadius: string;
      };
    };
    quotePage: {
      formFields: {
        customerInfo: string[];
        serviceSelection: string[];
        projectDetails: string[];
        timeline: string[];
      };
      serviceOptions: {
        services: {
          name: string;
          price: string;
          description: string;
        }[];
        addOns: {
          name: string;
          price: string;
          description: string;
        }[];
      };
      terms: {
        serviceTerms: string;
        paymentTerms: string;
        warranty: string;
      };
    };
    legalPages: {
      privacyPolicy: string;
      termsOfService: string;
      cookiePolicy: string;
      accessibilityStatement: string;
    };
    additionalContent: {
      sitemap: boolean;
      robotsTxt: boolean;
      error404: string;
      maintenancePage: string;
    };
  };
}

export const defaultConfig: BusinessConfig = {
  businessName: "Your Business Name",
  businessType: "service",
  logo: "",
  heroImage: "",
  contactInfo: {
    phone: "(555) 123-4567",
    email: "contact@yourbusiness.com",
    address: "123 Business St",
    city: "Your City",
    state: "State",
    zipCode: "12345"
  },
  serviceAreas: ["Area 1", "Area 2"],
  businessHours: {
    monday: { open: "9:00", close: "17:00", closed: false },
    tuesday: { open: "9:00", close: "17:00", closed: false },
    wednesday: { open: "9:00", close: "17:00", closed: false },
    thursday: { open: "9:00", close: "17:00", closed: false },
    friday: { open: "9:00", close: "17:00", closed: false },
    saturday: { open: "9:00", close: "17:00", closed: true },
    sunday: { open: "9:00", close: "17:00", closed: true }
  },
  socialMedia: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: ""
  },
  theme: {
    primaryColor: "#2563eb",
    secondaryColor: "#1e40af",
    accentColor: "#f59e0b",
    textColor: "#1f2937",
    backgroundColor: "#ffffff"
  },
  seo: {
    title: "Your Business Name - Professional Services",
    description: "Professional services in your area. Contact us for a free quote.",
    keywords: ["service", "professional", "local", "business"]
  },
  images: {
    galleries: {
      portfolio: {
        name: "Portfolio Gallery",
        description: "Showcase of completed projects",
        images: []
      },
      beforeAfter: {
        name: "Before & After Gallery",
        description: "Project transformations",
        images: []
      }
    },
    sections: {
      services: {
        name: "Services Section",
        description: "Images for services section",
        images: []
      },
      testimonials: {
        name: "Testimonials Section",
        description: "Customer photos and project images",
        images: []
      },
      team: {
        name: "Team Section",
        description: "Team member photos",
        images: []
      }
    }
  },
  contentChecklist: {
    homePage: {
      hero: {
        mainHeadline: "",
        subheadline: "",
        ctaButtonText: "",
        backgroundImage: ""
      },
      servicesOverview: {
        serviceCards: []
      },
      whyChooseUs: {
        benefits: []
      },
      testimonials: [],
      recentProjects: [],
      ctaSection: {
        text: "",
        buttonText: "",
        backgroundImage: ""
      }
    },
    servicePages: {
      hero: {
        serviceName: "",
        description: "",
        heroImage: ""
      },
      details: {
        description: "",
        features: [],
        processSteps: []
      },
      options: {
        tiers: []
      },
      gallery: {
        images: []
      },
      faq: {
        questions: []
      }
    },
    aboutPage: {
      companyStory: {
        history: "",
        mission: "",
        values: []
      },
      team: {
        members: []
      },
      certifications: {
        licenses: []
      },
      whyChooseUs: {
        points: []
      }
    },
    contactPage: {
      contactInfo: {
        phone: "",
        email: "",
        address: ""
      },
      businessHours: {
        hours: "",
        emergencyContact: ""
      },
      serviceAreas: [],
      map: {
        location: "",
        serviceRadius: ""
      }
    },
    quotePage: {
      formFields: {
        customerInfo: [],
        serviceSelection: [],
        projectDetails: [],
        timeline: []
      },
      serviceOptions: {
        services: [],
        addOns: []
      },
      terms: {
        serviceTerms: "",
        paymentTerms: "",
        warranty: ""
      }
    },
    legalPages: {
      privacyPolicy: "",
      termsOfService: "",
      cookiePolicy: "",
      accessibilityStatement: ""
    },
    additionalContent: {
      sitemap: false,
      robotsTxt: false,
      error404: "",
      maintenancePage: ""
    }
  }
}; 