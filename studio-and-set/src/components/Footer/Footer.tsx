import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.section}>

      <div className={styles.ctaBanner}>
        <h2 className={styles.ctaHeading}>Stop chasing crews. Stop bundling gear.</h2>
        <p className={styles.ctaSubtext}>
          Access our authenticated filmmaker catalogue and instantly deploy engineered equipment packages 
          tailored exactly to your shoot parameters.
        </p>
        <button className={styles.ctaButton}>Register</button>
      </div>

      <div className={styles.directoryContainer}>
        <div className={styles.linksGrid}>
          <div className={styles.column}>
            <span className={styles.columnTitle}>Services</span>
            <Link href="/crews" className={styles.linkItem}>Crew Catalogue</Link>
            <Link href="/kits" className={styles.linkItem}>Production Kits</Link>
            <Link href="/gaffer-ai" className={styles.linkItem}>Gaffer AI</Link>
          </div>

          <div className={styles.column}>
            <span className={styles.columnTitle}>Legal</span>
            <Link href="/deliveries" className={styles.linkItem}>Deliveries & Collections</Link>
            <Link href="/terms" className={styles.linkItem}>Terms & Conditions</Link>
            <Link href="/privacy" className={styles.linkItem}>Privacy</Link>
          </div>

          <div className={styles.column}>
            <span className={styles.columnTitle}>Company</span>
            <Link href="/contact" className={styles.linkItem}>Contact</Link>
            <Link href="/media" className={styles.linkItem}>Media Office</Link>
            <Link href="/careers" className={styles.linkItem}>Careers</Link>
          </div>

          <div className={styles.column}>
            <span className={styles.columnTitle}>Office</span>
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
            © 2026. STUDIO & SET. ALL RIGHTS RESERVED
          </span>
          <span className={styles.designerTag}>
            Designed By: <span className={styles.signature}>thbjr</span>
          </span>
        </div>
      </div>
    </footer>
  );
}