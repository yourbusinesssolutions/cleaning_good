import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <>
      <PageHeader 
        title="Contact" 
        subtitle="Neem contact met ons op voor meer informatie of een vrijblijvende offerte"
        breadcrumbs={[
          { text: 'Contact' }
        ]}
        bgImage="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Telefoon</h3>
                <p className="text-gray-600 mb-4">
                  We staan voor u klaar van maandag t/m vrijdag tussen 8:00 en 17:00 uur
                </p>
                <a href="tel:0172-645574" className="text-blue-600 font-medium text-lg">
                  0172-645574
                </a>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">E-mail</h3>
                <p className="text-gray-600 mb-4">
                  Stuur ons een e-mail en we reageren binnen 24 uur op werkdagen
                </p>
                <a href="mailto:info@allround-cleaning.nl" className="text-blue-600 font-medium">
                  info@allround-cleaning.nl
                </a>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Hoofdkantoor</h3>
                <p className="text-gray-600 mb-4">
                  Bezoek ons hoofdkantoor voor een persoonlijk gesprek
                </p>
                <address className="text-blue-600 font-medium not-italic">
                  Industrieweg 35<br />
                  2382 NV Alphen aan den Rijn
                </address>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Stuur ons een bericht</h2>
                <p className="text-gray-600 mb-8">
                  Heeft u een vraag of wilt u meer informatie over onze diensten? Vul het contactformulier in en we nemen zo spoedig mogelijk contact met u op.
                </p>
                
                <ContactForm />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Openingstijden</h2>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <div className="flex items-center">
                        <Clock size={20} className="text-blue-600 mr-3" />
                        <span className="font-medium">Maandag - Vrijdag</span>
                      </div>
                      <span>08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <div className="flex items-center">
                        <Clock size={20} className="text-blue-600 mr-3" />
                        <span className="font-medium">Zaterdag</span>
                      </div>
                      <span>Gesloten</span>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                      <div className="flex items-center">
                        <Clock size={20} className="text-blue-600 mr-3" />
                        <span className="font-medium">Zondag</span>
                      </div>
                      <span>Gesloten</span>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-6">Locatie</h2>
                <div className="rounded-xl overflow-hidden shadow-lg h-80">
                  {/* Replace this with an actual Google Map component */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.3979088220364!2d4.6560197999999995!3d52.13337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e6e3b3fc6f45%3A0x6d0f40e995ecab01!2sIndustrieweg%2C%20Alphen%20aan%20den%20Rijn!5e0!3m2!1sen!2snl!4v1651057212543!5m2!1sen!2snl" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Allround Cleaning locatie"
                    ></iframe>
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
            <h2 className="text-3xl font-bold mb-6">Offerte aanvragen</h2>
            <p className="text-xl text-blue-100 mb-10">
              Wilt u direct een vrijblijvende offerte aanvragen voor onze diensten?
            </p>
            <a 
              href="/quote-request" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-md font-medium transition-all inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Offerte aanvragen
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;