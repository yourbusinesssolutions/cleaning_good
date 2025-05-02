import { Award, CheckCircle, ChevronDown, Clock, Facebook, Mail, Menu, Phone, Send, Shield, Sparkles, Star, Twitter, X, Youtube } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import HeroSliders from './HeroSliders';

const CleaningWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    alert('Bedankt voor uw aanvraag! We nemen zo spoedig mogelijk contact met u op.');
  };

  // Add scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animation');
      
      scrollElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animate-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on first load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>0172-645574</span>
            </div>
            <div className="hidden md:flex items-center">
              <Mail size={16} className="mr-2" />
              <span>info@allround-cleaning.nl</span>
            </div>
          </div>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-blue-200 transition-colors transform hover:scale-110">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors transform hover:scale-110">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors transform hover:scale-110">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Header & Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center">
              {/* Logo Image */}
              <img 
                src="https://adxservices.xyz/wp-content/uploads/2019/10/image001.png" 
                alt="Allround Cleaning Logo"
                className="h-20 md:h-20 w-auto"
              />
            </div>
            
            {/* Rest of the header remains the same */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <div className="relative group">
                <a href="#diensten" className="text-gray-700 hover:text-blue-600 flex items-center font-medium">
                  Diensten
                  <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                </a>
                <div className="absolute hidden group-hover:block w-56 bg-white shadow-xl rounded-lg py-3 mt-2 transition-all transform origin-top scale-95 group-hover:scale-100">
                  <a href="#daily" className="block px-5 py-2 hover:bg-blue-50 hover:text-blue-600">Dagelijkse schoonmaak</a>
                  <a href="#allround" className="block px-5 py-2 hover:bg-blue-50 hover:text-blue-600">Allround Service Plus</a>
                  <a href="#facility" className="block px-5 py-2 hover:bg-blue-50 hover:text-blue-600">Facilitaire diensten</a>
                  <a href="#schools" className="block px-5 py-2 hover:bg-blue-50 hover:text-blue-600">Schoonmaak op scholen</a>
                  <a href="#daycare" className="block px-5 py-2 hover:bg-blue-50 hover:text-blue-600">Kinderdagverblijven</a>
                </div>
              </div>
              <a href="#blogs" className="text-gray-700 hover:text-blue-600 font-medium">Blogs</a>
              <a href="#assortiment" className="text-gray-700 hover:text-blue-600 font-medium">Assortiment</a>
              <a href="#over-ons" className="text-gray-700 hover:text-blue-600 font-medium">Over Ons</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <a href="#werken-bij" className="text-gray-700 hover:text-blue-600 font-medium">Werken bij</a>
              <a href="#offerte" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-medium">
                Offerte aanvraag
              </a>
            </nav>
            
            <div className="hidden md:flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-md text-xs font-semibold tracking-wider shadow-sm">CERTIFIED</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="#FFC107" color="#FFC107" className="drop-shadow-sm" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-white">
              <nav className="flex flex-col space-y-3">
                <div>
                  <button 
                    onClick={() => toggleDropdown('diensten')}
                    className="flex justify-between items-center w-full text-left text-gray-700 py-2"
                  >
                    Diensten
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'diensten' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'diensten' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <a href="#daily" className="block py-1 text-gray-700">Dagelijkse schoonmaak</a>
                      <a href="#allround" className="block py-1 text-gray-700">Allround Service Plus</a>
                      <a href="#facility" className="block py-1 text-gray-700">Facilitaire diensten</a>
                      <a href="#schools" className="block py-1 text-gray-700">Schoonmaak op scholen</a>
                      <a href="#daycare" className="block py-1 text-gray-700">Kinderdagverblijven</a>
                    </div>
                  )}
                </div>
                <a href="#blogs" className="text-gray-700 py-2">Blogs</a>
                <a href="#assortiment" className="text-gray-700 py-2">Assortiment</a>
                <a href="#over-ons" className="text-gray-700 py-2">Over Ons</a>
                <a href="#contact" className="text-gray-700 py-2">Contact</a>
                <a href="#werken-bij" className="text-gray-700 py-2">Werken bij</a>
                <a href="#offerte" className="bg-blue-600 text-white px-4 py-2 rounded-md text-center">Offerte aanvraag</a>
                <div className="flex items-center gap-2 py-2">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">CERTIFIED</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="#FFC107" color="#FFC107" />
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Dual Sliders */}

       <HeroSliders/>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Waarom kiezen voor <span className="text-blue-600">Allround Cleaning</span>?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Wij bieden professionele schoonmaakdiensten van de hoogste kwaliteit, altijd aangepast aan uw specifieke wensen en eisen.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">Tevreden klanten</h3>
              <p className="text-gray-600 text-center">
                Vele tevreden klanten zijn u al voorgegaan, en wij streven ernaar om ook voor u een uitstekende service te bieden met 100% klanttevredenheid.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">Offerte binnen 5 dagen</h3>
              <p className="text-gray-600 text-center">
                Bent u benieuwd hoe wij u van dienst kunnen zijn? Vraag bij ons, geheel vrijblijvend, een offerte aan en ontvang deze binnen 5 werkdagen.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">Specialistische reiniging</h3>
              <p className="text-gray-600 text-center">
                Twijfelt u eraan of het vuil verwijderbaar is? Wij komen graag kosteloos langs om een deel van het bevuilde oppervlak schoon te maken en onze expertise te tonen.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
              <div className="flex flex-col items-center">
                <div className="text-blue-600 font-bold text-4xl mb-2">20+</div>
                <div className="text-gray-600 text-center">Jaren ervaring</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-blue-600 font-bold text-4xl mb-2">500+</div>
                <div className="text-gray-600 text-center">Tevreden klanten</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-blue-600 font-bold text-4xl mb-2">100%</div>
                <div className="text-gray-600 text-center">Klanttevredenheid</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-blue-600 font-bold text-4xl mb-2">24/7</div>
                <div className="text-gray-600 text-center">Ondersteuning</div>
              </div>
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
            <div className="mt-16 bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                  <Sparkles size={80} className="text-blue-600" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">Moeilijke vlekken en specialistische reiniging?</h3>
                  <p className="text-gray-700 mb-4">
                    Twijfelt u eraan of het vuil verwijderbaar is? Allround Cleaning Service komt graag, geheel vrijblijvend, bij u langs om een deel van het bevuilde oppervlak kosteloos schoon te maken. 
                  </p>
                  <p className="text-gray-700">
                    Wij tonen dan onze expertise in het schoonmaken nog voordat u een offerte heeft aangevraagd, en daarmee bent u verzekerd van een succesvol schoonmaakproject.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Dagelijkse schoonmaak</h3>
              <p className="mb-6 text-blue-100">
                Professionele dagelijkse schoonmaak voor kantoren, bedrijfspanden en andere commerciële ruimtes. Consequent en betrouwbaar.
              </p>
              <a href="#daily" className="inline-flex items-center gap-2 text-white border-b border-white border-opacity-50 hover:border-opacity-100 pb-1 transition-all">
                <span>Meer informatie</span>
                <ChevronDown size={16} className="transform rotate-270" />
              </a>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Allround Service Plus</h3>
              <p className="mb-6 text-blue-100">
                Uitgebreide schoonmaakservice inclusief specialistische reiniging, onderhoud en periodieke grondige schoonmaak op maat.
              </p>
              <a href="#allround" className="inline-flex items-center gap-2 text-white border-b border-white border-opacity-50 hover:border-opacity-100 pb-1 transition-all">
                <span>Meer informatie</span>
                <ChevronDown size={16} className="transform rotate-270" />
              </a>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <Shield size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Facilitaire diensten</h3>
              <p className="mb-6 text-blue-100">
                Complete facilitaire ondersteuning voor uw bedrijf, van schoonmaak tot onderhoud en alles daar tussenin.
              </p>
              <a href="#facility" className="inline-flex items-center gap-2 text-white border-b border-white border-opacity-50 hover:border-opacity-100 pb-1 transition-all">
                <span>Meer informatie</span>
                <ChevronDown size={16} className="transform rotate-270" />
              </a>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <Sparkles size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Schoonmaak op scholen</h3>
              <p className="mb-6 text-blue-100">
                Specialistische schoonmaakdiensten voor onderwijsinstellingen met extra aandacht voor hygiëne en veiligheid.
              </p>
              <a href="#schools" className="inline-flex items-center gap-2 text-white border-b border-white border-opacity-50 hover:border-opacity-100 pb-1 transition-all">
                <span>Meer informatie</span>
                <ChevronDown size={16} className="transform rotate-270" />
              </a>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <Shield size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Schoonmaak kinderdagverblijven</h3>
              <p className="mb-6 text-blue-100">
                Grondige en veilige schoonmaak voor kinderdagverblijven met kindervrienelijke, niet-schadelijke reinigingsproducten.
              </p>
              <a href="#daycare" className="inline-flex items-center gap-2 text-white border-b border-white border-opacity-50 hover:border-opacity-100 pb-1 transition-all">
                <span>Meer informatie</span>
                <ChevronDown size={16} className="transform rotate-270" />
              </a>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <Sparkles size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Specialistische reiniging</h3>
              <p className="mb-6 text-blue-100">
                Reiniging van moeilijke vlekken en speciale oppervlakken met professionele apparatuur en specialistische methoden.
              </p>
              <a href="#special" className="inline-flex items-center gap-2 text-white border-b border-white border-opacity-50 hover:border-opacity-100 pb-1 transition-all">
                <span>Meer informatie</span>
                <ChevronDown size={16} className="transform rotate-270" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="transform transition-all duration-300 hover:scale-105">
                <div className="bg-white shadow-lg rounded-xl p-6 h-40 flex items-center justify-center">
                  <img src={`https://adxservices.xyz/wp-content/uploads/2024/12/full-shot-men-high-five-office-scaled.jpg`} alt={`Partner ${item}`} className="max-h-full" />
                </div>
              </div>
            ))}
          </div>
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

      {/* Quote Request Section */}
      <section id="offerte" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-blue-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-gradient-to-br from-blue-800 to-blue-600 p-8 text-white flex flex-col justify-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Vraag een vrijblijvende offerte aan</h2>
                  <p className="mb-8 text-blue-100">
                    Ontvang binnen 5 werkdagen een op maat gemaakte offerte voor uw schoonmaakproject. Onze experts adviseren u graag.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-1 text-blue-300" />
                      <p>Persoonlijk advies en op maat gemaakte oplossingen</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-1 text-blue-300" />
                      <p>Gratis test schoonmaak bij hardnekkige vlekken</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-1 text-blue-300" />
                      <p>Geen verplichtingen, geheel vrijblijvend</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} fill="#FFC107" color="#FFC107" />
                      ))}
                    </div>
                    <span className="text-sm">4.9/5 op basis van 243 reviews</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 p-8 md:p-10">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Offerteformulier</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Naam <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefoonnummer <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Uw telefoonnummer"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Onderwerp</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Waar kunnen we u mee helpen?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Bericht</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Beschrijf uw schoonmaakwensen..."
                    ></textarea>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <span className="mr-2">VERSTUREN</span>
                    <Send size={18} />
                  </button>
                </div>
                <p className="mt-6 text-gray-600 text-center text-sm">
                  Waar in de regio u zich ook bevindt, wij komen graag met u in contact en doen u een passend voorstel binnen 5 werkdagen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-20 pb-10 relative">
        <div className="absolute top-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between mb-16">
            <div className="mb-10 md:mb-0">
              <div className="text-3xl font-bold text-white mb-6">Allround <span className="text-blue-300">Cleaning</span></div>
              <p className="text-blue-200 max-w-md mb-8">
                Professionele schoonmaakdiensten sinds 2002. Met toewijding en vakmanschap zorgen wij voor een schone en hygiënische omgeving voor uw bedrijf of instelling.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="w-6 h-1 bg-blue-400 inline-block mr-3"></span>
                  Diensten
                </h3>
                <ul className="space-y-3">
                  <li><a href="#daily" className="text-blue-200 hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Dagelijkse schoonmaak</a></li>
                  <li><a href="#allround" className="text-blue-200 hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Allround Service Plus</a></li>
                  <li><a href="#facility" className="text-blue-200 hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Facilitaire diensten</a></li>
                  <li><a href="#schools" className="text-blue-200 hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Schoonmaak op scholen</a></li>
                  <li><a href="#daycare" className="text-blue-200 hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Kinderdagverblijven</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="w-6 h-1 bg-blue-400 inline-block mr-3"></span>
                  Bedrijf
                </h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-blue-200 hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Home</a></li>
                  <li><a href="#diensten" className="text-blue-200 hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Diensten</a></li>
                  <li><a href="#assortiment" className="text-blue-200 hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Assortiment</a></li>
                  <li><a href="#over-ons" className="text-blue-200 hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Over Ons</a></li>
                  <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="w-6 h-1 bg-blue-400 inline-block mr-3"></span>
                  Contact
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-semibold mb-2">Email Support</p>
                    <a href="mailto:info@allround-cleaning.nl" className="text-blue-200 hover:text-white transition-colors flex items-center">
                      <Mail size={18} className="mr-3" />
                      info@allround-cleaning.nl
                    </a>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">Klanten Support</p>
                    <a href="tel:0172-645574" className="text-blue-200 hover:text-white transition-colors flex items-center">
                      <Phone size={18} className="mr-3" />
                      0172-645574
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Allround Cleaning. All Rights Reserved.
            </p>
            <p className="text-blue-300">
              Powered By <span className="font-bold">Royal Lease Websites</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CleaningWebsite;