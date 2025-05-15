// src/hooks/useProducts.js
import { useEffect, useState } from 'react';
import ProductService from '../services/productService';

export const useProducts = (filters = {}) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [filters.category, filters.search, filters.price_range, filters.ordering]);

  const fetchCategories = async () => {
    try {
      const response = await ProductService.getCategories();
      // Handle paginated response
      const categoriesData = response.results || response;
      
      // Transform backend data to match frontend structure
      const transformedCategories = [
        { id: 'all', name: 'Alle producten', count: categoriesData.reduce((sum, cat) => sum + cat.count, 0) },
        ...categoriesData.map(cat => ({
          id: cat.id,
          name: cat.name,
          count: cat.count
        }))
      ];
      setCategories(transformedCategories);
    } catch (err) {
      setError('Failed to load categories');
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Build query parameters
      const params = {};
      if (filters.category && filters.category !== 'all') {
        params.category = filters.category;
      }
      if (filters.search) {
        params.search = filters.search;
      }
      if (filters.price_range) {
        params.price_range = filters.price_range;
      }
      if (filters.ordering) {
        params.ordering = filters.ordering === 'price-low' ? 'price' : 
                         filters.ordering === 'price-high' ? '-price' : 
                         'name';
      }

      const response = await ProductService.getProducts(params);
      // Handle both paginated and non-paginated responses
      setProducts(response.results || response);
      setTotalCount(response.count || (response.results || response).length);
    } catch (err) {
      setError('Failed to load products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { products, categories, loading, error, totalCount };
};