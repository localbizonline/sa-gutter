import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { services } from '../data/services';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const servicesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center" aria-label="Home">
              <img 
                src="/images/Logo SA Gutters Green.jpeg" 
                alt="SA Gutter Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/about"
              className="text-gray-900 hover:text-[#1F732C] px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/recent-projects"
              className="text-gray-900 hover:text-[#1F732C] px-3 py-2 rounded-md text-sm font-medium"
            >
              Recent Projects
            </Link>
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-900 hover:text-[#1F732C] px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      to="/services/seamless-gutters"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#1F732C]"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Seamless Gutters
                    </Link>
                    <Link
                      to="/services/specialized-gutters"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#1F732C]"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Specialized Gutters
                    </Link>
                    <Link
                      to="/services/fascia-and-barge-boards"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#1F732C]"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Fascia & Barge Boards
                    </Link>
                    <Link
                      to="/services/roof-painting"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#1F732C]"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Roof Painting
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <button
                onClick={() => window.location.href = '/quote'}
                className="bg-[#1F732C] hover:bg-opacity-90 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-[#1F732C] hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-[#1F732C] hover:bg-gray-100 border-b"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/recent-projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-[#1F732C] hover:bg-gray-100 border-b"
            onClick={() => setIsOpen(false)}
          >
            Recent Projects
          </Link>
          <div className="border-b">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-900 hover:text-[#1F732C] hover:bg-gray-100"
            >
              Services
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isServicesOpen && (
              <div className="pl-4 space-y-1">
                <Link
                  to="/services/seamless-gutters"
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#1F732C] hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Seamless Gutters
                </Link>
                <Link
                  to="/services/specialized-gutters"
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#1F732C] hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Specialized Gutters
                </Link>
                <Link
                  to="/services/fascia-and-barge-boards"
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#1F732C] hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Fascia & Barge Boards
                </Link>
                <Link
                  to="/services/roof-painting"
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#1F732C] hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Roof Painting
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}