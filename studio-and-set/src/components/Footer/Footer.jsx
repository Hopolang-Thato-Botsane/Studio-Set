import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>

      <div className={styles.ctaSection}>
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholderFallback} />
            <Image src="/footerBanner.jpg" alt="Background" fill className={styles.bgImage} priority />
          </div>

        <div className={styles.overlayContent}>
          <h2 className={styles.ctaHeading}>
            Apply for access to the<br />Studio & Set ecosystem
          </h2>
          <Link href="/request-access" className={styles.secureAccessBtn}>
            Secure Access
          </Link>
        </div>
      </div>

       <div className={styles.navSection}>
        <div className={styles.linksFlexContainer}>
          
          <div className={styles.linkColumn}>
            <h3>Studio</h3>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/support/technical">Technical Support</Link>
          </div>

          <div className={styles.rightColumnsGroup}>
            <div className={styles.linkColumn}>
              <h3>Showroom</h3>
              <Link href="/showroom/kits">Curated Kits</Link>
              <Link href="/showroom/capsule">Capsule Store</Link>
            </div>

            <div className={styles.linkColumn}>
              <h3>Contact</h3>
              <Link href="/request-access">Request Access</Link>
              <Link href="/support/contact">Support/Contact</Link>
            </div>
          </div>

        </div>

        <hr className={styles.dividerLine} />

        <div className={styles.subFooter}>
          <span className={styles.copyright}>
            © Studio&Set. 2026.
          </span>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}