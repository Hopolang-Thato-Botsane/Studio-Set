'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  brand?: string;
  title: string;
  price: string | number;
  imageUrl?: string;
  iconUrl?: string;
  sizes?: string[];
}

export default function ProductCard({ 
  brand = 'Studio&Set', 
  title, 
  price, 
  imageUrl,
  iconUrl,
  sizes = [] 
}: ProductCardProps) {
  
  const { addToCart } = useCart();

  const handleCardClick = () => {
    console.log(`Navigating to details page for ${title}`);
  };

  const handleBadgeClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const numericPrice = typeof price === 'number' ? price : parseFloat(String(price).replace(/[^0-9.]/g, '')) || 0;

    addToCart({
      id: title.toLowerCase().replace(/\s+/g, '-'),
      title,
      brand,
      price: numericPrice,
      imageUrl: imageUrl || '',
      size: 'M' 
    });

    console.log(`Successfully added ${title} (Size M) to the global ledger.`);
  };

  return (
    <div className={styles.productCard} onClick={handleCardClick}>

      <div className={styles.imageScaleClip}>
        <div 
          className={styles.imageFrame} 
          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
        />
        
        <button 
          className={styles.iconBadge} 
          onClick={handleBadgeClick}
          type="button"
          aria-label="Add to basket"
        >
          <img 
            src="/MerchandiseCart.svg" 
            alt="Basket" 
            className={styles.basketSvg} 
          />
        </button>
      </div>

      <div className={styles.metaRow}>
        <div className={styles.titleBlock}>
          <span className={styles.brandName}>{brand}</span>
          <span className={styles.itemName}>{title}</span>
        </div>
        <span className={styles.itemPrice}>
          {typeof price === 'number' ? `R${price}` : price}
        </span>
      </div>

    </div>
  );
}