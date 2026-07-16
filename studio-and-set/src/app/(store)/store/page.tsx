// src/app/(store)/store/page.tsx
import React from 'react';
import StoreHero from '@/components/StoreHero/StoreHero';
import styles from './store.module.css';

export default function StorePage() {
  return (
    <main className={styles.storeContainer}>
      {/* Self-contained cinematic section with snap-alignment */}
      <StoreHero />
      
      {/* Next scroll snap point section */}
      <section className={styles.productGridSection}>
        {/* We'll load the 3 B2C production apparel cards in here */}
      </section>
    </main>
  );
}