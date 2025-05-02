import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const HeroSliders = () => {
  const heroSlides = [
    {
      id: 1,
      bgImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Professionele Schoonmaakdiensten',
      subtitle: 'Voor bedrijven en instellingen',
      description: '20+ jaar ervaring in commerciële reiniging',
      ctaPrimary: 'Offerte aanvragen',
      ctaSecondary: 'Onze diensten'
    },
    {
      id: 2,
      bgImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Specialistische Reiniging',
      subtitle: 'Voor moeilijke vlekken',
      description: 'Gratis test schoonmaak bij hardnekkige vlekken',
      ctaPrimary: 'Neem contact op',
      ctaSecondary: 'Bekijk specialismen'
    },
    {
      id: 3,
      bgImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Facilitaire Diensten',
      subtitle: 'Complete ondersteuning',
      description: 'Meer dan alleen schoonmaak - wij regelen het helemaal',
      ctaPrimary: 'Meer informatie',
      ctaSecondary: 'Onze werkwijze'
    }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <Splide
        options={{
          type: 'fade',
          rewind: true,
          autoplay: true,
          interval: 5000,
          pauseOnHover: false,
          arrows: false,
          pagination: false,
          speed: 1000
        }}
        aria-label="Hero Slider"
      >
        {heroSlides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div 
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-700/80 to-blue-500/80"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            
            <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
              <div className="max-w-3xl text-white">
                <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-pulse">
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
                  <a 
                    href="#offerte" 
                    className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-md font-medium transition-all transform hover:scale-105 shadow-lg text-center"
                  >
                    {slide.ctaPrimary}
                  </a>
                  <a 
                    href="#diensten" 
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-md font-medium transition-all transform hover:scale-105 text-center"
                  >
                    {slide.ctaSecondary}
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Progress bar */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="h-1 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full" 
              style={{ 
                animation: 'progressBar 5s linear infinite',
                width: '100%',
                transformOrigin: 'left center'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Remove bottom white gradient */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-0"></div> */}

      {/* Progress animation style */}
      <style jsx>{`
        @keyframes progressBar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSliders;
