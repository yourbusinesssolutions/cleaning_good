import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link, lightMode = false }) => {
  return lightMode ? (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-500">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="mb-6 text-gray-600 flex-grow">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors"
      >
        <span>Meer informatie</span>
        <ChevronRight size={18} />
      </Link>
    </div>
  ) : (
    <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20 h-full flex flex-col">
      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="mb-6 text-blue-100 flex-grow">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
      >
        <span>Meer informatie</span>
        <ChevronRight size={18} />
      </Link>
    </div>
  );
};

export default ServiceCard;