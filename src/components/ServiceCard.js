import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link, lightMode = false }) => {
  return lightMode ? (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
      <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 text-blue-500">
        <Icon size={28} />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
      <p className="mb-4 text-gray-600 text-sm flex-grow">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors text-sm"
      >
        <span>Meer informatie</span>
        <ChevronRight size={16} />
      </Link>
    </div>
  ) : (
    <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20 h-full flex flex-col">
      <div className="w-14 h-14 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-4">
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="mb-4 text-white text-opacity-90 text-sm flex-grow">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition-colors text-sm"
      >
        <span>Meer informatie</span>
        <ChevronRight size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;