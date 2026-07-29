'use client';

import React, { useState, useMemo } from 'react';
import { products, Product } from '@/components/ProductCard/ProductsData';
import FilterDrawer from '@/components/FilterDrawer/FilterDrawer';
import { FilterState } from '@/components/FilterDrawer/Types';
import ProductCard from '@/components/ProductCard/ProductCard';
import ProductDetailsDrawer, { CartItem } from '@/components/ProductDetailsDrawer/ProductsDetailsDrawer'; 
import styles from './ProductGrid.module.css';

export default function ProductGrid() {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [drawerState, setDrawerState] = useState<'closed' | 'details' | 'cart'>('closed');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [filters, setFilters] = useState<FilterState>({
    gender: null,
    sizes: [],
    conditions: [],
    categories: [],
    sortBy: null,
  });

  const activeProduct = useMemo(() => {
    return products.find((p) => p.id === selectedProductId) || null;
  }, [selectedProductId]);

  const handleOpenDetails = (productId: string) => {
    setSelectedProductId(productId);
    setDrawerState('details');
  };

  const handleAddToCart = (newItem: Omit<CartItem, 'id'>) => {
    setCartItems((prevItems) => {

      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.product.id === newItem.product.id &&
          item.selectedSize === newItem.selectedSize &&
          item.selectedColor === newItem.selectedColor &&
          item.selectedGender === newItem.selectedGender
      );

      if (existingItemIndex > -1) {
        const updated = [...prevItems];
        updated[existingItemIndex].quantity += newItem.quantity;
        return updated;
      }

      return [
        ...prevItems,
        {
          ...newItem,
          id: `${newItem.product.id}-${newItem.selectedSize}-${newItem.selectedColor}-${Date.now()}`,
        },
      ];
    });
  };

  const handleUpdateCartQty = (id: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.gender) {
      const selectedGender = filters.gender.toLowerCase();
      result = result.filter((p) => {
        if (p.gender === 'unisex') return true;
        if (selectedGender === 'male') return p.gender === 'men';
        if (selectedGender === 'female') return p.gender === 'women';
        return false;
      });
    }

    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes?.some((size) => filters.sizes.includes(size.toUpperCase()))
      );
    }

    if (filters.categories.length > 0) {
      result = result.filter((p) => {
        const cat = p.category.toLowerCase();
        return filters.categories.some((filterCat: string) => {
          const fc = filterCat.toLowerCase();
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

    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'PRICE_LOW_HIGH':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'PRICE_HIGH_LOW':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'NEWEST':
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
      <div className={styles.filterHeader}>
        <button 
          className={styles.filterToggleBtn}
          onClick={() => setIsFilterDrawerOpen(true)}
        >
          <span className={styles.filterIcon}>⊞</span> FILTERS
        </button>
      </div>

      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onOpenDetailsModal={handleOpenDetails}
          />
        ))}
      </div>

      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        totalProducts={filteredProducts.length}
        currentFilters={filters}
        onApplyFilters={(nextFilters) => setFilters(nextFilters)}
      />

      <ProductDetailsDrawer
        product={activeProduct}
        drawerState={drawerState}
        cartItems={cartItems}
        onClose={() => setDrawerState('closed')}
        onNavigateToCart={() => setDrawerState('cart')}
        onNavigateToDetails={() => setDrawerState('details')}
        onAddToCart={handleAddToCart}
        onUpdateCartQty={handleUpdateCartQty}
      />
    </section>
  );
}