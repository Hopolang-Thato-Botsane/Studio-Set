'use client';

import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css'

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.drawerContainer} onClick={(e) => e.stopPropagation()}>
        
        <div className={styles.drawerHeader}>
          <h2 className={styles.headerTitle}>Your Basket</h2>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        <div className={styles.drawerBody}>
          {cart.length === 0 ? (
            <div className={styles.emptyState}>
              <p>Your basket is currently empty.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className={styles.cartItemRow}>
                <div 
                  className={styles.itemThumbnail} 
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                
                <div className={styles.itemMeta}>
                  <span className={styles.itemBrand}>{item.brand}</span>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <span className={styles.itemSize}>Size: {item.size}</span>
                  
                  <div className={styles.quantityControls}>
                    <button 
                      className={styles.qtyButton} 
                      onClick={() => updateQuantity(item.id, item.size, -1)}
                    >
                      -
                    </button>
                    <span className={styles.qtyValue}>{item.quantity}</span>
                    <button 
                      className={styles.qtyButton} 
                      onClick={() => updateQuantity(item.id, item.size, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className={styles.priceActionGroup}>
                  <span className={styles.itemPriceLine}>R {item.price * item.quantity}</span>
                  <button 
                    className={styles.removeAction} 
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.drawerFooter}>
            <div className={styles.totalRow}>
              <span>Subtotal</span>
              <span className={styles.totalPriceAmount}>R {cartTotal}</span>
            </div>
            
            <button 
              className={styles.checkoutButton}
              onClick={() => {
                onClose(); // Automatically tuck the drawer away
                router.push('/checkout'); // Route straight to the checkout page
              }}
            >
              Proceed to Secure Checkout
            </button>
            
            <button className={styles.clearAllButton} onClick={clearCart}>
              Clear Basket
            </button>
          </div>
        )}

      </div>
    </div>
  );
}