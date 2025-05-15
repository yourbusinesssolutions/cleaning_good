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
      // Since we need to upload a file, we'll use FormData
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('message', data.message || '');
      
      // Handle vacancy - if no vacancy (open application), don't append
      if (data.vacancy) {
        formData.append('vacancy', data.vacancy);
      }
      
      if (data.vacancy_title) {
        formData.append('vacancy_title', data.vacancy_title);
      }
      
      // Handle file upload
      if (data.cv_file) {
        formData.append('cv_file', data.cv_file);
      }
      
      return await ApiService.post('/hr/applications/', formData, true);
    } catch (error) {
      console.error('Error submitting application:', error);
      throw error;
    }
  }
}

export default HRService;