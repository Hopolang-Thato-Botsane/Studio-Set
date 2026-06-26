'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import styles from './checkout.module.css';

export default function CheckoutPage() {

  const { cartItems, getCartTotal } = useCart() as any;
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const subtotal = getCartTotal ? getCartTotal() : 1650;
  const discount = 0;
  const shippingCost = deliveryMethod === 'standard' ? 0 : deliveryMethod === 'express' ? 80 : 150;
  const totalAmount = subtotal + shippingCost;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.checkoutMainContainer}>
        
        <div className={styles.leftColumn}>
          <h1 className={styles.mainTitle}>CHECKOUT</h1>
          <p className={styles.loginPrompt}>
            Have an account? <Link href="/auth" className={styles.inlineLink}>Login</Link>
          </p>

          <form onSubmit={(e) => e.preventDefault()} className={styles.formStructure}>
            <h3 className={styles.formGroupHeading}>INFORMATION</h3>
            <h4 className={styles.subSectionLabel}>Personal Information</h4>
            <div className={styles.inputRow}>
              <input type="text" placeholder="First Name" className={styles.textInput} required />
              <input type="text" placeholder="Last Name" className={styles.textInput} required />
            </div>
            <div className={styles.inputRow}>
              <input type="tel" placeholder="Number" className={styles.textInput} required />
              <input type="email" placeholder="Email Address" className={styles.textInput} required />
            </div>

            {/* SHIPPING DATA BLOCK */}
            <h4 className={styles.subSectionLabel}>Shipping information</h4>
            <div className={styles.inputRow}>
              <input type="text" placeholder="Country" className={styles.textInput} required />
              <input type="text" placeholder="City" className={styles.textInput} required />
            </div>
            <div className={styles.inputRow}>
              <input type="text" placeholder="Address" className={styles.textInput} required />
              <input type="text" placeholder="Zip/Postal Code" className={styles.textInput} required />
            </div>

            {/* DELIVERY SPEED METHOD SELECTION BLOCK */}
            <h4 className={styles.subSectionLabel}>Delivery</h4>
            <div className={styles.shippingSelectorStack}>
              <label className={`${styles.shippingLabel} ${deliveryMethod === 'standard' ? styles.activeRadio : ''}`}>
                <div className={styles.radioInputWrapper}>
                  <input 
                    type="radio" 
                    name="delivery" 
                    checked={deliveryMethod === 'standard'} 
                    onChange={() => setDeliveryMethod('standard')} 
                  />
                  <div>
                    <span className={styles.optionTitle}>Standard Shipping</span>
                    <span className={styles.optionSubtitle}>(Within 7 Days)</span>
                  </div>
                </div>
                <span className={styles.optionPrice}>Free</span>
              </label>

              <label className={`${styles.shippingLabel} ${deliveryMethod === 'express' ? styles.activeRadio : ''}`}>
                <div className={styles.radioInputWrapper}>
                  <input 
                    type="radio" 
                    name="delivery" 
                    checked={deliveryMethod === 'express'} 
                    onChange={() => setDeliveryMethod('express')} 
                  />
                  <div>
                    <span className={styles.optionTitle}>Express</span>
                    <span className={styles.optionSubtitle}>(Within 3 Business Days)</span>
                  </div>
                </div>
                <span className={styles.optionPrice}>R 80</span>
              </label>

              <label className={`${styles.shippingLabel} ${deliveryMethod === 'nextday' ? styles.activeRadio : ''}`}>
                <div className={styles.radioInputWrapper}>
                  <input 
                    type="radio" 
                    name="delivery" 
                    checked={deliveryMethod === 'nextday'} 
                    onChange={() => setDeliveryMethod('nextday')} 
                  />
                  <div>
                    <span className={styles.optionTitle}>Next Day</span>
                    <span className={styles.optionSubtitle}>(Next Business Day)</span>
                  </div>
                </div>
                <span className={styles.optionPrice}>R 150</span>
              </label>
            </div>

            {/* PAYMENT INFORMATION */}
            <h3 className={styles.formGroupHeading} style={{ marginTop: '3rem' }}>PAYMENT</h3>
            <div className={styles.paymentSelectorTabs}>
              <span className={styles.activeTab}>Bank Card</span>
              <span className={styles.disabledTab}>Apple Pay</span>
              <span className={styles.disabledTab}>Google Pay</span>
            </div>

            <div className={styles.inputRow}>
              <input type="text" placeholder="Card Number" className={styles.textInput} required />
              <input type="text" placeholder="Cardholder Name" className={styles.textInput} required />
            </div>
            <div className={styles.inputRow}>
              <input type="text" placeholder="Expiration Date (MM/YY)" className={styles.textInput} required />
              <input type="text" placeholder="CVV Number" className={styles.textInput} required />
            </div>
          </form>
        </div>


        <div className={styles.rightColumn}>
          <h2 className={styles.sidebarHeading}>Shopping Cart</h2>
          
          <div className={styles.cartItemsScrollContainer}>
            {/* Dynamic fallback render loop matching your layout style */}
            {(cartItems && cartItems.length > 0 ? cartItems : [1, 2, 3]).map((item: any, idx: number) => (
              <div key={item._id || idx} className={styles.checkoutProductCard}>
                <div className={styles.imagePlaceholderBox} />
                <div className={styles.productDetailsMetadata}>
                  <span className={styles.itemBrand}>{item.brand || "Studio & Set"}</span>
                  <span className={styles.itemTitle}>{item.title || "Soft Touch Hoodie"}</span>
                  <span className={styles.itemSize}>Medium</span>
                  <span className={styles.itemPrice}>R {item.price || 550}</span>
                </div>
              </div>
            ))}
          </div>

          {/* TOTALS WRAPPER MATRICES */}
          <div className={styles.financialSummaryTable}>
            <div className={styles.summaryLine}>
              <span>Subtotal:</span>
              <span>R {subtotal}</span>
            </div>
            <div className={styles.summaryLine}>
              <span>Discount:</span>
              <span>R {discount.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className={styles.summaryLine} style={{ borderBottom: '1px solid #000000', paddingBottom: '1.5rem' }}>
              <span>Shipping:</span>
              <span>R {shippingCost}</span>
            </div>

            <div className={styles.totalDueAmountRow}>
              <span>Total Amount:</span>
              <span>R {totalAmount}</span>
            </div>

            <button type="submit" className={styles.completeOrderButton}>
              Complete Payment of R {totalAmount}
            </button>
          </div>
        </div>

      </div>

      <Footer variant="store" data={undefined} />
    </div>
  );
}