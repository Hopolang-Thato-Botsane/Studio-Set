'use client';

import React, { JSX } from 'react';
import Link from 'next/link';
import styles from './AuthLayout.module.css';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  bgImageUrl?: string;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
  showSocialLogin?: boolean;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
  bgImageUrl = '/assets/images/auth-bg.jpg',
  footerText,
  footerLinkText,
  footerLinkHref,
  showSocialLogin = true,
}: AuthLayoutProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.visualSection} style={{ backgroundImage: `url(${bgImageUrl})` }}>
        <div className={styles.visualOverlay} />
        
        <Link href="/" className={styles.logo}>
          Studio <br /> &amp; Set
        </Link>

        <div className={styles.visualFooter}>
          <div className={styles.dividerLine} />
          <p className={styles.valueStatement}>
            An exclusive operational platform engineered for line producers, agency leads, and technical heads. Unlocking real-time Gaffer AI manifests and verified crew dispatch across Southern Africa.
          </p>
        </div>
      </div>

      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>

          {children}

          <p className={styles.disclaimer}>
            Access to equipment manifests and day-rate telemetry is restricted to verified industry leads to preserve network trust.
          </p>

          <div className={styles.footerLinkGroup}>
            <span>{footerText}</span>{' '}
            <Link href={footerLinkHref} className={styles.footerLink}>
              {footerLinkText}
            </Link>
          </div>

          {showSocialLogin && (
            <div className={styles.socialIcons}>

              <button aria-label="Sign in with Google" className={styles.socialBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </button>

              <button aria-label="Sign in with Cloud" className={styles.socialBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                </svg>
              </button>

              <button aria-label="Sign in with Microsoft" className={styles.socialBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.53 4.306L13.8 2.22c-.22-.06-.45.08-.45.31v18.94c0 .23.23.37.45.31l7.73-2.08c.27-.07.47-.32.47-.6V4.91c0-.28-.2-.53-.47-.605zM12 3H2.5c-.28 0-.5.22-.5.5v17c0 .28.22.5.5.5H12V3z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}