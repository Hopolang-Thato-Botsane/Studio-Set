import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

interface NavLinkItem {
  _key: string;
  label: string;
  route: string;
}

interface FooterProps {
  variant: 'store' | 'marketing';
  data?: {
    ctaHeading?: string;
    ctaButtonText?: string;
    ctaButtonLink?: string;
    imageUrl?: string;
    storeCtaHeading?: string;
    storeCtaButtonText?: string;
    storeImageUrl?: string;
    studioLinks?: NavLinkItem[];
    showroomLinks?: NavLinkItem[];
    contactLinks?: NavLinkItem[];
    copyrightText?: string;
  };
}

export default function Footer({ variant, data }: FooterProps) {
  const isStore = variant === 'store';
  
  // Destructure content, prioritizing Sanity dashboard inputs before utilizing static strings
  const {
    ctaHeading = isStore 
      ? (data?.storeCtaHeading || "COMING SOON\nLorem ipsum dolor sit amet, consectetur adipiscing elit.") 
      : (data?.ctaHeading || "Apply for access to the\nStudio & Set ecosystem"),
      
    ctaButtonText = isStore 
      ? (data?.storeCtaButtonText || "Stay Tuned In") 
      : (data?.ctaButtonText || "Secure Access"),
      
    ctaButtonLink = isStore ? "#newsletter" : (data?.ctaButtonLink || "/request-access"),
    
    imageUrl = isStore ? data?.storeImageUrl : data?.imageUrl,
    
    studioLinks = [],
    showroomLinks = [],
    contactLinks = [],
    copyrightText = data?.copyrightText || "© Studio&Set. 2026."
  } = data || {};

  return (
    <footer className={`${styles.footerWrapper} ${isStore ? styles.storeTheme : styles.marketingTheme}`}>

      {/* FIXED HEIGHT SYSTEM CTA SECTION */}
      <div className={styles.ctaSection}>
        {imageUrl && (
          <Image 
            src={imageUrl} 
            alt="Footer Context" 
            fill 
            className={styles.bgImage} 
            priority
            unoptimized
          />
        )}
        <div className={styles.overlayContent}>
          <h2 className={styles.ctaHeading} style={{ whiteSpace: 'pre-line' }}>
            {ctaHeading}
          </h2>
          
          {isStore ? (
            /* STORE VIEW: SUBSCRIPTION BOX LAYOUT */
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Provide Email" className={styles.emailInput} />
              <button className={styles.secureAccessBtn}>{ctaButtonText}</button>
            </div>
          ) : (
            /* MARKETING VIEW: SINGLE ACCESS NAVIGATION BUTTON */
            <Link href={ctaButtonLink} className={styles.secureAccessBtn}>
              {ctaButtonText}
            </Link>
          )}
        </div>
      </div>

      {/* LINKS FRAME */}
      <div className={styles.navSection}>
        <div className={styles.linksFlexContainer}>
          
          {/* LEFT SIDE BRANDING COLUMN (Strict 354px Width) */}
          <div className={styles.brandColumn}>
            <h3>Company</h3>
            <p className={styles.brandParagraph}>
              Since 2020, Studio and Set has had it's eyes set on being the number one supplier for the film industry for Africa. There are stories to be told and we want to be part of those stories.
            </p>
            <div className={styles.socialRow}>
              <span>Instagram</span>
              <span>YouTube</span>
              <span>LinkedIn</span>
            </div>
          </div>

          {/* RIGHT SIDE LINK CHANNELS */}
          <div className={styles.rightColumnsGroup}>
            
            <div className={styles.linkColumn}>
              <h3>{isStore ? "Orders" : "Studio"}</h3>
              <div className={styles.linksStack}>
                {isStore ? (
                  <>
                    <Link href="/orders/track">Track Your Order</Link>
                    <Link href="/orders/delivery">Delivery</Link>
                    <Link href="/orders/returns">Returns</Link>
                    <Link href="/support">Support/Contact</Link>
                  </>
                ) : studioLinks.length > 0 ? (
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
            </div>

            <div className={styles.linkColumn}>
              <h3>{isStore ? "Shop" : "Showroom"}</h3>
              <div className={styles.linksStack}>
                {isStore ? (
                  <>
                    <Link href="/store/apparel">Apparel</Link>
                    <Link href="/store/accessories">Accessories</Link>
                    <Link href="/store/props">Props</Link>
                  </>
                ) : showroomLinks.length > 0 ? (
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
            </div>

            <div className={styles.linkColumn}>
              <h3>Contact</h3>
              <div className={styles.linksStack}>
                {isStore ? (
                  <>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/store/accessories">Accessories</Link>
                    <Link href="/store/props">Props</Link>
                  </>
                ) : contactLinks.length > 0 ? (
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
        </div>

        <hr className={styles.dividerLine} />

        {/* BASELINE LEGAL TRACK */}
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