import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Inicio', href: '/home-landing' },
    { 
      name: 'Servicios', 
      href: '/service-portfolio',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Desarrollo Web', href: '/service-portfolio?category=web' },
        { name: 'Apps Móviles', href: '/service-portfolio?category=mobile' },
        { name: 'Automatización', href: '/service-portfolio?category=automation' },
        { name: 'Consultoría IA', href: '/ai-consultation' },
        { name: 'Ver Todos', href: '/service-portfolio' },
      ]
    },
    { name: 'Tecnología', href: '/technology-showcase' },
    { name: 'Cotización', href: '/quotation-wizard' },
    { name: 'Contacto', href: '/contact-hub' },
  ];

  const isActive = (href) => {
    if (href === '/home-landing' && location?.pathname === '/') return true;
    return location?.pathname === href;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/home-landing" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className={`font-bold text-xl ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              AI Solutions Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation?.map((item) => (
              <div key={item?.name} className="relative">
                {item?.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive(item?.href)
                          ? 'text-primary'
                          : isScrolled
                          ? 'text-gray-900 hover:text-primary' :'text-white hover:text-accent'
                      }`}
                    >
                      <span>{item?.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                        {item?.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem?.name}
                            to={dropdownItem?.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                          >
                            {dropdownItem?.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item?.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item?.href)
                        ? 'text-primary'
                        : isScrolled
                        ? 'text-gray-900 hover:text-primary' :'text-white hover:text-accent'
                    }`}
                  >
                    {item?.name}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              to="/ai-consultation"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Consultoría IA Gratuita
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="py-4 space-y-2">
              {navigation?.map((item) => (
                <div key={item?.name}>
                  <Link
                    to={item?.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 text-base font-medium transition-colors ${
                      isActive(item?.href)
                        ? 'text-primary bg-primary/10' :'text-gray-900 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {item?.name}
                  </Link>
                  {item?.hasDropdown && (
                    <div className="pl-6 space-y-1">
                      {item?.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem?.name}
                          to={dropdownItem?.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                        >
                          {dropdownItem?.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Link
                  to="/ai-consultation"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Consultoría IA Gratuita
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;