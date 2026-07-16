'use client';

import React from 'react';
import { Product } from './ProductsData';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  onOpenDetailsModal: (productId: string) => void;
}

export default function ProductCard({ product, onOpenDetailsModal }: ProductCardProps) {
  return (
    <div 
      className={styles.productCard}
      onClick={() => onOpenDetailsModal(product.id)}
    >
      <div className={styles.imageContainer}>
        <div className={styles.placeholderImg} />
      </div>

      <h3 className={styles.productTitle}>{product.name}</h3>

      <button 
        className={styles.actionButton} 
        data-price={product.price}
      />
    </div>
  );
}