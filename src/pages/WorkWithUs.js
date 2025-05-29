import { Award, Briefcase, CheckCircle, Mail, Phone, Send, Users, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import HRService from '../services/hrService';

const WorkWithUs = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeVacancy, setActiveVacancy] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vacancy: '',
    vacancy_title: '',
    message: '',
    cv_file: null
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  
  // Fetch vacancies from API
  useEffect(() => {
    loadVacancies();
  }, []);
  
  const loadVacancies = async () => {
    try {
      setLoading(true);
      const response = await HRService.getVacancies();
      // Handle paginated response
      const vacanciesData = response.results || response;
      setVacancies(vacanciesData);
    } catch (err) {
      setError('Failed to load vacancies');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: null
      }));
    }
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        cv_file: file
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is verplicht';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Voer een geldig e-mailadres in';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefoonnummer is verplicht';
    }
    
    if (!formData.cv_file) {
      newErrors.cv_file = 'Upload uw CV';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null);
    
    if (validateForm()) {
      try {
        setIsSubmitting(true);
        
        // Submit to API
        const applicationData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          cv_file: formData.cv_file,
          vacancy: activeVacancy?.id || null,
          vacancy_title: activeVacancy?.title || 'Open sollicitatie'
        };
        
        await HRService.submitApplication(applicationData);
        
        // Show success message
        setFormSubmitted(true);
        
        // Reset form after submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            vacancy: '',
            vacancy_title: '',
            message: '',
            cv_file: null
          });
          setFormSubmitted(false);
          closeVacancy();
        }, 3000);
      } catch (error) {
        console.error('Error submitting application:', error);
        setApiError('Er is een fout opgetreden. Probeer het later opnieuw.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  const openVacancy = (vacancy) => {
    setActiveVacancy(vacancy);
    // Set the selected vacancy in the form
    setFormData(prev => ({
      ...prev,
      vacancy: vacancy.id || '',
      vacancy_title: vacancy.title
    }));
  };
  
  const closeVacancy = () => {
    setActiveVacancy(null);
  };
  
  if (loading) {
    return (
      <>
        <PageHeader 
          title="Werken bij Allround Cleaning" 
          subtitle="Word onderdeel van ons team en help ons om onze klanten de beste schoonmaakdiensten te bieden"
          breadcrumbs={[
            { text: 'Werken bij' }
          ]}
          bgImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3"
        />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-gray-600">Vacatures laden...</p>
        </div>
      </>
    );
  }
  
  if (error) {
    return (
      <>
        <PageHeader 
          title="Werken bij Allround Cleaning" 
          subtitle="Word onderdeel van ons team en help ons om onze klanten de beste schoonmaakdiensten te bieden"
          breadcrumbs={[
            { text: 'Werken bij' }
          ]}
          bgImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3"
        />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Er is iets misgegaan</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={loadVacancies} 
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
          >
            Opnieuw proberen
          </button>
        </div>
      </>
    );
  }
  
  return (
    <>
      <PageHeader 
        title="Werken bij Allround Cleaning Service" 
        subtitle="Word onderdeel van ons team en help ons om onze klanten de beste schoonmaakdiensten te bieden"
        breadcrumbs={[
          { text: 'Werken bij' }
        ]}
        bgImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Waarom werken bij Allround Cleaning Service?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Bij Allround Cleaning Service bieden we niet alleen uitstekende diensten aan onze klanten, maar zorgen we ook goed voor onze medewerkers. We geloven dat tevreden medewerkers leiden tot tevreden klanten.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Prettige werkomgeving</h3>
                <p className="text-gray-600">
                  We hechten veel waarde aan een positieve en inclusieve werkomgeving waar iedereen zich gewaardeerd en gerespecteerd voelt.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Groei en ontwikkeling</h3>
                <p className="text-gray-600">
                  We bieden opleidings- en doorgroeimogelijkheden aan onze medewerkers, zodat ze kunnen blijven leren en zich ontwikkelen in hun carrière.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Goede arbeidsvoorwaarden</h3>
                <p className="text-gray-600">
                  We bieden concurrerende salarissen, flexibele werktijden waar mogelijk, en waarderen de inzet van onze medewerkers met regelmatige activiteiten en attenties.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Actuele vacatures</h2>
              
              {vacancies.length > 0 ? (
                <div className="space-y-6">
                  {vacancies.map(vacancy => (
                    <div 
                      key={vacancy.id} 
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                      onClick={() => openVacancy(vacancy)}
                    >
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{vacancy.title}</h3>
                            <div className="flex flex-wrap gap-3 mb-4">
                              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                {vacancy.location}
                              </span>
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                {vacancy.type}
                              </span>
                            </div>
                          </div>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all mt-4 md:mt-0">
                            Bekijk details
                          </button>
                        </div>
                        <p className="text-gray-600">{vacancy.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <p className="text-gray-600">
                    Momenteel hebben we geen openstaande vacatures, maar u kunt altijd een open sollicitatie sturen.
                  </p>
                </div>
              )}
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Open sollicitatie</h2>
              <p className="text-gray-600 mb-4">
                Staat de functie waar u naar op zoek bent niet tussen onze vacatures? U kunt altijd een open sollicitatie sturen. Wij bewaren uw gegevens dan voor toekomstige vacatures die bij uw profiel passen.
              </p>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all"
                onClick={() => openVacancy({ id: null, title: 'Open sollicitatie' })}
              >
                Open sollicitatie versturen
              </button>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Heeft u een vraag over werken bij Allround Cleaning?</h2>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Neem contact op met onze HR-afdeling via onderstaand telefoonnummer of e-mailadres. We helpen u graag verder.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a 
                  href="tel:0172-645574" 
                  className="flex items-center justify-center bg-white border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-6 py-3 rounded-md font-medium transition-all"
                >
                  <Phone size={20} className="mr-2" />
                  0172-645574
                </a>
                <a 
                  href="mailto:info@allround-cleaning.nl" 
                  className="flex items-center justify-center bg-white border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-6 py-3 rounded-md font-medium transition-all"
                >
                  <Mail size={20} className="mr-2" />
                  info@allround-cleaning.nl
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vacancy Detail Modal */}
      {activeVacancy && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 flex justify-between items-center p-6">
              <h3 className="text-2xl font-bold text-gray-800">{activeVacancy.title}</h3>
              <button 
                className="text-gray-500 hover:text-gray-800"
                onClick={closeVacancy}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              {activeVacancy.id && (
                <>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {activeVacancy.location}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {activeVacancy.type}
                    </span>
                  </div>
                  
                  <div className="prose max-w-none mb-8">
                    <p className="text-lg">{activeVacancy.description}</p>
                    
                    {activeVacancy.responsibilities && activeVacancy.responsibilities.length > 0 && (
                      <>
                        <h4 className="text-xl font-bold text-gray-800 mt-8 mb-4">Werkzaamheden</h4>
                        <ul className="space-y-2">
                          {activeVacancy.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    
                    {activeVacancy.requirements && activeVacancy.requirements.length > 0 && (
                      <>
                        <h4 className="text-xl font-bold text-gray-800 mt-8 mb-4">Wij vragen</h4>
                        <ul className="space-y-2">
                          {activeVacancy.requirements.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    
                    {activeVacancy.benefits && activeVacancy.benefits.length > 0 && (
                      <>
                        <h4 className="text-xl font-bold text-gray-800 mt-8 mb-4">Wij bieden</h4>
                        <ul className="space-y-2">
                          {activeVacancy.benefits.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </>
              )}
              
              {/* Application Form */}
              {!formSubmitted ? (
                <>
                  <h4 className="text-xl font-bold text-gray-800 mt-10 mb-6">Solliciteren</h4>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Naam <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Uw volledige naam"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="uw@email.nl"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Telefoonnummer <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Uw telefoonnummer"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="vacancy_title" className="block text-gray-700 font-medium mb-2">
                        Vacature <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="vacancy_title"
                        value={formData.vacancy_title}
                        readOnly
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Motivatie
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Waarom bent u geïnteresseerd in deze functie?"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="cv_file" className="block text-gray-700 font-medium mb-2">
                        CV uploaden <span className="text-red-500">*</span>
                      </label>
                      <div className={`w-full px-4 py-3 border ${errors.cv_file ? 'border-red-500' : 'border-gray-300'} rounded-lg`}>
                        <input
                          type="file"
                          id="cv_file"
                          onChange={handleFileChange}
                          className="text-gray-700"
                          accept=".pdf,.doc,.docx"
                        />
                      </div>
                      <p className="text-gray-500 text-sm mt-1">Toegestane formaten: PDF, DOC, DOCX (max. 5MB)</p>
                      {errors.cv_file && <p className="text-red-500 text-sm mt-1">{errors.cv_file}</p>}
                    </div>
                    
                    {apiError && (
                      <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <p className="text-red-700">{apiError}</p>
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center`}
                    >
                      {isSubmitting ? (
                        <span>Bezig met verzenden...</span>
                      ) : (
                        <>
                          <span className="mr-2">Sollicitatie versturen</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg text-center mt-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <CheckCircle size={40} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Bedankt voor uw sollicitatie!</h4>
                  <p className="text-gray-600 mb-6">
                    We hebben uw sollicitatie in goede orde ontvangen. We bekijken deze zo spoedig mogelijk en nemen binnen 5 werkdagen contact met u op.
                  </p>
                  <button 
                    onClick={closeVacancy} 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all"
                  >
                    Sluiten
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkWithUs;
