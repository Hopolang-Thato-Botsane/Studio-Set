// src/components/Footer/Footer.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './StoreFooter.module.css';
import NewsletterDrawer from '../NewsletterDrawer/NewsletterDrawer';


export default function Footer() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <footer className={styles.section}>
      {/* 1. Newsletter Banner using Main CTA Banner styling */}
      <div className={styles.ctaBanner}>
        <h2 className={styles.ctaHeading}>INTEL DIRECT</h2>
        <p className={styles.ctaSubtext}>
          Sign up to receive technical specifications on upcoming apparel drops and exclusive access to the Studio and Set ecosystem.
        </p>
        <button 
          type="button" 
          className={styles.ctaButton}
          onClick={() => setIsNewsletterOpen(true)}
        >
          SUBSCRIBE
        </button>
      </div>

      {/* 2. Directory Panel with matching Main styles */}
      <div className={styles.directoryContainer}>
        <div className={styles.linksGrid}>
          {/* Column 1: Account */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>ACCOUNT</h4>
            <Link href="/account/register" className={styles.linkItem}>Sign-In/Register</Link>
            <Link href="/account/orders" className={styles.linkItem}>Orders</Link>
          </div>

          {/* Column 2: Customer Care */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>CUSTOMER CARE</h4>
            <Link href="/faq" className={styles.linkItem}>FAQs</Link>
            <Link href="/returns" className={styles.linkItem}>Returns & Exchanges</Link>
            <Link href="/terms" className={styles.linkItem}>Terms & Conditions</Link>
          </div>

          {/* Column 3: Company */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>COMPANY</h4>
            <Link href="/contact" className={styles.linkItem}>Contact</Link>
            <Link href="/media" className={styles.linkItem}>Media Office</Link>
            <Link href="/careers" className={styles.linkItem}>Careers</Link>
          </div>

          {/* Column 4: Office Details */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>OFFICE</h4>
            <address className={styles.addressText}>
              Arrow Business Park<br />
              60 Rietspruit Road<br />
              Kosmosdal x11<br />
              Centurion
            </address>
          </div>
        </div>

        <div className={styles.divider} />

        {/* 3. Bottom Bar */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © 2026. STUDIO & SET. ALL RIGHTS RESERVED
          </div>
          <div className={styles.designerTag}>
            Designed By: <span className={styles.signature}>thbjr</span>
          </div>
        </div>
      </div>
    </footer>
  );
}