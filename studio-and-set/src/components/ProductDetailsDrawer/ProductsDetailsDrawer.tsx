'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './ProductDetailsDrawer.module.css';

export interface DrawerCartItem {
  id: string;
  title: string;
  brand: string;
  price: number;
  imageUrl: string;
  size: string;
  quantity: number;
}

interface ProductDetailsDrawerProps {
  product: any;
  drawerState: 'closed' | 'details' | 'cart';
  cartItems: DrawerCartItem[];
  onClose: () => void;
  onNavigateToCart: () => void;
  onNavigateToDetails: () => void;
  onAddToCart: (item: { product: any; selectedSize: string }) => void;
  onUpdateCartQty: (id: string, newQty: number) => void;
}

export default function ProductDetailsDrawer({
  product,
  drawerState,
  cartItems = [],
  onClose,
  onNavigateToCart,
  onNavigateToDetails,
  onAddToCart,
  onUpdateCartQty,
}: ProductDetailsDrawerProps) {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = React.useState<string>('');

  // 1. Hook declared at the top level unconditionally
  React.useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0 && !selectedSize) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product, selectedSize]);

  // 2. Early return must ALWAYS come AFTER all hook declarations
  if (drawerState === 'closed') return null;

  // Calculate totals safely
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>
            {drawerState === 'details' ? 'Product Details' : 'Your Basket'}
          </h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close details drawer">
            ✕
          </button>
        </div>

        {drawerState === 'details' && product ? (
          <div className={styles.scrollableContent}>
            <div className={styles.heroImageContainer}>
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className={styles.heroImage} 
              />
            </div>
            <div className={styles.detailsContent}>
              <span className={styles.label}>{product.brand || 'Studio & Set'}</span>
              <h3 className={styles.productName}>{product.title}</h3>
              <p className={styles.taxNotice}>{product.description}</p>
              <span className={styles.price}>R {product.price}</span>

              {product.sizes && (
                <div className={styles.optionsBlock}>
                  <span className={styles.label}>Select Size:</span>
                  <div className={styles.sizesRow}>
                    {product.sizes.map((size: string) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeBtnActive : ''}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.actionRow}>
                <button
                  type="button"
                  className={styles.primaryActionButton}
                  onClick={() => {
                    onAddToCart({ product, selectedSize });
                    onNavigateToCart();
                  }}
                >
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.cartContentContainer}>
            <div className={styles.shippingBar}>
              Complimentary shipping on orders over R 1500
            </div>
            
            {cartItems.length === 0 ? (
              <div className={styles.emptyCartMessage}>
                <p>Your basket is currently empty.</p>
                {product && (
                  <button type="button" className={styles.continueShoppingBtn} onClick={onNavigateToDetails}>
                    ← Back to Product
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className={styles.cartItemsScrollList}>
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.size}`} className={styles.cartItemCard}>
                      <div className={styles.cartItemThumbnail}>
                        <img src={item.imageUrl} alt={item.title} />
                      </div>
                      <div className={styles.cartItemMeta}>
                        <span className={styles.cartItemSubInfo}>{item.brand}</span>
                        <h4 className={styles.cartItemName}>{item.title}</h4>
                        <span className={styles.cartItemSubInfo}>Size: {item.size}</span>
                        
                        <div className={styles.cartQtyContainer} style={{ marginTop: '0.5rem' }}>
                          <button 
                            type="button" 
                            className={styles.cartQtyBtn} 
                            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className={styles.cartQtyCount}>{item.quantity}</span>
                          <button 
                            type="button" 
                            className={styles.cartQtyBtn} 
                            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className={styles.cartItemPrice}>
                        <span>R {item.price * item.quantity}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.cartFooterPanel}>
                  <div className={styles.cartTotalRow}>
                    <span className={styles.totalLabel}>Subtotal</span>
                    <span className={styles.totalPrice}>R {cartTotal}</span>
                  </div>
                  
                  <div className={styles.cartActionButtonsRow}>
                    <button 
                      type="button"
                      className={styles.checkoutBtn}
                      onClick={() => {
                        onClose();
                        router.push('/checkout');
                      }}
                    >
                      Secure Checkout <span className={styles.arrowIcon}>→</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}