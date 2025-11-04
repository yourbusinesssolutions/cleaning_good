import { Facebook, Mail, MessageCircle, Phone, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const serviceItems = [
    { id: 'daily-cleaning', name: 'Dagelijkse schoonmaak' },
    { id: 'allround-service', name: 'Allround Service Plus' },
    { id: 'facility-services', name: 'Facilitaire diensten' },
    { id: 'school-cleaning', name: 'Schoonmaak op scholen' },
    { id: 'daycare-cleaning', name: 'Kinderdagverblijven' },
    { id: 'specialized-cleaning', name: 'Specialistische reiniging' }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-800 to-blue-900 text-white pt-12 pb-6 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="text-2xl font-bold text-white mb-4">Allround <span className="text-blue-300">Cleaning Service</span></div>
            <p className="text-blue-200 text-sm mb-6">
              Professionele schoonmaakdiensten sinds 2002. Met toewijding en vakmanschap zorgen wij voor een schone en hygiënische omgeving.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Diensten
            </h3>
            <ul className="space-y-2">
              {serviceItems.map(service => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Navigatie
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Diensten
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Assortiment
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/work-with-us" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Werken bij ons
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Contact
            </h3>
            <div className="space-y-4">
              <div>
                <a href="mailto:info@allround-cleaning.nl" className="text-blue-200 hover:text-white transition-colors flex items-center text-sm">
                  <Mail size={16} className="mr-2" />
                  info@allround-cleaning.nl
                </a>
              </div>
              <div>
                <a href="tel:0172-645574" className="text-blue-200 hover:text-white transition-colors flex items-center text-sm">
                  <Phone size={16} className="mr-2" />
                  0172-645574
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/quote-request"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition-colors inline-block text-sm font-medium"
                >
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 mb-2 md:mb-0 text-sm">
            &copy; {new Date().getFullYear()} Allround Cleaning Service. All Rights Reserved.
          </p>
          <p className="text-blue-300 text-sm">
            Powered By <span className="font-semibold">Royal Lease Websites</span>
          </p>
        </div>
      </div>
      <a 
        href="https://wa.me/31172645574" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} className="text-white" />
      </a>
    </footer>
  );
};

export default Footer;
