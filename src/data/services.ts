import { ServicePageData } from '../types';

export interface Service {
  id: string;
  name: string;
  description: string;
  priceRange?: string;
  features: string[];
  imageUrl?: string;
  category: string;
}

export const defaultServices: Service[] = [
  {
    id: "service-1",
    name: "Service 1",
    description: "Detailed description of service 1. Explain what it includes and how it benefits the customer.",
    priceRange: "$100 - $500",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4"
    ],
    category: "main"
  },
  {
    id: "service-2",
    name: "Service 2",
    description: "Detailed description of service 2. Explain what it includes and how it benefits the customer.",
    priceRange: "$200 - $600",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4"
    ],
    category: "main"
  },
  {
    id: "service-3",
    name: "Service 3",
    description: "Detailed description of service 3. Explain what it includes and how it benefits the customer.",
    priceRange: "$300 - $700",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4"
    ],
    category: "additional"
  }
];

export const services: ServicePageData[] = [
  {
    id: 'driveway-walkway-cleaning',
    title: 'Driveway & Walkway Cleaning',
    description: 'Professional pressure cleaning service that transforms your outdoor surfaces, removing stubborn stains, oil marks, and built-up grime while restoring their original appearance.',
    features: [
      'High-pressure deep cleaning',
      'Oil and grease stain removal',
      'Eco-friendly cleaning solutions',
      'Weed and moss elimination',
      'Concrete sealing available',
      'Same-day service available'
    ],
    benefits: [
      {
        title: 'Enhanced Safety',
        description: 'Remove slippery moss and algae that can cause accidents, making your pathways safer for family and visitors.'
      },
      {
        title: 'Improved Property Value',
        description: 'Clean driveways and walkways significantly boost your property\'s curb appeal and market value.'
      },
      {
        title: 'Prevent Surface Damage',
        description: 'Regular cleaning prevents permanent staining and deterioration of concrete and paving surfaces.'
      },
      {
        title: 'Extended Lifespan',
        description: 'Professional cleaning helps extend the life of your outdoor surfaces by preventing material breakdown.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Surface Assessment',
        description: 'Thorough inspection of your surfaces to identify stains, damage, and required cleaning intensity.'
      },
      {
        step: 2,
        title: 'Pre-treatment',
        description: 'Application of specialized cleaners to break down tough stains and organic growth.'
      },
      {
        step: 3,
        title: 'High-Pressure Cleaning',
        description: 'Systematic cleaning using professional-grade equipment to remove all dirt and stains.'
      },
      {
        step: 4,
        title: 'Spot Treatment',
        description: 'Extra attention to stubborn stains and heavily soiled areas.'
      },
      {
        step: 5,
        title: 'Optional Sealing',
        description: 'Application of protective sealant to prevent future staining and extend cleanliness.'
      }
    ],
    faqs: [
      {
        question: 'How long does driveway cleaning take?',
        answer: 'Most residential driveways take 2-3 hours to clean thoroughly. Larger areas or heavily stained surfaces may take longer.'
      },
      {
        question: 'Can you remove oil stains?',
        answer: 'Yes, we use specialized degreasers and high-pressure cleaning techniques to remove most oil and grease stains effectively.'
      },
      {
        question: 'Is the cleaning safe for all surfaces?',
        answer: 'We adjust our cleaning pressure and solutions based on your surface type, whether it\'s concrete, pavers, or natural stone.'
      },
      {
        question: 'How often should I have my driveway cleaned?',
        answer: 'We recommend professional cleaning every 12-18 months, though this may vary based on usage and environmental factors.'
      }
    ],
    priceRange: 'R800 - R2,500',
    image: 'https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?auto=format&fit=crop&q=80&w=2274'
  },
  {
    id: 'roof-cleaning',
    title: 'Roof Pressure Cleaning',
    description: 'Professional roof cleaning service that safely removes dirt, moss, algae, and black streaks while protecting your roof\'s integrity.',
    features: [
      'Safe low-pressure cleaning system',
      'Biodegradable cleaning solutions',
      'Protective coating application',
      'Gutter cleaning included',
      'Full roof inspection',
      'Same-day service available'
    ],
    benefits: [
      {
        title: 'Extend Roof Lifespan',
        description: 'Regular cleaning prevents damage from organic growth and preserves your roof\'s protective coating.'
      },
      {
        title: 'Improve Energy Efficiency',
        description: 'Clean roofs reflect more sunlight, helping to reduce cooling costs during summer months.'
      },
      {
        title: 'Prevent Water Damage',
        description: 'Remove moss and algae that can trap moisture and lead to expensive structural repairs.'
      },
      {
        title: 'Enhance Curb Appeal',
        description: 'Restore your roof\'s original appearance and boost your property\'s overall aesthetic.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Inspection',
        description: 'Thorough assessment of your roof\'s condition and cleaning requirements.'
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Protection of surrounding areas and vegetation from cleaning solutions.'
      },
      {
        step: 3,
        title: 'Pre-treatment',
        description: 'Application of specialized cleaning solution to break down dirt and organic matter.'
      },
      {
        step: 4,
        title: 'Soft Washing',
        description: 'Gentle but effective cleaning using our low-pressure system.'
      },
      {
        step: 5,
        title: 'Protective Treatment',
        description: 'Application of protective coating to prevent rapid recontamination.'
      }
    ],
    faqs: [
      {
        question: 'Is pressure washing safe for all roof types?',
        answer: 'We use a specialized soft-wash system that\'s safe for all roof materials, including tiles, slate, and asphalt shingles.'
      },
      {
        question: 'How long does roof cleaning take?',
        answer: 'Most residential roof cleaning jobs are completed in 3-4 hours, depending on roof size and condition.'
      },
      {
        question: 'How often should I have my roof cleaned?',
        answer: 'We recommend professional cleaning every 2-3 years, though this may vary based on your local environment and tree coverage.'
      },
      {
        question: 'Will cleaning damage my roof tiles?',
        answer: 'No, our low-pressure cleaning system and specialized solutions are designed to clean effectively without causing any damage.'
      }
    ],
    priceRange: 'R1,500 - R4,500',
    image: '/images/washing-plastic-carport-roof-2022-12-16-11-41-57-utc.jpg'
  },
  {
    id: 'house-exterior-cleaning',
    title: 'House Exterior Cleaning',
    description: 'Complete exterior cleaning solution for your home that removes dirt, mold, mildew, and algae, restoring your property\'s appearance and protecting its value.',
    features: [
      'Soft washing technology',
      'Safe for all surfaces',
      'Mold and mildew removal',
      'Window frame cleaning',
      'Gutter exterior cleaning',
      'Paint preparation service'
    ],
    benefits: [
      {
        title: 'Protect Your Investment',
        description: 'Regular cleaning prevents permanent staining and structural damage from mold and mildew growth.'
      },
      {
        title: 'Healthier Environment',
        description: 'Remove allergens and harmful organisms that can affect your family\'s health.'
      },
      {
        title: 'Increase Property Value',
        description: 'A clean exterior can increase your property value by up to 5% and improve curb appeal.'
      },
      {
        title: 'Prepare for Painting',
        description: 'Perfect preparation for exterior painting or maintenance work.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'Thorough inspection of your property to identify problem areas and cleaning requirements.'
      },
      {
        step: 2,
        title: 'Surface Protection',
        description: 'Careful covering of plants, windows, and sensitive areas.'
      },
      {
        step: 3,
        title: 'Pre-treatment',
        description: 'Application of specialized cleaning solutions to break down dirt and biological growth.'
      },
      {
        step: 4,
        title: 'Soft Washing',
        description: 'Gentle but effective cleaning using our specialized equipment.'
      },
      {
        step: 5,
        title: 'Final Inspection',
        description: 'Quality check and touch-ups to ensure complete satisfaction.'
      }
    ],
    faqs: [
      {
        question: 'Is the cleaning safe for my plants?',
        answer: 'Yes, we use eco-friendly cleaning solutions and protect all vegetation before cleaning.'
      },
      {
        question: 'How long does exterior cleaning take?',
        answer: 'Most residential properties take 4-6 hours, depending on size and condition.'
      },
      {
        question: 'How often should I clean my house exterior?',
        answer: 'We recommend professional cleaning every 18-24 months for optimal maintenance.'
      },
      {
        question: 'Will pressure washing damage my paint?',
        answer: 'We use soft washing techniques that are safe for all exterior surfaces, including painted walls.'
      }
    ],
    priceRange: 'R2,500 - R6,500',
    image: 'https://images.unsplash.com/photo-1604770404256-38168e2220da?auto=format&fit=crop&q=80&w=2071'
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial Property Cleaning',
    description: 'Professional pressure cleaning services for commercial properties, including building exteriors, parking lots, and common areas. Maintain your property\'s professional appearance and safety.',
    features: [
      'Building exterior cleaning',
      'Parking lot cleaning',
      'Graffiti removal',
      'Gum removal',
      'Oil stain treatment',
      'After-hours service'
    ],
    benefits: [
      {
        title: 'Professional Image',
        description: 'Maintain a clean, professional appearance that attracts and retains customers.'
      },
      {
        title: 'Safety Compliance',
        description: 'Meet health and safety regulations with regular professional cleaning.'
      },
      {
        title: 'Asset Protection',
        description: 'Prevent long-term damage and extend the life of your property\'s surfaces.'
      },
      {
        title: 'Cost-Effective',
        description: 'Regular maintenance prevents expensive repairs and replacements.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Site Survey',
        description: 'Comprehensive assessment of cleaning requirements and access points.'
      },
      {
        step: 2,
        title: 'Safety Setup',
        description: 'Implementation of safety measures and warning signs.'
      },
      {
        step: 3,
        title: 'Deep Cleaning',
        description: 'Systematic cleaning using commercial-grade equipment.'
      },
      {
        step: 4,
        title: 'Spot Treatment',
        description: 'Special attention to heavily soiled areas and stains.'
      },
      {
        step: 5,
        title: 'Quality Control',
        description: 'Final inspection and documentation of completed work.'
      }
    ],
    faqs: [
      {
        question: 'Can you work after business hours?',
        answer: 'Yes, we offer flexible scheduling including nights and weekends to minimize disruption.'
      },
      {
        question: 'Do you provide regular maintenance contracts?',
        answer: 'Yes, we offer customized maintenance plans with preferential rates for regular clients.'
      },
      {
        question: 'Are you insured?',
        answer: 'Yes, we carry comprehensive insurance coverage for commercial cleaning operations.'
      },
      {
        question: 'Can you handle large commercial properties?',
        answer: 'Yes, we have the equipment and team to handle properties of any size.'
      }
    ],
    priceRange: 'R5,000 - R25,000',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'industrial-cleaning',
    title: 'Industrial Pressure Cleaning',
    description: 'Heavy-duty industrial cleaning services for factories, warehouses, and manufacturing facilities. Specialized equipment and techniques for tough industrial cleaning challenges.',
    features: [
      'Heavy equipment cleaning',
      'Factory floor cleaning',
      'Oil & chemical removal',
      'High-pressure steam cleaning',
      'Industrial waste removal',
      '24/7 emergency service'
    ],
    benefits: [
      {
        title: 'Workplace Safety',
        description: 'Maintain a safe working environment by removing hazardous materials and contaminants.'
      },
      {
        title: 'Equipment Longevity',
        description: 'Protect your valuable machinery with regular professional cleaning.'
      },
      {
        title: 'Compliance',
        description: 'Meet industrial cleaning standards and regulatory requirements.'
      },
      {
        title: 'Efficiency',
        description: 'Clean equipment and surfaces operate more efficiently, reducing maintenance costs.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Safety Analysis',
        description: 'Comprehensive site safety assessment and planning.'
      },
      {
        step: 2,
        title: 'Area Preparation',
        description: 'Setup of containment systems and safety equipment.'
      },
      {
        step: 3,
        title: 'Heavy Cleaning',
        description: 'Industrial-grade cleaning with specialized equipment.'
      },
      {
        step: 4,
        title: 'Waste Management',
        description: 'Proper collection and disposal of industrial waste.'
      },
      {
        step: 5,
        title: 'Documentation',
        description: 'Detailed reporting of cleaning process and results.'
      }
    ],
    faqs: [
      {
        question: 'Can you handle hazardous materials?',
        answer: 'Yes, our team is certified to handle various hazardous materials and follows strict safety protocols.'
      },
      {
        question: 'What types of industrial equipment do you clean?',
        answer: 'We clean manufacturing equipment, processing machinery, industrial vehicles, and more.'
      },
      {
        question: 'Do you provide emergency cleaning services?',
        answer: 'Yes, we offer 24/7 emergency response for industrial cleaning needs.'
      },
      {
        question: 'Are your cleaning methods environmentally compliant?',
        answer: 'Yes, we use environmentally responsible cleaning methods and proper waste disposal practices.'
      }
    ],
    priceRange: 'Custom Quote',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42d2c63a69?auto=format&fit=crop&q=80&w=2070'
  }
  // Add more services here with similar structure
];