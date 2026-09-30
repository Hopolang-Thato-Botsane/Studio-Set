'use client';

import React from 'react';
import Image from 'next/image';
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
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className={styles.productImg}
        />
      </div>

      <h3 className={styles.productTitle}>{product.name}</h3>

      <button 
        className={styles.actionButton} 
        data-price={product.price}
      />
    </div>
  );
}