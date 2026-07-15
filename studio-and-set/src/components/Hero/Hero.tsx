import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Top Header Row */}
      <header className={styles.header}>
        <div className={styles.logo}>STUDIO&SET</div>
        <button className={styles.accountButton}>Account</button>
      </header>

      {/* Main Copy & Action Buttons */}
      <div className={styles.contentArea}>
        <span className={styles.subtitle}>CREW & EQUIPMENT HIRE SPECIALISTS</span>
        <h1 className={styles.title}>
          The premier choice for production crews and curated film equipment rentals in Southern Africa now powered power with AI search
        </h1>
        <div className={styles.buttonGroup}>
          <button className={styles.btnPrimary}>Register as crew</button>
          <button className={styles.btnSecondary}>Register as studio</button>
        </div>
      </div>

      {/* Sleek, Static Brands Footer */}
      <footer className={styles.logoFooter}>
        <div className={styles.divider} />
        <div className={styles.logoRow}>
          {/* Aputure */}
          <svg className={styles.brandLogo} viewBox="0 0 100 24" fill="var(--color-cream)">
            <text x="0" y="18" fontFamily="var(--font-support)" fontWeight="bold" fontSize="18" letterSpacing="2">Aputure</text>
          </svg>
          
          {/* ARRI */}
          <svg className={styles.brandLogo} viewBox="0 0 100 24" fill="#006BB6">
            <text x="0" y="18" fontFamily="var(--font-support)" fontWeight="900" fontSize="20" letterSpacing="1">ARRI</text>
          </svg>

          {/* SONY */}
          <svg className={styles.brandLogo} viewBox="0 0 100 24" fill="var(--color-cream)">
            <text x="0" y="18" fontFamily="var(--font-support)" fontWeight="bold" fontSize="16" letterSpacing="6">SONY</text>
          </svg>

          {/* Manfrotto */}
          <svg className={styles.brandLogo} viewBox="0 0 120 24" fill="var(--color-cream)">
            <circle cx="10" cy="12" r="6" fill="#E2231A" />
            <text x="25" y="18" fontFamily="var(--font-support)" fontWeight="bold" fontSize="14" letterSpacing="1">Manfrotto</text>
          </svg>
        </div>
      </footer>
    </section>
  );
}