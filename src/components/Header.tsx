import { useState } from 'react';
import { BusinessConfig } from '../data/config';

interface HeaderProps {
  config: BusinessConfig;
}

export default function Header({ config }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Business Name */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">
                {config.businessName}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-primary">
              Home
            </a>
            <a href="/services" className="text-gray-600 hover:text-primary">
              Services
            </a>
            <a href="/about" className="text-gray-600 hover:text-primary">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href={`tel:${config.contactInfo.phone}`}
              className="btn-primary"
            >
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-600 hover:text-primary">
                Home
              </a>
              <a href="/services" className="text-gray-600 hover:text-primary">
                Services
              </a>
              <a href="/about" className="text-gray-600 hover:text-primary">
                About
              </a>
              <a href="/contact" className="text-gray-600 hover:text-primary">
                Contact
              </a>
              <a
                href={`tel:${config.contactInfo.phone}`}
                className="btn-primary text-center"
              >
                Call Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 