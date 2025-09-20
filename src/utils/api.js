// src/utils/api.js
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

class ApiService {
  static async request(endpoint, options = {}) {
    const config = {
      ...options,
      headers: {
        ...(options.headers || {}),
      },
    };

    // Only set Content-Type if not FormData (browser sets it automatically with boundary for FormData)
    if (!options.skipContentType) {
      config.headers['Content-Type'] = 'application/json';
    }

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || `API Error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(`API Response for ${endpoint}:`, data); // Debug log
      return data;
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  static get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  static post(endpoint, data, isFormData = false) {
    const config = {
      method: 'POST',
      ...(isFormData
        ? { body: data, skipContentType: true }
        : { body: JSON.stringify(data) }
      ),
    };
    return this.request(endpoint, config);
  }
}

export default ApiService;