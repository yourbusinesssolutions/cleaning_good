import { Facebook, Mail, Phone, Twitter, Youtube } from 'lucide-react';
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
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-20 pb-10 relative">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gray-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="text-3xl font-bold text-white mb-6">Allround <span className="text-blue-300">Cleaning Service</span></div>
            <p className="text-blue-200 mb-8">
              Professionele schoonmaakdiensten sinds 2002. Met toewijding en vakmanschap zorgen wij voor een schone en hygiënische omgeving voor uw bedrijf of instelling.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-6 h-1 bg-blue-400 inline-block mr-3"></span>
              Diensten
            </h3>
            <ul className="space-y-3">
              {serviceItems.map(service => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`} 
                    className="text-blue-200 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-6 h-1 bg-blue-400 inline-block mr-3"></span>
              Navigatie
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Diensten
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Assortiment
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Over Ons
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Contact
                </Link>
              </li>
              <li>
                <Link to="/work-with-us" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Werken bij
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-6 h-1 bg-blue-400 inline-block mr-3"></span>
              Contact
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-white font-semibold mb-2">Email Support</p>
                <a href="mailto:info@allround-cleaning.nl" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <Mail size={18} className="mr-3" />
                  info@allround-cleaning.nl
                </a>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">Klanten Support</p>
                <a href="tel:0172-645574" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <Phone size={18} className="mr-3" />
                  0172-645574
                </a>
              </div>
              <div className="pt-4">
                <Link 
                  to="/quote-request" 
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 inline-block font-medium"
                >
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Allround Cleaning Service. All Rights Reserved.
          </p>
          <p className="text-blue-300">
            Powered By <span className="font-bold">Royal Lease Websites</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
