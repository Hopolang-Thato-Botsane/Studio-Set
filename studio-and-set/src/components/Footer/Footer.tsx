'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/register');
  };

  return (
    <footer className={styles.section}>
      {/* Top Ticker Bar wrapped in Link */}
      <div className={styles.tickerBar}>
        <Link 
          href="/store" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.tickerLink}
        >
          NEW RELEASE — ON-SET APPAREL & CREW GEAR NOW AVAILABLE IN STORE
        </Link>
      </div>

      {/* CTA Banner */}
      <div className={styles.ctaWrapper}>
        <div className={styles.ctaBanner}>
          <h2 className={styles.ctaHeading}>Stop chasing crews. Stop bundling gear.</h2>
          <p className={styles.ctaSubtext}>
            Access our authenticated filmmaker catalogue and instantly deploy engineered equipment packages 
            tailored exactly to your shoot parameters.
          </p>
          <button 
            className={styles.ctaButton}
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>
      </div>

      {/* Directory Container */}
      <div className={styles.directoryContainer}>
        <div className={styles.linksGrid}>
          <div className={styles.column}>
            <span className={styles.columnTitle}>SERVICES</span>
            <Link href="/crews" className={styles.linkItem}>Crew Catalogue</Link>
            <Link href="/kits" className={styles.linkItem}>Production Kits</Link>
            <Link href="/gaffer-ai" className={styles.linkItem}>Gaffer AI</Link>
          </div>

          <div className={styles.column}>
            <span className={styles.columnTitle}>LEGAL</span>
            <Link href="/deliveries" className={styles.linkItem}>Equipment Transportation</Link>
            <Link href="/terms" className={styles.linkItem}>Terms & Conditions</Link>
            <Link href="/privacy" className={styles.linkItem}>Privacy</Link>
          </div>

          <div className={styles.column}>
            <span className={styles.columnTitle}>COMPANY</span>
            <Link href="/contact" className={styles.linkItem}>Contact</Link>
            <Link href="/media" className={styles.linkItem}>Media Office</Link>
            <Link href="/careers" className={styles.linkItem}>Careers</Link>
            <Link href="/store" className={styles.linkItem}>Store</Link>
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
            <span className={styles.copyIcon}>C</span> 2026. STUDIO & SET. ALL RIGHTS RESERVED
          </span>
          <span className={styles.designerTag}>
            Designed By: <span className={styles.signature}>thbjr</span>
          </span>
        </div>
      </div>
    </footer>
  );
}