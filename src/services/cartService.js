// src/services/cartService.js
import ApiService from '../utils/api';

class CartService {
  static getSessionKey() {
    return localStorage.getItem('cart_session_key');
  }

  static setSessionKey(sessionKey) {
    if (sessionKey) {
      localStorage.setItem('cart_session_key', sessionKey);
    }
  }

  static clearSessionKey() {
    localStorage.removeItem('cart_session_key');
  }

  static async getCart() {
    try {
      const sessionKey = this.getSessionKey();
      const params = sessionKey ? `?session_key=${sessionKey}` : '';
      const response = await ApiService.get(`/products/cart/${params}`);

      // Store session key if returned
      if (response.session_key) {
        this.setSessionKey(response.session_key);
      }

      return response;
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error;
    }
  }

  static async addToCart(productId, quantity = 1) {
    try {
      const sessionKey = this.getSessionKey();
      const response = await ApiService.post('/products/cart/add/', {
        product_id: productId,
        quantity,
        session_key: sessionKey
      });

      // Store session key if returned
      if (response.session_key) {
        this.setSessionKey(response.session_key);
      }

      return response;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  }

  static async updateCartItem(itemId, quantity) {
    try {
      const sessionKey = this.getSessionKey();
      const response = await ApiService.patch(`/products/cart/items/${itemId}/`, {
        quantity,
        session_key: sessionKey
      });

      return response;
    } catch (error) {
      console.error('Error updating cart item:', error);
      throw error;
    }
  }

  static async removeCartItem(itemId) {
    try {
      const sessionKey = this.getSessionKey();
      const response = await ApiService.delete(
        `/products/cart/items/${itemId}/remove/?session_key=${sessionKey}`
      );

      return response;
    } catch (error) {
      console.error('Error removing cart item:', error);
      throw error;
    }
  }

  static async clearCart() {
    try {
      const sessionKey = this.getSessionKey();
      const response = await ApiService.delete(`/products/cart/clear/?session_key=${sessionKey}`);

      return response;
    } catch (error) {
      console.error('Error clearing cart:', error);
      throw error;
    }
  }
}

export default CartService;
