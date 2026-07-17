'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Checkout.module.css';

export default function CheckoutPage() {
  const { cart, updateQuantity, cartTotal, cartCount } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'gpay' | 'applepay'>('card');

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mock Purchase Successful! Your order has been placed.');s
    window.location.href = '/';
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Checkout</h1>
        <Link href="/" className={styles.closeButton} aria-label="Go back to store">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </Link>
      </header>

      <div className={styles.mainLayout}>
        <section className={styles.cartSection}>
          <div>
            <h2 className={styles.sectionTitle}>In Cart</h2>
            
            {cart.length === 0 ? (
              <div className="py-12 text-center opacity-60">
                Your cart is empty. Please add items from the store first!
              </div>
            ) : (
              <div className={styles.itemsList}>
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className={styles.cartItem}>
                    <div className={styles.imagePlaceholder}>
                      {item.imageUrl && (
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className={styles.productImage}
                        />
                      )}
                    </div>
                    
                    <div className={styles.itemDetails}>
                      <h3 className={styles.itemName}>{item.title}</h3>
                      <p className={styles.itemMeta}>Size: {item.size}</p>
                      <p className={styles.itemMeta}>Brand: {item.brand}</p>
                      
                      <div className={styles.quantityControl}>
                        <button 
                          type="button" 
                          onClick={() => updateQuantity(item.id, item.size, -1)} 
                          className={styles.qtyBtn}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          type="button" 
                          onClick={() => updateQuantity(item.id, item.size, 1)} 
                          className={styles.qtyBtn}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className={styles.itemPrice}>R {item.price * item.quantity}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.footerRow}>
            <span className={styles.itemCount}>{cartCount} items in total</span>
            <span className={styles.totalAmount}>R {cartTotal}</span>
          </div>
        </section>

        <form onSubmit={handleCheckoutSubmit} className={styles.infoSidebar}>
          <h2 className={styles.sidebarTitle}>Information</h2>

          {paymentMethod === 'card' && (
            <>
              <h3 className={styles.formGroupTitle}>Personal Information</h3>
              <input type="text" placeholder="Thabang" className={styles.inputField} required />
              <input type="text" placeholder="Mofokeng" className={styles.inputField} required />
              <input type="tel" placeholder="08X XXX XXXX" className={styles.inputField} required />
              <input type="email" placeholder="thabang@checkout.co.za" className={styles.inputField} required />

              <h3 className={styles.formGroupTitle}>Shipping Information</h3>
              <input type="text" placeholder="South Africa" className={styles.inputField} required />
              <input type="text" placeholder="Gauteng" className={styles.inputField} required />
              <input type="text" placeholder="Ntini Street, Soweto" className={styles.inputField} required />
              <input type="text" placeholder="1818" className={styles.inputField} required />
            </>
          )}

          <h3 className={styles.formGroupTitle}>Payment Method</h3>
          <div className="space-y-4">

            <label className={styles.radioOption}>
              <input 
                type="radio" 
                name="payment" 
                value="card" 
                checked={paymentMethod === 'card'} 
                onChange={() => setPaymentMethod('card')} 
                className={styles.radioInput}
              />
              <span>Credit Card</span>
            </label>

            {paymentMethod === 'card' && (
              <div className={styles.creditCardFields}>
                <input type="text" placeholder="XXXX XXXX XXXX" className={styles.inputField} required />
                <input type="text" placeholder="Thabang Mofokeng" className={styles.inputField} required />
                <div className={styles.inputRow}>
                  <input type="text" placeholder="12/26" className={styles.inputField} required />
                  <input type="text" placeholder="XXX" className={styles.inputField} required />
                </div>
              </div>
            )}

            {/* Google Pay Choice */}
            <label className={styles.radioOption}>
              <input 
                type="radio" 
                name="payment" 
                value="gpay" 
                checked={paymentMethod === 'gpay'} 
                onChange={() => setPaymentMethod('gpay')} 
                className={styles.radioInput}
              />
              <span>Google Pay</span>
            </label>

            {paymentMethod === 'gpay' && (
              <div className={styles.walletButtonContainer}>
                <button type="submit" className={styles.gpayBtn} disabled={cart.length === 0}>
                  <span>Pay with</span>
                  <svg width="41" height="17" viewBox="0 0 41 17" fill="currentColor">
                    <path d="M5.4 3.1c1-.1 1.9.3 2.6.9L9.1 2C8.1.9 6.7.3 5.2.3 2.7.3.6 2.1.1 4.5c-.1.5-.1 1.1 0 1.6C.6 8.5 2.7 10.3 5.2 10.3c1.5 0 2.9-.6 3.9-1.7l-1.1-1.1c-.7.7-1.7 1.1-2.8 1-1.6 0-3-1-3.4-2.4-.1-.4-.1-.9 0-1.3.4-1.5 1.8-2.5 3.4-2.5" />
                    <path d="M12.9 3.5c0-.4 0-.8-.1-1.2H6.7v2.3h3.5c-.1.8-.6 1.5-1.3 2v1.6h2.2c1.3-1.2 2-3 2-4.7" fill="#4285F4" />
                  </svg>
                </button>
              </div>
            )}

            <label className={styles.radioOption}>
              <input 
                type="radio" 
                name="payment" 
                value="applepay" 
                checked={paymentMethod === 'applepay'} 
                onChange={() => setPaymentMethod('applepay')} 
                className={styles.radioInput}
              />
              <span>Apple Pay</span>
            </label>

            {paymentMethod === 'applepay' && (
              <div className={styles.walletButtonContainer}>
                <button type="submit" className={styles.applePayBtn} disabled={cart.length === 0}>
                  <span className={styles.appleLogo}></span> Pay
                </button>
              </div>
            )}
          </div>

          {paymentMethod === 'card' && (
            <button type="submit" className={styles.completeBtn} disabled={cart.length === 0}>
              Complete Purchase
            </button>
          )}
        </form>
      </div>
    </div>
  );
}