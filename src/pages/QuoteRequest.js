import { CheckCircle, Clock, Star } from 'lucide-react';
import React from 'react';
import PageHeader from '../components/PageHeader';
import QuoteForm from '../components/QuoteForm';

const QuoteRequest = () => {
  return (
    <>
      <PageHeader 
        title="Offerte aanvragen" 
        subtitle="Vraag vrijblijvend een offerte aan en ontdek hoe wij u kunnen helpen"
        breadcrumbs={[
          { text: 'Offerte aanvragen' }
        ]}
        bgImage="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Vrijblijvende offerte aanvragen</h2>
                <p className="text-gray-600 mb-8">
                  Bent u op zoek naar professionele schoonmaakdiensten voor uw bedrijf of instelling? Vul het onderstaande formulier in en wij nemen binnen 24 uur contact met u op om uw wensen te bespreken en een passende offerte op te stellen.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Snelle reactie</h3>
                      <p className="text-gray-600">
                        Na het indienen van uw aanvraag nemen wij binnen 24 uur contact met u op voor een eerste gesprek.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Persoonlijke benadering</h3>
                      <p className="text-gray-600">
                        Voor een passende offerte komen we graag bij u langs om de situatie te inventariseren en uw specifieke wensen te bespreken.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                      <Star size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Maatwerk offerte</h3>
                      <p className="text-gray-600">
                        Na de inventarisatie ontvangt u binnen 5 werkdagen een gedetailleerde en op maat gemaakte offerte.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Moeilijke vlekken?</h3>
                  <p className="text-gray-600">
                    Twijfelt u of het vuil verwijderbaar is? Wij komen graag kosteloos bij u langs om een deel van het bevuilde oppervlak schoon te maken, zodat u zich verzekerd weet van een succesvol schoonmaakproject.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-xl p-8">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hoe werkt het?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Ons proces voor het opstellen van een offerte is eenvoudig, transparant en gericht op het vinden van de beste oplossing voor uw specifieke situatie
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
                <h3 className="text-xl font-bold text-blue-600 mb-4 mt-4 text-center">Contact</h3>
                <p className="text-gray-600 text-center">
                  Zodra wij uw aanvraag voor een offerte hebben ontvangen, nemen wij binnen 24 uur contact met u op voor een eerste gesprek over uw wensen en behoeften.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
                <h3 className="text-xl font-bold text-blue-600 mb-4 mt-4 text-center">Inventarisatie</h3>
                <p className="text-gray-600 text-center">
                  In de meeste gevallen wordt een bezoek ingepland om de situatie ter plaatse te bekijken. Samen met u stellen wij een specifieke lijst op met uw wensen en vereisten.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
                <h3 className="text-xl font-bold text-blue-600 mb-4 mt-4 text-center">Offerte</h3>
                <p className="text-gray-600 text-center">
                  Na de inventarisatie ontvangt u binnen 5 werkdagen onze gedetailleerde offerte met een passende prijsopgave, geheel vrijblijvend en zonder verplichtingen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-10 border-l-4 border-blue-600">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Veelgestelde vragen</h2>
                  <p className="text-gray-600 mb-6">
                    Heeft u vragen over onze schoonmaakdiensten of het offerteproces? Bekijk onze veelgestelde vragen of neem direct contact met ons op.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all"
                  >
                    <span>Contact opnemen</span>
                  </a>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-gray-800 mb-2">Wat kost professionele schoonmaak?</h3>
                    <p className="text-gray-600 text-sm">
                      De kosten zijn afhankelijk van diverse factoren zoals de grootte van de ruimte, het type reiniging en de frequentie. We maken graag een op maat gemaakte offerte.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-gray-800 mb-2">Hoe snel kunnen jullie beginnen?</h3>
                    <p className="text-gray-600 text-sm">
                      Na akkoord op de offerte kunnen we meestal binnen 1-2 weken starten met de werkzaamheden, afhankelijk van planning en beschikbaarheid.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-gray-800 mb-2">Werken jullie met vaste medewerkers?</h3>
                    <p className="text-gray-600 text-sm">
                      Ja, we werken zoveel mogelijk met vaste medewerkers op vaste locaties voor de beste kwaliteit en service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Klanten over ons</h2>
            {/* <div className="bg-white bg-opacity-10 rounded-xl p-8 mb-8">
              <div className="flex justify-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={24} fill="#FFC107" color="#FFC107" />
                  ))}
                </div>
              </div>
              <p className="text-xl text-blue-100 italic mb-6">
                "Al meer dan 5 jaar verzorgt Allround Cleaning de dagelijkse schoonmaak van onze kantoren en we zijn nog steeds uiterst tevreden. Betrouwbaar, flexibel en kwaliteitsgericht!"
              </p>
              <div>
                <p className="font-bold">Jan de Vries</p>
                <p className="text-blue-200">Facility Manager, ABC Kantoren</p>
              </div>
            </div> */}
            <p className="text-xl text-blue-100 mb-8">
              Sluit u aan bij onze tevreden klanten en vraag vandaag nog een vrijblijvende offerte aan.
            </p>
            <div className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-md font-medium transition-all">
              <a href="#top">Terug naar boven</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuoteRequest;