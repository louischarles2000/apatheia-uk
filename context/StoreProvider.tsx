'use client';
import { CategoryType, CurrencyType, ProductType, ReviewType } from '../types/types';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

type StoreContextType = {
  categories: CategoryType[];
  currency: CurrencyType;
  loading: boolean;
  testimonials: ReviewType[];
  featuredProducts: ProductType[];
};

export const StoreContext = createContext<StoreContextType>({
  categories: [],
  currency: {
    currency_id: 0,
    code: 'USD',
    title: 'US Dollar',
    symbol_left: '',
    symbol_right: '$',
    decimal_place: 2,
    value: 1
  },
  loading: true,
  testimonials: [],
  featuredProducts: []
}); 

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [testimonials, setTestimonials] = useState<ReviewType[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [currency, setCurrency] = useState<CurrencyType>({
    currency_id: 0,
    code: 'USD',
    title: 'US Dollar',
    symbol_left: '',
    symbol_right: '$',
    decimal_place: 2,
    value: 1
  });
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories', { params: { limit: 8 } });
      const data = await response.data.Data.categories;
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getStoreCurrency = async () => {
    try {
      const { data } = await axios.get('/api/store/currency');
      const currency: CurrencyType = data.Data;
      setCurrency(currency);
    } catch (error) {
      console.log("Error fetching store currency:", error);
    }
  } 

  const getReviews = async () => {
    try {
      const reviews = await axios.get("/api/reviews", { params: { limit: 3, rating: 5 } });
      setTestimonials(reviews.data.Data.reviews);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchFeaturedProducts = async () => {
    try {
      const { data } = await axios.get('/api/products/featured', { params: { limit: 3, page: 1 } });
      console.log('featured products:', data);
      const products: [ProductType] = data.Data.products;
      setFeaturedProducts(products);
    } catch (error) {
      console.error('Error fetching featured products:', error);
    }
  }

  useEffect(() => {
    const promises = [
      fetchCategories(),
      getStoreCurrency(),
      getReviews(),
      fetchFeaturedProducts(),
    ];
    Promise.all(promises)
      .then(() => {
        console.log('Store data fetched successfully');
      })
      .catch((error) => {
        console.error('Error fetching store data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {};
  }, []);

  return (
    <StoreContext.Provider value={{ categories, loading, currency, testimonials, featuredProducts: featuredProducts }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
