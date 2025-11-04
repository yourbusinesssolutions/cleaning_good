// src/services/orderService.js
import ApiService from '../utils/api';
import CartService from './cartService';

class OrderService {
  static async createOrder(orderData) {
    try {
      const sessionKey = CartService.getSessionKey();
      const response = await ApiService.post('/products/orders/', {
        ...orderData,
        session_key: sessionKey
      });

      // Clear session key after successful order
      CartService.clearSessionKey();

      return response;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }

  static async getOrder(orderId) {
    try {
      const response = await ApiService.get(`/products/orders/${orderId}/`);
      return response;
    } catch (error) {
      console.error('Error fetching order:', error);
      throw error;
    }
  }
}

export default OrderService;
