import { Award, CheckCircle, Clock, Shield, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountItem from '../components/CountItem';
import FeatureCard from '../components/FeatureCard';
import HeroSlider from '../components/HeroSlider';
import PartnersSlider from '../components/PartnersSlider';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      id: 'daily-cleaning',
      icon: CheckCircle,
      title: 'Dagelijkse schoonmaak',
      description: 'Professionele dagelijkse schoonmaak voor kantoren, bedrijfspanden en andere commerciële ruimtes. Consequent en betrouwbaar.'
    },
    {
      id: 'allround-service',
      icon: Award,
      title: 'Allround Service Plus',
      description: 'Uitgebreide schoonmaakservice inclusief specialistische reiniging, onderhoud en periodieke grondige schoonmaak op maat.'
    },
    {
      id: 'facility-services',
      icon: Shield,
      title: 'Facilitaire diensten',
      description: 'Complete facilitaire ondersteuning voor uw bedrijf, van schoonmaak tot onderhoud en alles daar tussenin.'
    },
    {
      id: 'school-cleaning',
      icon: Sparkles,
      title: 'Schoonmaak op scholen',
      description: 'Specialistische schoonmaakdiensten voor onderwijsinstellingen met extra aandacht voor hygiëne en veiligheid.'
    },
    {
      id: 'daycare-cleaning',
      icon: Shield,
      title: 'Schoonmaak kinderdagverblijven',
      description: 'Grondige en veilige schoonmaak voor kinderdagverblijven met kindervrienelijke, niet-schadelijke reinigingsproducten.'
    },
    {
      id: 'specialized-cleaning',
      icon: Sparkles,
      title: 'Specialistische reiniging',
      description: 'Allround Cleaning Service is gespecialiseerd in diverse vormen van specialistische reiniging. Wij bieden grondige vloerreiniging, inclusief diepe verwijdering van waslagen om vloeren volledig te herstellen. Voor bouwopleveringen zorgen wij voor een perfecte afwerking - verwijdering van bouwstof, cementresten en reiniging van ramen, kozijnen en sanitaire voorzieningen. Wij bieden ook industriële reinigingsoplossingen voor fabrieken, werkplaatsen en productieruimtes, met prioriteit voor veiligheid, hygiëne en minimale overlast. Elk project wordt uitgevoerd met professionele gereedschappen, expertise en aandacht voor detail.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Services Section - MOVED UP */}
      <section id="diensten" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 skew-y-3 transform origin-top-right"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              PROFESSIONELE DIENSTEN
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">Onze Diensten</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Wij bieden een compleet pakket aan schoonmaakdiensten, altijd afgestemd op uw wensen en behoeften.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard 
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={`/services/${service.id}`}
                lightMode={false}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-md font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              <span className="mr-2">Bekijk alle diensten</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Benefits Section - MOVED DOWN */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Waarom kiezen voor <span className="text-blue-600">Allround Cleaning Service</span>?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Wij bieden professionele schoonmaakdiensten van de hoogste kwaliteit, altijd aangepast aan uw specifieke wensen en eisen.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={Star} 
              title="Tevreden klanten" 
              description="Vele tevreden klanten zijn u al voorgegaan, en wij streven ernaar om ook voor u een uitstekende service te bieden met 100% klanttevredenheid."
              accentColor="blue"
            />
            <FeatureCard 
              icon={Clock} 
              title="Offerte binnen 5 dagen" 
              description="Bent u benieuwd hoe wij u van dienst kunnen zijn? Vraag bij ons, geheel vrijblijvend, een offerte aan en ontvang deze binnen 5 werkdagen."
              accentColor="indigo"
            />
            <FeatureCard 
              icon={Sparkles} 
              title="Specialistische reiniging" 
              description="Wij zijn gespecialiseerd in diverse vormen van specialistische reiniging. Wij bieden grondige vloerreiniging, inclusief diepe verwijdering van waslagen. Voor bouwopleveringen zorgen wij voor een perfecte afwerking - verwijdering van bouwstof, cementresten en reiniging van ramen, kozijnen en sanitaire voorzieningen."
              accentColor="green"
            />
          </div>
          
          <div className="flex justify-center mt-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
              <CountItem value={20} label="Jaren ervaring" suffix="+" />
              <CountItem value={500} label="Tevreden klanten" suffix="+" />
              <CountItem value={100} label="Klanttevredenheid" suffix="%" />
              <CountItem value={24} label="Ondersteuning" suffix="/7" />
            </div>
          </div>
        </div>
      </section>
      
      {/* How We Work Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-50 rounded-l-full opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              ONS PROCES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hoe stellen wij een offerte op?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ons offerte-proces is ontworpen om uw specifieke behoeften te begrijpen en daarop in te spelen
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
                <h3 className="text-xl font-bold text-blue-600 mb-4 mt-4 text-center">Contact</h3>
                <p className="text-gray-600">
                  Zodra wij uw aanvraag voor een offerte hebben ontvangen, nemen wij binnen 24 uur contact met u op voor een eerste gesprek.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
                <h3 className="text-xl font-bold text-blue-600 mb-4 mt-4 text-center">Inventarisatie</h3>
                <p className="text-gray-600">
                  In de meeste gevallen wordt een bezoek ingepland. Samen met u stellen wij een specifieke lijst op met uw wensen en vereisten.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
                <h3 className="text-xl font-bold text-blue-600 mb-4 mt-4 text-center">Offerte</h3>
                <p className="text-gray-600">
                  Na de inventarisatie ontvangt u binnen 5 werkdagen onze gedetailleerde offerte met een passende prijsopgave.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Partner Brands */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              VERTROUWDE MERKEN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Onze Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wij werken samen met toonaangevende merken en leveranciers om de hoogste kwaliteit in dienstverlening te garanderen
            </p>
          </div>
          
          <PartnersSlider />
          
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Professionele producten</div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Milieuvriendelijk</div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Duurzame materialen</div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Hoogwaardige apparatuur</div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Innovatieve technologieën</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA/Quote Request Section - UPDATED WITH 24-HOUR RESPONSE TIME */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Klaar om samen te werken?</h2>
            <p className="text-xl text-blue-100 mb-4">
              Vraag vandaag nog een vrijblijvende offerte aan en ontdek hoe wij uw schoonmaakuitdagingen kunnen oplossen.
            </p>
            <p className="text-xl text-blue-100 mb-10">
              <strong>Binnen 24 uur reactie</strong> op uw offerte aanvraag!
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/quote-request" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-md font-medium transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Offerte aanvragen
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-md font-medium transition-all transform hover:scale-105 text-center"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
