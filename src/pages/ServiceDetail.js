import { ArrowRight, Award, CheckCircle, Shield, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  
  // Service data - in a real app this would come from an API
  const servicesData = {
    'daily-cleaning': {
      id: 'daily-cleaning',
      icon: CheckCircle,
      title: 'Dagelijkse schoonmaak',
      subtitle: 'Professionele dagelijkse schoonmaak voor bedrijven en instellingen',
      description: 'Onze reguliere schoonmaakdiensten zorgen ervoor dat uw bedrijfsruimte er altijd verzorgd uitziet. Met een systematische aanpak en oog voor detail zorgen wij ervoor dat uw werkomgeving schoon, hygiënisch en representatief blijft.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3',
      features: [
        'Stofvrij maken en stofzuigen van vloeren',
        'Reinigen van sanitaire voorzieningen',
        'Afvalbakken legen en vervangen van vuilniszakken',
        'Reiniging van deurklinken, lichtschakelaars en contactpunten',
        'Stofvrij maken van bureaus en werkplekken',
        'Reinigen van keukens en pantry',
        'Wassen en afdrogen van afwas',
        'Reinigen en ontkalken van kranen en spoelbakken'
      ],
      benefits: [
        'Een schone, gezonde werkomgeving voor uw medewerkers',
        'Professionele uitstraling voor uw klanten en bezoekers',
        'Consistente kwaliteit door ervaren schoonmaakpersoneel',
        'Flexibele schoonmaaktijden, afgestemd op uw bedrijfsuren',
        'Gebruik van milieuvriendelijke reinigingsmiddelen'
      ]
    },
    'allround-service': {
      id: 'allround-service',
      icon: Award,
      title: 'Allround Service Plus',
      subtitle: 'Uitgebreide schoonmaakservice inclusief specialistische reiniging',
      description: 'Naast de reguliere schoonmaak bieden wij ook periodieke en specialistische schoonmaak. Onze Allround Service Plus omvat een complete reeks diensten, aangepast aan uw specifieke behoeften en wensen.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3',
      features: [
        'Alle dagelijkse schoonmaakwerkzaamheden',
        'Periodieke dieptereiniging van vloeren',
        'Machinaal reinigen van harde vloeren',
        'Reiniging van tapijten en stoffering',
        'Glasbewassing (binnen en buiten)',
        'Verwijderen van graffiti',
        'Reiniging van gevels en buitenoppervlakken',
        'Specialistische reiniging van specifieke apparatuur'
      ],
      benefits: [
        'Complete ontzorging van alle schoonmaakwerkzaamheden',
        'Eén aanspreekpunt voor al uw schoonmaakbehoeften',
        'Maatwerkoplossingen voor specifieke uitdagingen',
        'Periodieke evaluaties en kwaliteitscontroles',
        'Flexibele service-afspraken'
      ]
    },
    'facility-services': {
      id: 'facility-services',
      icon: Shield,
      title: 'Facilitaire diensten',
      subtitle: 'Complete facilitaire ondersteuning voor uw bedrijf',
      description: 'Onze facilitaire diensten gaan verder dan alleen schoonmaak. We ondersteunen uw bedrijfsvoering met een breed scala aan diensten, zoals gebouwonderhoud, afvalbeheer, groenvoorziening en meer.',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3',
      features: [
        'Reguliere en specialistische schoonmaak',
        'Onderhoud van gebouwen en installaties',
        'Afvalbeheer en recycling',
        'Groenvoorziening en tuinonderhoud',
        'Receptiediensten',
        'Beveiliging en toegangscontrole',
        'Catering en koffievoorzieningen',
        'Ongediertebestrijding'
      ],
      benefits: [
        'Volledige ontzorging van facilitaire taken',
        'Kostenbesparing door efficiënte processen',
        'Eén aanspreekpunt voor alle facilitaire diensten',
        'Flexibele dienstverlening op maat',
        'Consistente kwaliteit door professionele medewerkers'
      ]
    },
    'school-cleaning': {
      id: 'school-cleaning',
      icon: Sparkles,
      title: 'Schoonmaak op scholen',
      subtitle: 'Specialistische schoonmaakdiensten voor onderwijsinstellingen',
      description: 'Scholen vereisen een specifieke aanpak. Onze diensten zijn speciaal afgestemd op de unieke eisen van onderwijsinstellingen, met extra aandacht voor hygiëne en veiligheid van leerlingen en personeel.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3',
      features: [
        'Dagelijkse reiniging van klaslokalen en gemeenschappelijke ruimtes',
        'Hygiënische reiniging van sanitaire voorzieningen',
        'Desinfectie van contactpunten zoals deurklinken en lichtschakelaars',
        'Reiniging van gymzalen en sportvloeren',
        'Periodieke dieptereiniging tijdens schoolvakanties',
        'Glasbewassing en gevelreiniging',
        'Tapijtreiniging en vloerenonderhoud',
        'Afvalbeheer en recyclingdiensten'
      ],
      benefits: [
        'Een hygiënische en veilige leeromgeving voor leerlingen',
        'Verminderd ziekteverzuim onder leerlingen en personeel',
        'Gebruik van niet-toxische, kindvriendelijke reinigingsmiddelen',
        'Flexibele schoonmaaktijden buiten schooluren',
        'Speciale aandacht voor COVID-19 preventie en desinfectie'
      ]
    },
    'daycare-cleaning': {
      id: 'daycare-cleaning',
      icon: Shield,
      title: 'Schoonmaak kinderdagverblijven',
      subtitle: 'Grondige en veilige schoonmaak voor kinderdagverblijven',
      description: 'Bij kinderdagverblijven staat veiligheid voorop. We gebruiken alleen kindvriendelijke, niet-toxische reinigingsproducten en volgen strenge protocollen om een gezonde omgeving te waarborgen.',
      image: 'https://images.unsplash.com/photo-1526634332515-d56c5fd16991?ixlib=rb-4.0.3',
      features: [
        'Dagelijkse reiniging van speelruimtes en slaapkamers',
        'Hygiënische reiniging en desinfectie van verschoonruimtes',
        'Reiniging en desinfectie van speelgoed en materialen',
        'Speciale aandacht voor hygiëne in keukens en eetruimtes',
        'Stofvrij maken van alle oppervlakken en vloeren',
        'Reiniging van sanitaire voorzieningen met kindvriendelijke producten',
        'Afvalbeheer met speciale aandacht voor luierafval',
        'Periodieke dieptereiniging van matrassen en textiel'
      ],
      benefits: [
        'Een veilige en hygiënische omgeving voor jonge kinderen',
        'Gebruik van 100% kindvriendelijke, niet-toxische reinigingsproducten',
        'Verminderde verspreiding van ziektekiemen en virussen',
        'Schoonmaakschema s afgestemd op de dagindeling van het kinderdagverblijf',
        'Naleving van strenge hygiënevoorschriften voor kinderopvanglocaties'
      ]
    },
    'specialized-cleaning': {
      id: 'specialized-cleaning',
      icon: Sparkles,
      title: 'Specialistische reiniging',
      subtitle: 'Reiniging van moeilijke vlekken en speciale oppervlakken',
      description: 'Voor hardnekkige vlekken en bijzondere oppervlakken zetten we gespecialiseerde apparatuur en methoden in. Onze experts kunnen bijna alle reinigingsuitdagingen aan en komen graag kosteloos bij u langs voor een demonstratie.',
      image: 'https://images.unsplash.com/photo-1586683086816-dd15ab35cc82?ixlib=rb-4.0.3',
      features: [
        'Graffiti verwijdering',
        'Hoogwerker reiniging voor moeilijk bereikbare plekken',
        'Gevelreiniging en -impregnatie',
        'Dieptereiniging van tapijten en stoffering',
        'Verwijdering van hardnekkige vlekken',
        'Reiniging na brand- of waterschade',
        'Ontkalking van sanitair en tegels',
        'Reiniging van industriële apparatuur en machines'
      ],
      benefits: [
        'Professionele aanpak van moeilijke reinigingsuitdagingen',
        'Gebruik van geavanceerde apparatuur en specialistische technieken',
        'Kosteneffectief alternatief voor vervanging van vervuilde oppervlakken',
        'Deskundig advies over preventief onderhoud',
        'Gratis demonstratie voor twijfelachtige gevallen'
      ]
    }
  };
  
  useEffect(() => {
    // Set the service data based on the URL parameter
    if (serviceId && servicesData[serviceId]) {
      setService(servicesData[serviceId]);
    }
  }, [serviceId]);
  
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Service niet gevonden</h2>
        <p className="text-gray-600 mb-8">
          De service die u zoekt is niet beschikbaar. Bekijk onze andere diensten.
        </p>
        <Link 
          to="/services" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
        >
          Terug naar diensten
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <PageHeader 
        title={service.title} 
        subtitle={service.subtitle}
        breadcrumbs={[
          { text: 'Diensten', link: '/services' },
          { text: service.title }
        ]}
        bgImage={service.image}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                {service.description}
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Wat omvat onze {service.title.toLowerCase()}?</h2>
              <ul className="space-y-3 mb-10">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Voordelen van onze service</h2>
              <ul className="space-y-3 mb-10">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-16 bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Wilt u meer weten over onze {service.title.toLowerCase()}?</h3>
                <p className="text-gray-700 mb-6">
                  Neem contact met ons op voor meer informatie of vraag direct een vrijblijvende offerte aan. Wij denken graag met u mee over een passende oplossing voor uw specifieke situatie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all text-center"
                  >
                    Contact opnemen
                  </Link>
                  <Link 
                    to="/quote-request" 
                    className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-all text-center"
                  >
                    Offerte aanvragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Andere diensten die u mogelijk interesseren</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {Object.values(servicesData)
                .filter(item => item.id !== service.id)
                .slice(0, 2)
                .map(relatedService => (
                  <div key={relatedService.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedService.image} 
                        alt={relatedService.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{relatedService.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {relatedService.subtitle}
                      </p>
                      <Link 
                        to={`/services/${relatedService.id}`} 
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                      >
                        <span>Meer informatie</span>
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
            
            <div className="text-center mt-10">
              <Link 
                to="/services" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all"
              >
                <span>Bekijk alle diensten</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;