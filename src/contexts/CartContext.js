// src/contexts/CartContext.js
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import CartService from '../services/cartService';
import { useToast } from './ToastContext';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0, item_count: 0 });
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  // Fetch cart on mount
  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      const cartData = await CartService.getCart();
      setCart(cartData);
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCart({ items: [], total: 0, item_count: 0 });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Add item to cart
  const addToCart = async (productId, quantity = 1) => {
    try {
      setLoading(true);
      const updatedCart = await CartService.addToCart(productId, quantity);
      setCart(updatedCart);
      showToast('Product toegevoegd aan winkelwagen', 'success');
      return updatedCart;
    } catch (error) {
      console.error('Error adding to cart:', error);
      showToast('Kon product niet toevoegen aan winkelwagen', 'error');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update cart item quantity
  const updateCartItem = async (itemId, quantity) => {
    try {
      setLoading(true);
      const updatedCart = await CartService.updateCartItem(itemId, quantity);
      setCart(updatedCart);
      return updatedCart;
    } catch (error) {
      console.error('Error updating cart item:', error);
      showToast('Kon winkelwagen niet bijwerken', 'error');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    try {
      setLoading(true);
      const updatedCart = await CartService.removeCartItem(itemId);
      setCart(updatedCart);
      showToast('Product verwijderd uit winkelwagen', 'success');
      return updatedCart;
    } catch (error) {
      console.error('Error removing from cart:', error);
      showToast('Kon product niet verwijderen', 'error');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Clear cart
  const clearCart = async () => {
    try {
      setLoading(true);
      await CartService.clearCart();
      setCart({ items: [], total: 0, item_count: 0 });
      showToast('Winkelwagen geleegd', 'success');
    } catch (error) {
      console.error('Error clearing cart:', error);
      showToast('Kon winkelwagen niet legen', 'error');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Get cart item count
  const getCartItemCount = () => {
    return cart.item_count || 0;
  };

  // Get cart total
  const getCartTotal = () => {
    return cart.total || 0;
  };

  const value = {
    cart,
    loading,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    fetchCart,
    getCartItemCount,
    getCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
