import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const heroSlides = [
    {
      id: 1,
      bgImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Professionele Schoonmaakdiensten',
      subtitle: 'Voor bedrijven en instellingen',
      description: '20+ jaar ervaring in commerciële reiniging',
      ctaPrimary: 'Offerte aanvragen',
      ctaPrimaryLink: '/quote-request',
      ctaSecondary: 'Onze diensten',
      ctaSecondaryLink: '/services'
    },
    {
      id: 2,
      bgImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Specialistische Reiniging',
      subtitle: 'Voor moeilijke vlekken',
      description: 'Gratis test schoonmaak bij hardnekkige vlekken',
      ctaPrimary: 'Neem contact op',
      ctaPrimaryLink: '/contact',
      ctaSecondary: 'Bekijk specialismen',
      ctaSecondaryLink: '/services/specialized-cleaning'
    },
    {
      id: 3,
      bgImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Facilitaire Diensten',
      subtitle: 'Complete ondersteuning',
      description: 'Meer dan alleen schoonmaak - wij regelen het helemaal',
      ctaPrimary: 'Meer informatie',
      ctaPrimaryLink: '/services/facility-services',
      ctaSecondary: 'Onze werkwijze',
      ctaSecondaryLink: '/about-us'
    }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <Splide
        options={{
          type: 'fade',
          rewind: true,
          autoplay: true,
          interval: 6000,
          pauseOnHover: false,
          arrows: true,
          pagination: true,
          speed: 1200
        }}
        aria-label="Hero Slider"
      >
        {heroSlides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div 
              className="relative h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-700/60"></div>
              <div className="absolute inset-0 bg-black/30"></div>
              
              <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                <div className="max-w-3xl text-white">
                  <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-pulse">
                    Professionele schoonmaak sinds 2002
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-200">
                    {slide.subtitle}
                  </h2>
                  <p className="text-xl mb-10 max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                    <Link 
                      to={slide.ctaPrimaryLink}
                      className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-md font-medium transition-all transform hover:scale-105 shadow-lg text-center"
                    >
                      {slide.ctaPrimary}
                    </Link>
                    <Link 
                      to={slide.ctaSecondaryLink}
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-md font-medium transition-all transform hover:scale-105 text-center"
                    >
                      {slide.ctaSecondary}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom Pagination Styling */}
      <style jsx>{`
        .splide__pagination {
          bottom: 3rem;
        }
        .splide__pagination__page {
          background: rgba(255, 255, 255, 0.5);
          width: 12px;
          height: 12px;
          margin: 0 6px;
        }
        .splide__pagination__page.is-active {
          background: white;
          transform: scale(1.3);
        }
        .splide__arrow {
          background: rgba(255, 255, 255, 0.3);
          width: 3rem;
          height: 3rem;
        }
        .splide__arrow:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .splide__arrow svg {
          fill: white;
          width: 1.5rem;
          height: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;