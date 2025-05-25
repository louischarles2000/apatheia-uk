"use client";
import React, { useEffect, useState } from 'react';
import Badge from '../../components/ui/Badge';
import ProductCard from '../../components/products/ProductCard';
import { useStore } from '../../context/StoreProvider';
import { ProductType } from '../../types/types';
import axios from 'axios';
import Loading from '../../components/ui/Loading';

export default function ProductsPage() {
  const { categories } = useStore();
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<ProductType[]>([]); // Initial product data
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(""); 

   // Effect to debounce the search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
      setPage(1); // Reset to first page on new search
      setProducts([]); // Clear previous results
      setHasMore(false); // Reset hasMore state
    }, 500); // 500ms debounce delay
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (page === 1) {
          setProducts([]);
          setLoading(true);
        } else {
          setLoadingMore(true);
        }
        const { data } = await axios.get('/api/products', { params: { 
          category: activeTab > 0 ? activeTab : null,
          limit: 9, 
          page,
          search: debouncedSearchQuery === '' ? null : debouncedSearchQuery
        } });
        const products = await data.Data.products;

        setHasMore(data.Data.hasNextPage);
        if (page > 1) {
          setProducts((prevProducts) => [...prevProducts, ...products]);
        } else {
          setProducts(products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };
    fetchProducts();
  }, [activeTab, page, debouncedSearchQuery]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="bg-secondary py-12">
      <div className="container-custom">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <Badge variant="primary" className="mb-3">Product Catalog</Badge>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
            Professional Personal Development Resources
          </h1>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Practical tools for meaningful personal growth to help you build habits, improve focus, and achieve your goals
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === 0 ? "bg-primary text-white" : "bg-white text-text hover:bg-primary/10"
            }`}
            onClick={() => setActiveTab(0)}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeTab === category.id ? "bg-primary text-white" : "bg-white text-text hover:bg-primary/10"
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.category_name}
            </button>
          ))}
        </div>
        
        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary pl-10"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Loading Indicator */}
        {loading && <Loading />}
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!loading && products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg text-text/70">No products found matching your criteria.</p>
          </div>
        )}

        {!loading && hasMore && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
              onClick={handleLoadMore}
            >
              {loadingMore ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
