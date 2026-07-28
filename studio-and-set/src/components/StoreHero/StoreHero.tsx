'use client';

import Link from 'next/link';
import styles from './StoreHero.module.css';

export default function StoreHero() {
  return (
    <section className={styles.heroSection}>

      <div className={styles.imageOverlay} />

        <header className={styles.navbar}>
          <div className={styles.navContainer}>
            <Link href="/" className={styles.logo}>
              STUDIO&SET
            </Link>
            <Link href="/account" className={styles.accountBtn}>
              Account
            </Link>
          </div>
          <div className={styles.navDivider} />
        </header>

      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>
          Built for the Crew.<br />
          <span className={styles.accentText}>Not the Runway.</span>
        </h1>
        <p className={styles.subtext}>
          High-performance gear tailored specifically for camera, grip, and lighting specialists. 
          Weather-sealed warmth and dirt-repelling textiles engineered to withstand the brutal reality of physical production.
        </p>
      </div>
    </section>
  );
}