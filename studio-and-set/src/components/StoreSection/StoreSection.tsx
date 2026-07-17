'use client';

import React, { useState } from 'react';
import { products, Product } from '../ProductCard/ProductsData';
import ProductCard from '../ProductCard/ProductCard';
import ProductDetailsDrawer from '../ProductDetailsDrawer/ProductsDetailsDrawer';
import { useCart } from '@/context/CartContext';
import styles from './StoreSection.module.css';

interface StoreSectionProps {
  onNavigateToFullStore?: () => void;
}

export default function StoreSection({ onNavigateToFullStore }: StoreSectionProps) {
  const [drawerState, setDrawerState] = useState<'closed' | 'details' | 'cart'>('closed');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Connect cleanly to your global cart context state
  const { cart, addToCart, updateQuantity } = useCart();

  const featuredProducts = products.filter((product) => product.featured);
  
  // Calculate item totals using the real global state
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
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

  const handleAddToCart = (newItem: any) => {
    addToCart({
      id: newItem.product.id,
      title: newItem.product.title,
      brand: newItem.product.brand || 'Studio & Set',
      price: newItem.product.price,
      imageUrl: newItem.product.imageUrl || '',
      size: newItem.selectedSize,
    });
  };

  const handleUpdateCartQty = (id: string, newQty: number) => {
    const item = cart.find(i => i.id === id);
    if (item) {
      const delta = newQty - item.quantity;
      updateQuantity(id, item.size, delta);
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
        cartItems={cart as any}
        onClose={handleCloseDrawer}
        onNavigateToCart={() => setDrawerState('cart')}
        onNavigateToDetails={() => setDrawerState('details')}
        onAddToCart={handleAddToCart}
        onUpdateCartQty={handleUpdateCartQty}
      />
    </>
  );
}