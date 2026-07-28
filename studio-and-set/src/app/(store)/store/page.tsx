import React from 'react';
import StoreHero from '@/components/StoreHero/StoreHero';
import styles from './store.module.css';
import ProductGrid from '@/components/ProductGrid/ProductGrid'
// import StoreFooter from '@/components/StoreFooter/StoreFooter'

export default function StorePage() {
  return (
    <main className={styles.storeContainer}>
      <StoreHero />
      
      <section className={styles.productGridSection}>
        <ProductGrid />
      </section>
{/* 
      <StoreFooter/> */}
    </main>
  );
}