import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, breadcrumbs, bgImage, subtitle }) => {
  return (
    <div className="relative py-24 bg-blue-800">
      {/* Background image with overlay */}
      {bgImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
          <div className="absolute inset-0 bg-blue-900/80 z-0"></div>
        </>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="flex items-center justify-center flex-wrap mb-6 text-blue-200">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <ChevronRight size={16} className="mx-2" />
                  {crumb.link ? (
                    <Link to={crumb.link} className="hover:text-white transition-colors">
                      {crumb.text}
                    </Link>
                  ) : (
                    <span>{crumb.text}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
          
          {/* Optional subtitle */}
          {subtitle && (
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#f9fafb" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default PageHeader;