import { Award, Calendar, Star, Target, Users } from 'lucide-react';
import CountItem from '../components/CountItem';
import PageHeader from '../components/PageHeader';

const AboutUs = () => {
  return (
    <>
      <PageHeader 
        title="Over Ons" 
        subtitle="Leer meer over Allround Cleaning Service en onze visie op professionele schoonmaakdiensten"
        breadcrumbs={[
          { text: 'Over Ons' }
        ]}
        bgImage="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  ONS VERHAAL
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Meer dan 20 jaar ervaring in professionele schoonmaak</h2>
                
                <p className="text-gray-700 mb-6">
                  Allround Cleaning Service werd in 2002 opgericht met een duidelijke missie: het leveren van uitzonderlijke schoonmaakdiensten aan bedrijven en instellingen, met een onwrikbare toewijding aan kwaliteit, betrouwbaarheid en klanttevredenheid.
                </p>
                
                <p className="text-gray-700 mb-6">
                  In de afgelopen twee decennia zijn we uitgegroeid tot een toonaangevende schoonmaakpartner in de regio, met een team van meer dan 50 ervaren professionals. Onze klantenkring omvat kantoren, scholen, kinderdagverblijven, zorginstellingen en productiebedrijven.
                </p>
                
                <p className="text-gray-700">
                  Wat ons onderscheidt is onze persoonlijke aanpak. We geloven dat schoonmaak maatwerk is en werken nauw samen met onze klanten om diensten te leveren die perfect aansluiten op hun specifieke behoeften en wensen.
                </p>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3" 
                  alt="Allround Cleaning Team" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Onze Kernwaarden</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Deze waarden vormen het fundament van onze dienstverlening en sturen al onze beslissingen en acties
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6 text-white">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Persoonlijke aanpak</h3>
                <p className="text-blue-100">
                  We luisteren naar uw specifieke wensen en stemmen onze dienstverlening daarop af. Elke klant krijgt persoonlijke aandacht en maatwerk.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6 text-white">
                  <Target size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Kwaliteitscontrole</h3>
                <p className="text-blue-100">
                  Onze strenge kwaliteitscontroles garanderen consistent hoge standaarden. We voeren regelmatige checks uit en vragen actief om feedback.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6 text-white">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Duurzaamheid</h3>
                <p className="text-blue-100">
                  We gebruiken milieuvriendelijke producten en methoden. Onze focus ligt op het verminderen van onze ecologische voetafdruk voor een schonere toekomst.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6 text-white">
                  <Calendar size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Flexibiliteit</h3>
                <p className="text-blue-100">
                  We passen ons aan aan uw werktijden en specifieke omstandigheden. Onze diensten evolueren mee met uw veranderende behoeften.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Waarom klanten voor ons kiezen</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Bij Allround Cleaning Service onderscheiden we ons door onze professionele aanpak en toewijding aan klanttevredenheid
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
              <CountItem value={20} label="Jaren ervaring" suffix="+" />
              <CountItem value={500} label="Tevreden klanten" suffix="+" />
              <CountItem value={50} label="Professionele medewerkers" suffix="+" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 p-3 rounded-md text-blue-600 mr-4">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Persoonlijke aanpak</h3>
                    <p className="text-gray-600">
                      We luisteren naar uw specifieke wensen en stemmen onze dienstverlening daarop af. U krijgt een vaste contactpersoon die uw situatie kent.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 p-3 rounded-md text-blue-600 mr-4">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Betrouwbaarheid</h3>
                    <p className="text-gray-600">
                      U kunt rekenen op consistente kwaliteit en punctualiteit. We komen onze afspraken na en leveren wat we beloven.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-md text-blue-600 mr-4">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Flexibiliteit</h3>
                    <p className="text-gray-600">
                      We passen ons aan aan uw werktijden en specifieke omstandigheden. Onze diensten evolueren mee met uw veranderende behoeften.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 p-3 rounded-md text-blue-600 mr-4">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Kwaliteitscontrole</h3>
                    <p className="text-gray-600">
                      We voeren regelmatige kwaliteitscontroles uit en vragen actief om feedback, zodat we onze dienstverlening continu kunnen verbeteren.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 p-3 rounded-md text-blue-600 mr-4">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Gekwalificeerd personeel</h3>
                    <p className="text-gray-600">
                      Onze medewerkers zijn grondig gescreend, goed opgeleid en werken volgens strikte protocollen om de hoogste kwaliteit te garanderen.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-md text-blue-600 mr-4">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Duurzaamheid</h3>
                    <p className="text-gray-600">
                      We gebruiken waar mogelijk milieuvriendelijke producten en werken continu aan het verminderen van onze ecologische voetafdruk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Onze geschiedenis</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-blue-100 text-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                    <Calendar size={40} />
                  </div>
                  <div className="text-xl font-bold text-blue-600 mt-2">2002</div>
                </div>
                <div className="md:w-3/4 md:pl-8 text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Oprichting</h3>
                  <p className="text-gray-600">
                    Allround Cleaning Service werd in 2002 opgericht door Driss Bakkali. Wat begon als een kleinschalige schoonmaakoperatie tijdens avonden in zijn oude basisschool groeide uit tot een serieuze onderneming die scholen, kantoren en industrie bedient.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-blue-100 text-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                    <Calendar size={40} />
                  </div>
                  <div className="text-xl font-bold text-blue-600 mt-2">2004</div>
                </div>
                <div className="md:w-3/4 md:pl-8 text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Eerste kantoor</h3>
                  <p className="text-gray-600">
                    Verhuizing naar het eerste kantoor aan de Vromade in Bodegraven, een belangrijke stap in de professionalisering van het bedrijf.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-blue-100 text-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                    <Calendar size={40} />
                  </div>
                  <div className="text-xl font-bold text-blue-600 mt-2">2006</div>
                </div>
                <div className="md:w-3/4 md:pl-8 text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Samenwerking met scholen</h3>
                  <p className="text-gray-600">
                    Succesvolle samenwerking met een schoolgemeenschap, wat leidde tot uitbreiding van het team en verdere groei.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-blue-100 text-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                    <Calendar size={40} />
                  </div>
                  <div className="text-xl font-bold text-blue-600 mt-2">2012</div>
                </div>
                <div className="md:w-3/4 md:pl-8 text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Verdere groei</h3>
                  <p className="text-gray-600">
                    Uitbreiding van de activiteiten door samenwerkingen met meerdere scholen, wat het bedrijf verder versterkte.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-blue-100 text-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                    <Calendar size={40} />
                  </div>
                  <div className="text-xl font-bold text-blue-600 mt-2">2016</div>
                </div>
                <div className="md:w-3/4 md:pl-8 text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Nieuwe locatie</h3>
                  <p className="text-gray-600">
                    Verhuizing naar de huidige, grotere locatie aan de Europaweg in Bodegraven, met meer ruimte voor het groeiende team.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-blue-100 text-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                    <Calendar size={40} />
                  </div>
                  <div className="text-xl font-bold text-blue-600 mt-2">2021</div>
                </div>
                <div className="md:w-3/4 md:pl-8 text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Duurzame renovatie</h3>
                  <p className="text-gray-600">
                    Renovatie en verduurzaming van het pand voor de toekomst, in lijn met de kernwaarde duurzaamheid.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-blue-100 text-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                    <Calendar size={40} />
                  </div>
                  <div className="text-xl font-bold text-blue-600 mt-2">Heden</div>
                </div>
                <div className="md:w-3/4 md:pl-8 text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Toekomstvisie</h3>
                  <p className="text-gray-600">
                    Allround Cleaning Service blijft een betrouwbare, flexibele partner in verschillende sectoren - trouw aan de oorspronkelijke toewijding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Klaar om samen te werken?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Neem contact met ons op voor een persoonlijk gesprek of vraag direct een vrijblijvende offerte aan.
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

export default AboutUs;
