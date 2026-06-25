'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './StoreHero.module.css';

interface StoreHeroData {
  title: string;
  description: string;
  imageUrl?: string;
}

interface StoreHeroProps {
  data: StoreHeroData;
}

export default function StoreHero({ data }: StoreHeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fallback defaults matching the layout screenshot perfectly
  const heroTitle = data?.title || "INVENTORY FOR THE UNFORGIVING";
  const heroDesc = data?.description || "We don't make fast fashion; we make clothing that handles the elements. Designed specifically for camera operators, grips, runners, and directors who live on location, the Studio & Set collection features reinforced stitching, durable fabrics, and comfort that lasts past the final wrap. Built to endure the exact same harsh environmental elements you do.";

  const containerStyle = data?.imageUrl 
    ? { backgroundImage: `url(${data.imageUrl})` }
    : undefined;

  return (
    <div className={styles.heroContainer} style={containerStyle}>
      <div className={styles.darkOverlay} />

      {/* TOP NAVIGATION OVERLAY */}
      <header className={styles.navHeader}>
        <span className={styles.logoText}>Studio&Set</span>
        <button 
          className={styles.burgerButton} 
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Navigation Menu"
        >
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
        </button>
      </header>

      {/* TEXT CONTENT & CATALOGUE BUTTON */}
      <div className={styles.contentOverlay}>
        <div className={styles.textContainer}>
          <h1 className={styles.heroTitle}>{heroTitle}</h1>
          <p className={styles.heroSubtitle}>{heroDesc}</p>
          
          <button 
            className={styles.catalogueButton}
            onClick={() => document.getElementById('catalog-grid')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Catalogue
          </button>
        </div>
      </div>

      {/* CUSTOM OVERLAY DROPDOWN MENU */}
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <button 
          className={styles.closeButton} 
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          X
        </button>
        
        <nav className={styles.overlayNav}>
          <Link href="/cart" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            CART
          </Link>
          <Link href="/auth" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            LOGIN / REGISTER
          </Link>
          <Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            CONTACT US
          </Link>
        </nav>
      </div>
    </div>
  );
}