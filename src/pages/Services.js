import { Award, CheckCircle, Shield, Sparkles } from 'lucide-react';
import React from 'react';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      id: 'daily-cleaning',
      icon: CheckCircle,
      title: 'Dagelijkse schoonmaak',
      description: 'Professionele dagelijkse schoonmaak voor kantoren, bedrijfspanden en andere commerciële ruimtes. Consequent en betrouwbaar.',
      details: 'Onze reguliere schoonmaakdiensten zorgen ervoor dat uw bedrijfsruimte er altijd verzorgd uitziet. Met een systematische aanpak en oog voor detail zorgen wij ervoor dat uw werkomgeving schoon, hygiënisch en representatief blijft.'
    },
    {
      id: 'allround-service',
      icon: Award,
      title: 'Allround Service Plus',
      description: 'Uitgebreide schoonmaakservice inclusief specialistische reiniging, onderhoud en periodieke grondige schoonmaak op maat.',
      details: 'Naast de reguliere schoonmaak bieden wij ook periodieke en specialistische schoonmaak. Onze Allround Service Plus omvat een complete reeks diensten, aangepast aan uw specifieke behoeften en wensen.'
    },
    {
      id: 'facility-services',
      icon: Shield,
      title: 'Facilitaire diensten',
      description: 'Complete facilitaire ondersteuning voor uw bedrijf, van schoonmaak tot onderhoud en alles daar tussenin.',
      details: 'Onze facilitaire diensten gaan verder dan alleen schoonmaak. We ondersteunen uw bedrijfsvoering met een breed scala aan diensten, zoals gebouwonderhoud, afvalbeheer, groenvoorziening en meer.'
    },
    {
      id: 'school-cleaning',
      icon: Sparkles,
      title: 'Schoonmaak op scholen',
      description: 'Specialistische schoonmaakdiensten voor onderwijsinstellingen met extra aandacht voor hygiëne en veiligheid.',
      details: 'Scholen vereisen een specifieke aanpak. Onze diensten zijn speciaal afgestemd op de unieke eisen van onderwijsinstellingen, met extra aandacht voor hygiëne en veiligheid van leerlingen en personeel.'
    },
    {
      id: 'daycare-cleaning',
      icon: Shield,
      title: 'Schoonmaak kinderdagverblijven',
      description: 'Grondige en veilige schoonmaak voor kinderdagverblijven met kindervrienelijke, niet-schadelijke reinigingsproducten.',
      details: 'Bij kinderdagverblijven staat veiligheid voorop. We gebruiken alleen kindvriendelijke, niet-toxische reinigingsproducten en volgen strenge protocollen om een gezonde omgeving te waarborgen.'
    },
    {
      id: 'specialized-cleaning',
      icon: Sparkles,
      title: 'Specialistische reiniging',
      description: 'Reiniging van moeilijke vlekken en speciale oppervlakken met professionele apparatuur en specialistische methoden.',
      details: 'Voor hardnekkige vlekken en bijzondere oppervlakken zetten we gespecialiseerde apparatuur en methoden in. Onze experts kunnen bijna alle reinigingsuitdagingen aan en komen graag kosteloos bij u langs voor een demonstratie.'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Onze Diensten" 
        subtitle="Wij bieden een compleet pakket aan professionele schoonmaakdiensten, altijd afgestemd op uw specifieke behoeften en wensen."
        breadcrumbs={[
          { text: 'Diensten' }
        ]}
        bgImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Professionele schoonmaak op maat</h2>
            <p className="text-gray-600">
              Of het nu gaat om dagelijkse schoonmaak van kantoren, specialistische reiniging of facilitaire diensten - wij hebben de expertise en ervaring om aan uw eisen te voldoen. Met meer dan 20 jaar ervaring in de branche zijn wij uw betrouwbare partner voor alle schoonmaakdiensten.
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
                lightMode={true}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3" 
                  alt="Professionele schoonmaak" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  ONZE AANPAK
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Wat maakt ons anders?</h2>
                <p className="text-gray-700 mb-6">
                  Bij Allround Cleaning zetten wij kwaliteit en klanttevredenheid voorop. Onze professionele aanpak onderscheidt ons van de concurrentie en zorgt ervoor dat wij consistent uitstekende resultaten leveren.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Ervaren en goed opgeleide schoonmaakmedewerkers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Gebruik van professionele apparatuur en milieuvriendelijke producten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Flexibele dienstverlening, aangepast aan uw wensen en schema</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Strikte kwaliteitscontroles en regelmatige evaluaties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Persoonlijk contact met een vaste contactpersoon</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Heeft u een specifieke vraag over onze diensten?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Neem contact met ons op voor een persoonlijk adviesgesprek of vraag direct een vrijblijvende offerte aan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-all"
              >
                Contact opnemen
              </a>
              <a 
                href="/quote-request" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-md font-medium transition-all"
              >
                Offerte aanvragen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;