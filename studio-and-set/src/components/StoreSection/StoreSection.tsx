'use client';

import React, { useState } from 'react';
import { products, Product } from '../ProductCard/ProductsData';
import ProductCard from '../ProductCard/ProductCard';
import ProductDetailsDrawer, { CartItem } from '../ProductDetailsDrawer/ProductsDetailsDrawer';
import styles from './StoreSection.module.css';

interface StoreSectionProps {
  onNavigateToFullStore?: () => void;
}

export default function StoreSection({ onNavigateToFullStore }: StoreSectionProps) {
  const [drawerState, setDrawerState] = useState<'closed' | 'details' | 'cart'>('closed');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const featuredProducts = products.filter((product) => product.featured);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const hasCartItems = cartItemCount > 0;

  const handleOpenDetails = (productId: string) => {
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setSelectedProduct(foundProduct);
      setDrawerState('details');
    }
  };

  const handleOpenCart = () => {
    setDrawerState('cart');
  };

  const handleCloseDrawer = () => {
    setDrawerState('closed');
  };

  const handleAddToCart = (newItem: Omit<CartItem, 'id'>) => {
    const selectionId = `${newItem.product.id}-${newItem.selectedSize}-${newItem.selectedColor}-${newItem.selectedGender}`;

    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(item => item.id === selectionId);

      if (existingItemIndex > -1) {
        const updated = [...prevItems];
        updated[existingItemIndex].quantity += newItem.quantity;
        return updated;
      } else {
        return [...prevItems, { ...newItem, id: selectionId }];
      }
    });
  };

  const handleUpdateCartQty = (id: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleMainActionClick = () => {
    if (hasCartItems) {
      handleOpenCart();
    } else if (onNavigateToFullStore) {
      onNavigateToFullStore();
    }
  };

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.heading}>Store</h2>

        <div className={styles.grid}>
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOpenDetailsModal={handleOpenDetails} 
            />
          ))}
        </div>

        <div className={styles.footerRow}>
          <button className={styles.visitStoreBtn} onClick={handleMainActionClick}>
            {hasCartItems ? 'View Cart' : 'Visit Store'}
          </button>
        </div>
      </section>

      <ProductDetailsDrawer
        product={selectedProduct}
        drawerState={drawerState}
        cartItems={cartItems}
        onClose={handleCloseDrawer}
        onNavigateToCart={() => setDrawerState('cart')}
        onNavigateToDetails={() => setDrawerState('details')}
        onAddToCart={handleAddToCart}
        onUpdateCartQty={handleUpdateCartQty}
      />
    </>
  );
}