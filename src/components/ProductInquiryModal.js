// src/components/ProductInquiryModal.js
import { CheckCircle, Send, X } from 'lucide-react';
import React, { useState } from 'react';
import { useToast } from '../contexts/ToastContext';
import ProductService from '../services/productService';

const ProductInquiryModal = ({ isOpen, onClose, product }) => {
  const { showSuccess, showError } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: 1,
    message: ''
  });
  
  const [activeTab, setActiveTab] = useState('details'); // 'details' or 'inquiry'
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
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
    
    if (formData.quantity < 1) {
      newErrors.quantity = 'Aantal moet minimaal 1 zijn';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      setIsSubmitting(true);
      setErrors({});
      
      const inquiryData = {
        ...formData,
        product: product.id
      };
      
      await ProductService.createInquiry(inquiryData);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          quantity: 1,
          message: ''
        });
        setIsSuccess(false);
        onClose();
      }, 3000);
      
    } catch (error) {
      // Handle 502 error specially
      if (error.response?.status === 502) {
        showSuccess('Uw aanvraag is waarschijnlijk ontvangen! We nemen binnen 24 uur contact met u op.');
        setIsSuccess(true);
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            quantity: 1,
            message: ''
          });
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        const errorMessage = error.response?.data?.message || 'Er is een fout opgetreden. Probeer het later opnieuw.';
        setErrors({ submit: errorMessage });
        showError(errorMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Render product details content
  const renderDetailsTab = () => (
    <div>
      {/* Product Image and Basic Info */}
      <div className="mb-6 grid md:grid-cols-2 gap-6">
        <div className="h-64 overflow-hidden rounded-lg">
          <img 
            src={product.image_url || 'https://via.placeholder.com/400x300?text=No+Image'} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold text-blue-600">€{parseFloat(product.price).toFixed(2)}</div>
            <span className={`text-sm px-3 py-1 rounded-full ${
              product.in_stock 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {product.in_stock ? 'Op voorraad' : 'Uitverkocht'}
            </span>
          </div>
          
          {product.sku && (
            <p className="text-gray-500 mb-2">
              <span className="font-medium">Artikelnr:</span> {product.sku}
            </p>
          )}
          
          {product.category_name && (
            <p className="text-gray-500 mb-4">
              <span className="font-medium">Categorie:</span> {product.category_name}
            </p>
          )}
          
          {product.in_stock && (
            <button
              onClick={() => setActiveTab('inquiry')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
            >
              Offerte aanvragen
            </button>
          )}
        </div>
      </div>
      
      {/* Product Description - Fixed to stay within frame and properly structured */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Productbeschrijving</h3>
        <div className="prose max-w-none overflow-auto">
          {/* Using whitespace-pre-wrap to preserve line breaks but allow text wrapping */}
          <p className="text-gray-700 whitespace-pre-wrap break-words">
            {product.description}
          </p>
        </div>
      </div>
      
      {/* Product Features/Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Specificaties</h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex justify-between p-3">
                  <span className="font-medium text-gray-700">{spec.name}</span>
                  <span className="text-gray-600">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {/* Product Usage/Application */}
      {product.applications && (
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Toepassingen</h3>
          <p className="text-gray-700 whitespace-pre-wrap break-words">{product.applications}</p>
        </div>
      )}
    </div>
  );

  // Render success message
  const renderSuccessMessage = () => (
    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
          <CheckCircle size={40} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Aanvraag verzonden!</h3>
      <p className="text-gray-600">
        Wij nemen zo spoedig mogelijk contact met u op met prijsinformatie.
      </p>
    </div>
  );

  // Render inquiry form
  const renderInquiryForm = () => (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Product Info Summary */}
      <div className="bg-gray-50 rounded-lg p-4 mb-3">
        <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">€{parseFloat(product.price).toFixed(2)}</span>
          <span className="text-sm text-gray-500">Per stuk</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="uw@email.nl"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Telefoonnummer <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="06-12345678"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Uw bedrijf (optioneel)"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
            Aantal <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            min="1"
            className={`w-full px-4 py-3 border ${errors.quantity ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
        </div>
        
        <div className="flex items-end">
          <div className="bg-blue-50 rounded-lg p-3 w-full text-center">
            <p className="text-sm text-blue-600">Totaalprijs indicatie</p>
            <p className="text-xl font-bold text-blue-700">
              €{(parseFloat(product.price) * formData.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Bericht
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Eventuele opmerkingen of speciale wensen..."
        ></textarea>
      </div>
      
      {errors.submit && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-700">{errors.submit}</p>
        </div>
      )}
      
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex-1 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center`}
        >
          {isSubmitting ? (
            <span>Verzenden...</span>
          ) : (
            <>
              <span className="mr-2">Aanvraag versturen</span>
              <Send size={18} />
            </>
          )}
        </button>
        
        <button
          type="button"
          onClick={() => setActiveTab('details')}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
        >
          Terug naar details
        </button>
      </div>
    </form>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <button 
            className="text-gray-500 hover:text-gray-800 transition-colors"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`py-3 px-4 font-medium ${
                activeTab === 'details' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('details')}
            >
              Productdetails
            </button>
            <button
              className={`py-3 px-4 font-medium ${
                activeTab === 'inquiry' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('inquiry')}
            >
              Offerte aanvragen
            </button>
          </div>

          {/* Tab content */}
          {activeTab === 'details' ? (
            renderDetailsTab()
          ) : (
            isSuccess ? renderSuccessMessage() : renderInquiryForm()
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInquiryModal;