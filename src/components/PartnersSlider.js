import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const PartnersSlider = () => {
  const logos = [
    'https://adxservices.xyz/wp-content/uploads/2025/01/20240709035310.cr11Ir.png',
    'https://adxservices.xyz/wp-content/uploads/2025/01/logo-opmoer.480x240.png',
    'https://adxservices.xyz/wp-content/uploads/2025/01/logo@2x.png',
    'https://adxservices.xyz/wp-content/uploads/2025/01/velder_kaas_logo.jpeg',
    'https://adxservices.xyz/wp-content/uploads/2025/01/De_Groeiling_logo_PNG_kleur-300x109-1.png',
    'https://adxservices.xyz/wp-content/uploads/2025/01/images-5.png',
    'https://adxservices.xyz/wp-content/uploads/2025/01/Unica.jpg.webp',
    'https://adxservices.xyz/wp-content/uploads/2025/01/images-4.png',
    'https://adxservices.xyz/wp-content/uploads/2025/01/kmn-kind-co-kinderopvang.png__1200x1200_subsampling-2.png',
    'https://adxservices.xyz/wp-content/uploads/2025/01/images-3.jpeg'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="partners-slider py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Onze Partners</h2>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-32">
                <img 
                  src={logo} 
                  alt={`Partner logo ${index + 1}`} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnersSlider;
