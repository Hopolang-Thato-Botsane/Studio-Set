'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '../ProductCard/ProductsData';
import styles from './ProductDetailsDrawer.module.css';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  selectedGender: string;
}

interface ProductDetailsDrawerProps {
  product: Product | null;
  drawerState: 'closed' | 'details' | 'cart';
  cartItems: CartItem[];
  onClose: () => void;
  onNavigateToCart: () => void;
  onNavigateToDetails: () => void;
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
  onUpdateCartQty: (id: string, newQty: number) => void;
}

export default function ProductDetailsDrawer({
  product,
  drawerState,
  cartItems,
  onClose,
  onNavigateToCart,
  onNavigateToDetails,
  onAddToCart,
  onUpdateCartQty
}: ProductDetailsDrawerProps) {
  // Details Option States
  const [selectedGender, setSelectedGender] = useState<'MALE' | 'FEMALE'>('MALE');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [detailQty, setDetailQty] = useState<number>(1);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0]?.name || 'Slick Black');
      setDetailQty(1);
    }
  }, [product]);

  if (drawerState === 'closed') return null;

  const handleAddQty = () => setDetailQty(p => p + 1);
  const handleSubQty = () => setDetailQty(p => (p > 1 ? p - 1 : 1));

  const handleAddToCartClick = () => {
    if (!product) return;
    onAddToCart({
      product,
      quantity: detailQty,
      selectedSize,
      selectedColor,
      selectedGender
    });

    onNavigateToCart();
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />

      <div className={styles.drawer}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>
            {drawerState === 'details' ? 'Available Options' : 'Your Cart'}
          </span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close panel">✕</button>
        </div>

        {drawerState === 'details' && product && (
          <div className={styles.scrollableContent}>
            <div className={styles.heroImageContainer}>
              <img src={product.image} alt={product.name} className={styles.heroImage} />
            </div>

            <div className={styles.detailsContent}>
              <h2 className={styles.productName}>{product.name}</h2>
              <span className={styles.price}>R {product.price}</span>
              <span className={styles.taxNotice}>Tax Included. Shipping Calculated At Checkout</span>

              <div className={styles.reviewsRow}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.reviewCount}>10 Reviews</span>
              </div>

              <div className={styles.optionsBlock}>
                <span className={styles.label}>Gender:</span>
                <div className={styles.genderRow}>
                  <button 
                    className={`${styles.toggleBtn} ${selectedGender === 'MALE' ? styles.toggleBtnActive : ''}`}
                    onClick={() => setSelectedGender('MALE')}
                  >
                    MALE
                  </button>
                  <button 
                    className={`${styles.toggleBtn} ${selectedGender === 'FEMALE' ? styles.toggleBtnActive : ''}`}
                    onClick={() => setSelectedGender('FEMALE')}
                  >
                    FEMALE
                  </button>
                </div>
              </div>

              <div className={styles.optionsBlock}>
                <span className={styles.label}>Sizes:</span>
                <div className={styles.sizesRow}>
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeBtnActive : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.optionsBlock}>
                <span className={styles.label}>Colours:</span>
                <div className={styles.colorsRow}>
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      className={`${styles.colorSwatch} ${selectedColor === color.name ? styles.colorSwatchActive : ''}`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.actionRow}>
                <div className={styles.quantityContainer}>
                  <button className={styles.qtyBtn} onClick={handleSubQty}>—</button>
                  <span className={styles.qtyCount}>{detailQty}</span>
                  <button className={styles.qtyBtn} onClick={handleAddQty}>+</button>
                </div>
                <button className={styles.primaryActionButton} onClick={handleAddToCartClick}>
                  Add To Cart <span className={styles.arrowIcon}>→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {drawerState === 'cart' && (
          <div className={styles.cartContentContainer}>
            <div className={styles.shippingBar}>
              <span>Free Standard Shipping</span>
            </div>

            <div className={styles.cartItemsScrollList}>
              {cartItems.length === 0 ? (
                <div className={styles.emptyCartMessage}>
                  Your cart is currently empty.
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className={styles.cartItemCard}>
                    <div className={styles.cartItemThumbnail}>
                      <img src={item.product.image} alt={item.product.name} />
                    </div>

                    <div className={styles.cartItemMeta}>
                      <span className={styles.cartItemName}>{item.product.name}</span>
                      <span className={styles.cartItemSubInfo}>Size: {item.selectedSize}</span>
                      <span className={styles.cartItemSubInfo}>Colour: {item.selectedColor.toUpperCase()}</span>
                      <span className={styles.cartItemPrice}>R {item.product.price}</span>
                    </div>

                    <div className={styles.cartQtyContainer}>
                      <button 
                        className={styles.cartQtyBtn} 
                        onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
                      >
                        —
                      </button>
                      <span className={styles.cartQtyCount}>{item.quantity}</span>
                      <button 
                        className={styles.cartQtyBtn} 
                        onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className={styles.cartFooterPanel}>
              <div className={styles.cartTotalRow}>
                <span className={styles.totalLabel}>Cart Total:</span>
                <span className={styles.totalPrice}>R {cartTotal}</span>
              </div>

              <div className={styles.cartActionButtonsRow}>
                <button className={styles.continueShoppingBtn} onClick={onClose}>
                  Continue Shopping
                </button>
                <button 
                  className={styles.checkoutBtn} 
                  disabled={cartItems.length === 0}
                  onClick={() => alert("Redirecting to checkout...")}
                >
                  Checkout <span className={styles.arrowIcon}>→</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}