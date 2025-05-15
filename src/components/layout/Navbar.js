import { ChevronDown, Facebook, Mail, Menu, Phone, Star, Twitter, X, Youtube } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Service dropdown items
  const serviceItems = [
    { id: 'daily-cleaning', name: 'Dagelijkse schoonmaak' },
    { id: 'allround-service', name: 'Allround Service Plus' },
    { id: 'facility-services', name: 'Facilitaire diensten' },
    { id: 'school-cleaning', name: 'Schoonmaak op scholen' },
    { id: 'daycare-cleaning', name: 'Kinderdagverblijven' },
    { id: 'specialized-cleaning', name: 'Specialistische reiniging' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing pages
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:0172-645574" className="flex items-center hover:text-blue-200 transition-colors">
              <Phone size={16} className="mr-2" />
              <span>0172-645574</span>
            </a>
            <a href="mailto:info@allround-cleaning.nl" className="hidden md:flex items-center hover:text-blue-200 transition-colors">
              <Mail size={16} className="mr-2" />
              <span>info@allround-cleaning.nl</span>
            </a>
          </div>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-blue-200 transition-colors transform hover:scale-110">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors transform hover:scale-110">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors transform hover:scale-110">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* Logo */}
              <Link to="/">
                <img 
                  src="https://adxservices.xyz/wp-content/uploads/2019/10/image001.png" 
                  alt="Allround Cleaning Logo"
                  className="h-16 md:h-20 w-auto"
                />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-600 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <div className="relative group">
                <Link 
                  to="/services" 
                  className={`flex items-center font-medium ${location.pathname === '/services' || location.pathname.includes('/services/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Diensten
                  <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                </Link>
                {/* Invisible bridge to maintain hover state */}
                <div className="absolute left-0 top-full h-2 w-56"></div>
                <div className="absolute left-0 top-full w-56 bg-white shadow-xl rounded-lg py-3 transition-all duration-200 transform origin-top scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible group-hover:mt-2 z-50">
                  {serviceItems.map(service => (
                    <Link 
                      key={service.id} 
                      to={`/services/${service.id}`} 
                      className="block px-5 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/products" className={`font-medium ${location.pathname === '/products' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Assortiment
              </Link>
              <Link to="/about-us" className={`font-medium ${location.pathname === '/about-us' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Over Ons
              </Link>
              <Link to="/contact" className={`font-medium ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Contact
              </Link>
              <Link to="/work-with-us" className={`font-medium ${location.pathname === '/work-with-us' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Werken bij
              </Link>
              <Link 
                to="/quote-request" 
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-medium"
              >
                Offerte aanvraag
              </Link>
            </nav>
            
            <div className="hidden md:flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-md text-xs font-semibold tracking-wider shadow-sm">CERTIFIED</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="#FFC107" color="#FFC107" className="drop-shadow-sm" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-white">
              <nav className="flex flex-col space-y-3">
                <Link to="/services" className="text-gray-700 py-2 font-medium">Diensten</Link>
                <div className="pl-4 space-y-2">
                  {serviceItems.map(service => (
                    <Link 
                      key={service.id} 
                      to={`/services/${service.id}`} 
                      className="block py-1 text-gray-700"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link to="/products" className="text-gray-700 py-2 font-medium">Assortiment</Link>
                <Link to="/about-us" className="text-gray-700 py-2 font-medium">Over Ons</Link>
                <Link to="/contact" className="text-gray-700 py-2 font-medium">Contact</Link>
                <Link to="/work-with-us" className="text-gray-700 py-2 font-medium">Werken bij</Link>
                <Link to="/quote-request" className="bg-blue-600 text-white px-4 py-2 rounded-md text-center font-medium">Offerte aanvraag</Link>
                <div className="flex items-center gap-2 py-2">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">CERTIFIED</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="#FFC107" color="#FFC107" />
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;