'use client';

import { JSX } from 'react';
import Link from 'next/link';
import styles from './DualCTA.module.css';

interface DualCTAProps {
  studioHref?: string;
  crewHref?: string;
  studioButtonText?: string;
  crewButtonText?: string;
}

export default function DualCTA({
  studioHref = '/register/studio',
  crewHref = '/register/crew',
  studioButtonText = 'Launch Gaffer AI',
  crewButtonText = 'Join The Roster',
}: DualCTAProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={`${styles.card} ${styles.studioCard}`}>
        <div className={styles.bgImage} />
        <div className={styles.overlay} />
        
        <div className={styles.content}>
          <span className={styles.categoryTag}>STUDIO</span>
          <div className={styles.textGroup}>
            <h2 className={styles.heading}>Need to provision a set?</h2>
            <p className={styles.description}>
              Build your call sheet, book vetted department heads, and pull gear packages in minutes.
            </p>
          </div>
          <Link href={studioHref} className={styles.ctaButton}>
            {studioButtonText}
          </Link>
        </div>
      </div>

      <div className={`${styles.card} ${styles.crewCard}`}>
        <div className={styles.bgImage} />
        <div className={styles.overlay} />
        
        <div className={styles.content}>
          <span className={styles.categoryTag}>CREW</span>
          <div className={styles.textGroup}>
            <h2 className={styles.heading}>Have kit or talent to deploy?</h2>
            <p className={styles.description}>
              List your inventory, set custom day rates, and lock in escrow-protected bookings.
            </p>
          </div>
          <Link href={crewHref} className={styles.ctaButton}>
            {crewButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}