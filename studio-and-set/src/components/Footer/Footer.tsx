import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

interface NavLinkItem {
  _key: string;
  label: string;
  route: string;
}

interface FooterProps {
  data?: {
    ctaHeading?: string;
    ctaButtonText?: string;
    ctaButtonLink?: string;
    imageUrl?: string;
    studioLinks?: NavLinkItem[];
    showroomLinks?: NavLinkItem[];
    contactLinks?: NavLinkItem[];
    copyrightText?: string;
  };
}

export default function Footer({ data }: FooterProps) {
  
  const {
    ctaHeading = "Apply for access to the\nStudio & Set ecosystem",
    ctaButtonText = "Secure Access",
    ctaButtonLink = "/request-access",
    imageUrl,
    studioLinks = [],
    showroomLinks = [],
    contactLinks = [],
    copyrightText = "© Studio&Set. 2026."
  } = data || {};

  return (
    <footer className={styles.footerWrapper}>

      <div className={styles.ctaSection}>
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholderFallback} />
          {imageUrl && (
            <Image 
              src={imageUrl} 
              alt="Studio & Set Ecosystem Background" 
              fill 
              className={styles.bgImage} 
              priority
              unoptimized
            />
          )}
        </div>

        <div className={styles.overlayContent}>
          <h2 className={styles.ctaHeading} style={{ whiteSpace: 'pre-line' }}>
            {ctaHeading}
          </h2>
          <Link href={ctaButtonLink} className={styles.secureAccessBtn}>
            {ctaButtonText}
          </Link>
        </div>
      </div>

      {/* Structural Informational Link Directory Map */}
      <div className={styles.navSection}>
        <div className={styles.linksFlexContainer}>
          
          <div className={styles.linkColumn}>
            <h3>Studio</h3>
            {studioLinks.length > 0 ? (
              studioLinks.map((link) => (
                <Link key={link._key} href={link.route}>{link.label}</Link>
              ))
            ) : (
              <>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/support/technical">Technical Support</Link>
              </>
            )}
          </div>

          <div className={styles.rightColumnsGroup}>
            <div className={styles.linkColumn}>
              <h3>Showroom</h3>
              {showroomLinks.length > 0 ? (
                showroomLinks.map((link) => (
                  <Link key={link._key} href={link.route}>{link.label}</Link>
                ))
              ) : (
                <>
                  <Link href="/showroom/kits">Curated Kits</Link>
                  <Link href="/showroom/capsule">Capsule Store</Link>
                </>
              )}
            </div>

            <div className={styles.linkColumn}>
              <h3>Contact</h3>
              {contactLinks.length > 0 ? (
                contactLinks.map((link) => (
                  <Link key={link._key} href={link.route}>{link.label}</Link>
                ))
              ) : (
                <>
                  <Link href="/request-access">Request Access</Link>
                  <Link href="/support/contact">Support/Contact</Link>
                </>
              )}
            </div>
          </div>

        </div>

        <hr className={styles.dividerLine} />

        {/* Baseline Copyright and Legal Track */}
        <div className={styles.subFooter}>
          <span className={styles.copyright}>
            {copyrightText}
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