import { CheckCircle, Send } from 'lucide-react';
import React, { useState } from 'react';
import ContactService from '../services/contactService';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_type: '',  // Changed from serviceType to match backend
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // Handle the special case for service_type
    const fieldName = id === 'serviceType' ? 'service_type' : id;
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: null
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
    
    if (!formData.message.trim()) {
      newErrors.message = 'Beschrijf alstublieft uw schoonmaakwensen';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null);
    
    if (!validateForm()) {
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Send to API
      const response = await ContactService.sendQuoteRequest(formData);
      
      // Show success message
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_type: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setApiError('Er is een fout opgetreden. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-xl p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <CheckCircle size={50} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Offerte aanvraag verzonden!</h3>
        <p className="text-gray-600 mb-8">
          Bedankt voor uw aanvraag. We nemen binnen 24 uur contact met u op om uw wensen te bespreken en een vrijblijvende offerte op te stellen.
        </p>
        <button 
          onClick={() => setSubmitted(false)} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all"
        >
          Nieuwe aanvraag
        </button>
      </div>
    );
  }
  
  return (
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
      
      <div>
        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
          Bedrijfsnaam
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Uw bedrijfsnaam (optioneel)"
          disabled={isSubmitting}
        />
      </div>
      
      <div>
        <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">
          Type service
        </label>
        <select
          id="serviceType"
          value={formData.service_type}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          disabled={isSubmitting}
        >
          <option value="">Selecteer type service</option>
          <option value="daily">Dagelijkse schoonmaak</option>
          <option value="allround">Allround Service Plus</option>
          <option value="facility">Facilitaire diensten</option>
          <option value="school">Schoonmaak op scholen</option>
          <option value="daycare">Kinderdagverblijven</option>
          <option value="special">Specialistische reiniging</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Uw bericht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="5"
          className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
          placeholder="Beschrijf uw schoonmaakwensen..."
          disabled={isSubmitting}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      
      {apiError && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-700">{apiError}</p>
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform ${
          isSubmitting ? '' : 'hover:-translate-y-1'
        } shadow-lg hover:shadow-xl flex items-center justify-center`}
      >
        {isSubmitting ? (
          <span>Bezig met verzenden...</span>
        ) : (
          <>
            <span className="mr-2">OFFERTE AANVRAGEN</span>
            <Send size={18} />
          </>
        )}
      </button>
      
      <p className="text-gray-600 text-center text-sm pt-4">
        Waar in de regio u zich ook bevindt, wij komen graag met u in contact en doen u een passend voorstel binnen 5 werkdagen.
      </p>
    </form>
  );
};

export default QuoteForm;