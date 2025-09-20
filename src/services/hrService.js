// src/services/hrService.js
import ApiService from '../utils/api';

class HRService {
  static async getVacancies() {
    try {
      return await ApiService.get('/hr/vacancies/');
    } catch (error) {
      console.error('Error fetching vacancies:', error);
      throw error;
    }
  }

  static async getVacancyDetail(id) {
    try {
      return await ApiService.get(`/hr/vacancies/${id}/`);
    } catch (error) {
      console.error('Error fetching vacancy detail:', error);
      throw error;
    }
  }

  static async submitApplication(data) {
    try {
      // Use FormData for the submission (even without file upload, backend expects multipart)
      const formData = new FormData();
      formData.append('name', data.name || '');
      formData.append('email', data.email || '');
      formData.append('phone', data.phone || '');
      formData.append('message', data.message || '');

      // Handle vacancy - if no vacancy (open application), don't append
      if (data.vacancy) {
        formData.append('vacancy', data.vacancy);
      }

      if (data.vacancy_title) {
        formData.append('vacancy_title', data.vacancy_title);
      }

      // Log for debugging
      console.log('Submitting application with data:', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        vacancy: data.vacancy,
        vacancy_title: data.vacancy_title
      });

      return await ApiService.post('/hr/applications/', formData, true);
    } catch (error) {
      console.error('Error submitting application:', error);
      // Enhance error for better handling in component
      if (error.response?.data) {
        // If there are field-specific errors, format them nicely
        const fieldErrors = error.response.data;
        if (typeof fieldErrors === 'object' && !fieldErrors.detail) {
          const errorMessages = Object.entries(fieldErrors)
            .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : errors}`)
            .join('\n');
          error.message = errorMessages;
        }
      }
      throw error;
    }
  }
}

export default HRService;