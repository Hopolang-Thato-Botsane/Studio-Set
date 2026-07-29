'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './StoreFooter.module.css';

export default function StoreFooter() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
    // Trigger animation in the next tick
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleCloseDrawer = () => {
    setIsAnimating(false);
    // Wait for the CSS transition (300ms) before unmounting
    setTimeout(() => setIsDrawerOpen(false), 300);
  };

  const handleSubmitDrawer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting email:', email);
    handleCloseDrawer();
  };

  return (
    <>
      <footer className={styles.section}>
        {/* Banner Section */}
        <div className={styles.ctaWrapper}>
          <div className={styles.ctaBanner}>
            <h2 className={styles.ctaHeading}>INTEL DIRECT</h2>
            <p className={styles.ctaSubtext}>
              Sign up to receive technical specifications on upcoming apparel drops and exclusive access to the Studio and Set ecosystem.
            </p>
            <button 
              type="button" 
              className={styles.ctaButton} 
              onClick={handleOpenDrawer}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Directory Container */}
        <div className={styles.directoryContainer}>
          <div className={styles.linksGrid}>
            <div className={styles.column}>
              <span className={styles.columnTitle}>ACCOUNT</span>
              <Link href="/account/login" className={styles.linkItem}>Sign-In/Register</Link>
              <Link href="/account/orders" className={styles.linkItem}>Orders</Link>
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>CUSTOMER CARE</span>
              <Link href="/faqs" className={styles.linkItem}>FAQs</Link>
              <Link href="/returns" className={styles.linkItem}>Returns &amp; Exchanges</Link>
              <Link href="/terms" className={styles.linkItem}>Terms &amp; Conditions</Link>
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>COMPANY</span>
              <Link href="/contact" className={styles.linkItem}>Contact</Link>
              <Link href="/media" className={styles.linkItem}>Media Office</Link>
              <Link href="/careers" className={styles.linkItem}>Careers</Link>
            </div>

            <div className={`${styles.column} ${styles.officeColumn}`}>
              <span className={styles.columnTitle}>OFFICE</span>
              <p className={styles.addressText}>
                Arrow Business Park<br />
                60 Rietspruit Road<br />
                Kosmosdal x11<br />
                Centurion
              </p>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.footerBottom}>
            <span className={styles.copyright}>
              <span className={styles.copyIcon}>C</span> 2026. STUDIO &amp; SET. ALL RIGHTS RESERVED
            </span>
            <span className={styles.designerTag}>
              Designed By: <span className={styles.signature}>thbjr</span>
            </span>
          </div>
        </div>
      </footer>

      {/* Slide-over Newsletter Drawer */}
      {isDrawerOpen && (
        <div 
          className={`${styles.drawerOverlay} ${isAnimating ? styles.drawerOverlayOpen : ''}`} 
          onClick={handleCloseDrawer}
        >
          <div 
            className={`${styles.drawerContent} ${isAnimating ? styles.drawerContentOpen : ''}`} 
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <div className={styles.drawerHeader}>
              <span className={styles.drawerTitle}>NEWS LETTER</span>
              <button 
                type="button" 
                className={styles.closeButton} 
                onClick={handleCloseDrawer}
                aria-label="Close drawer"
              >
                ✕
              </button>
            </div>

            <div className={styles.drawerBody}>
              <h3 className={styles.drawerHeading}>
                STAY UP TO DATE WITH THE STUDIO AND SET LOGISTICAL NETWORK
              </h3>
              <p className={styles.drawerSubtext}>
                Receive critical system updates, exclusive hardware drops, and priority crew roster synchronization directly to your terminal.
              </p>

              <p className={styles.disclaimerText}>
                By clicking &quot;REGISTER TERMINAL NODE&quot;, you confirm that you have read, understood, and agree to our Privacy Log and our Terms of Operation, and would like to receive system alerts (including by email, SMS, and direct network transmission) about new platform deployment activities, elite gear allocations, customized crew matching services, and to establish a personalized developer/operator profile based on your production specialization.
              </p>

              <form onSubmit={handleSubmitDrawer} className={styles.drawerForm}>
                <input 
                  type="email"
                  required
                  placeholder="JaneDoe@gmail.com"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.submitButton}>
                  REGISTER TERMINAL NODE
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}