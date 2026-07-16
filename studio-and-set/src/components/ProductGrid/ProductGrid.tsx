// src/components/ProductGrid/ProductGrid.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { products, Product } from '../ProductCard/ProductsData'; // Pulls the exact types & array
import FilterDrawer from '@/components/FilterDrawer/FilterDrawer';
import { FilterState } from '@/components/FilterDrawer/Types';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    gender: null, // 'MALE' | 'FEMALE' | null
    sizes: [],
    conditions: [], // Placeholder container
    categories: [], // ['TROUSERS', 'SHIRTS', etc.] from filter modal
    sortBy: null,
  });

  // Filter and Sort calculations aligned directly with your data properties
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Gender Filter (maps filter MALE/FEMALE to data 'men'/'women'/'unisex')
    if (filters.gender) {
      const selectedGender = filters.gender.toLowerCase(); // 'male' or 'female'
      result = result.filter((p) => {
        if (p.gender === 'unisex') return true;
        if (selectedGender === 'male') return p.gender === 'men';
        if (selectedGender === 'female') return p.gender === 'women';
        return false;
      });
    }

    // 2. Sizes Filter
    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes?.some((size) => filters.sizes.includes(size.toUpperCase()))
      );
    }

    // 3. Categories Filter (Maps trousers/shirts to apparel, etc. safely)
    if (filters.categories.length > 0) {
      result = result.filter((p) => {
        const cat = p.category.toLowerCase();
        return filters.categories.some((filterCat) => {
          const fc = filterCat.toLowerCase();
          // Safe mapping of UI filter categories to schema categories
          if (fc === 'trousers' || fc === 'shirts' || fc === 'outerwear') {
            return cat === 'apparel';
          }
          if (fc === 'accessories') {
            return cat === 'accessories';
          }
          return false;
        });
      });
    }

    // 4. Sorting Logic
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'PRICE_LOW_HIGH':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'PRICE_HIGH_LOW':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'NEWEST':
          // Sort by ID order as a safe fallback for default entry sequence
          result.sort((a, b) => b.id.localeCompare(a.id));
          break;
        case 'OLDEST':
          result.sort((a, b) => a.id.localeCompare(b.id));
          break;
      }
    }

    return result;
  }, [filters]);

  return (
    <section className={styles.gridSection}>
      {/* Filters Toggle Button Row */}
      <div className={styles.filterHeader}>
        <button 
          className={styles.filterToggleBtn}
          onClick={() => setIsDrawerOpen(true)}
        >
          <span className={styles.filterIcon}>⊞</span> FILTERS
        </button>
      </div>

      {/* Grid wrapper rendering your custom design cards */}
      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onOpenDetailsModal={(productId: string) => {
              // 100% matched to your ProductCardProps definition!
              console.log("Opening details modal for product ID:", productId);
            }}
          />
        ))}
      </div>

      {/* Slide-out Filter Panel */}
      <FilterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        totalProducts={filteredProducts.length}
        currentFilters={filters}
        onApplyFilters={(nextFilters) => setFilters(nextFilters)}
      />
    </section>
  );
}