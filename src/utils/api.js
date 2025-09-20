// src/utils/api.js
// Use production API URL by default, fallback to environment variable or localhost
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://allroundcleaningbackend-production.up.railway.app/api';

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

    // Log the request for debugging
    console.log(`API Request: ${config.method || 'GET'} ${API_BASE_URL}${endpoint}`);

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

      if (!response.ok) {
        let errorData = {};
        try {
          errorData = await response.json();
        } catch (e) {
          // Response might not be JSON
          errorData = { detail: `Server error: ${response.status} ${response.statusText}` };
        }

        const error = new Error(errorData.detail || errorData.message || `API Error: ${response.status}`);
        error.response = {
          status: response.status,
          statusText: response.statusText,
          data: errorData
        };
        throw error;
      }

      // Handle empty response (204 No Content)
      if (response.status === 204) {
        return null;
      }

      const data = await response.json();
      console.log(`API Response for ${endpoint}:`, data); // Debug log
      return data;
    } catch (error) {
      console.error('API Request failed:', error);

      // Check if it's a network error
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        const networkError = new Error('Netwerkfout: Kan geen verbinding maken met de server. Controleer uw internetverbinding.');
        networkError.isNetworkError = true;
        networkError.originalError = error;
        throw networkError;
      }

      // Enhance error with request info if not already present
      if (!error.response && !error.request) {
        error.request = { endpoint, method: config.method };
      }

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