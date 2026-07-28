'use client';

import { JSX, useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState<boolean>(false);

  const openMenu = (): void => {
    setIsMenuOpen(true);
    requestAnimationFrame(() => {
      setIsMenuAnimating(true);
    });
  };

  const closeMenu = (): void => {
    setIsMenuAnimating(false);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 400);
  };

  return (
    <>
      <section className={styles.heroSection}>

        <header className={styles.header}>
          <div className={styles.logo}>STUDIO&amp;SET</div>
          <nav className={styles.navRight}>
            <Link href="/store" className={`${styles.storeLink} ${styles.desktopOnly}`}>
              STORE
            </Link>
            <button 
              className={styles.menuButton} 
              onClick={openMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              Menu
            </button>
          </nav>
        </header>

        <div className={styles.contentArea}>
          <span className={styles.subtitle}>CREW &amp; EQUIPMENT HIRE SPECIALISTS</span>
          <h1 className={styles.title}>
            The premier choice for production crews and curated film equipment rentals in Southern Africa, featuring AI-driven search
          </h1>
          <div className={styles.buttonGroup}>
            <button className={styles.btnPrimary}>Register as crew</button>
            <button className={styles.btnSecondary}>Register as studio</button>
          </div>
        </div>

        <footer className={styles.logoFooter}>
          <div className={styles.divider} />
          <div className={styles.logoRow}>
            <span className={styles.brandText}>Aputure</span>
            <span className={`${styles.brandText} ${styles.arriText}`}>ARRI</span>
            <span className={styles.brandText}>SONY</span>
            <span className={styles.moreCount}>+ 12 More</span>
          </div>
        </footer>
      </section>

      {isMenuOpen && (
        <div 
          className={`${styles.menuOverlay} ${isMenuAnimating ? styles.menuVisible : ''}`}
          aria-hidden={!isMenuAnimating}
        >
          <button 
            className={styles.closeButton} 
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &#x2715;
          </button>
          <nav className={styles.overlayNav}>
            <Link href="/register/crew" onClick={closeMenu}>Register as Crew</Link>
            <Link href="/register/studio" onClick={closeMenu}>Register as Studio</Link>
            <Link href="/login/crew" onClick={closeMenu}>Login as Crew</Link>
            <Link href="/login/studio" onClick={closeMenu}>Login as Studio</Link>
            <Link href="/store" onClick={closeMenu}>Go To Store</Link>
          </nav>
        </div>
      )}
    </>
  );
}