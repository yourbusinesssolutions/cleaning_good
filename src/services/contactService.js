// src/services/contactService.js
import ApiService from '../utils/api';

class ContactService {
  static async sendContactMessage(data) {
    try {
      return await ApiService.post('/contact/message/', data);
    } catch (error) {
      console.error('Error sending contact message:', error);
      throw error;
    }
  }

  static async sendQuoteRequest(data) {
    try {
      return await ApiService.post('/contact/quote/', data);
    } catch (error) {
      console.error('Error sending quote request:', error);
      throw error;
    }
  }
}

export default ContactService;