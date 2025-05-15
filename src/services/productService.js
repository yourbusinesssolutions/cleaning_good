// src/services/productService.js
import ApiService from '../utils/api';

class ProductService {
  static async getCategories() {
    try {
      // Add page_size parameter to get all categories without pagination limit
      return await ApiService.get('/products/categories/?page_size=100');
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  static async getProducts(params = {}) {
    try {
      const queryString = new URLSearchParams(params).toString();
      const endpoint = `/products/${queryString ? `?${queryString}` : ''}`;
      return await ApiService.get(endpoint);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  static async getProductDetail(id) {
    try {
      return await ApiService.get(`/products/${id}/`);
    } catch (error) {
      console.error('Error fetching product detail:', error);
      throw error;
    }
  }

  static async createInquiry(data) {
    try {
      return await ApiService.post('/products/inquiries/', data);
    } catch (error) {
      console.error('Error creating inquiry:', error);
      throw error;
    }
  }
}

export default ProductService;