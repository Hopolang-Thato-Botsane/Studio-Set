'use client';

import { JSX, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HOTSPOTS } from './HotspotsData';
import styles from './Hero.module.css';

export default function Hero(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState<boolean>(false);

  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredSpot, setHoveredSpot] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;

      if (sectionHeight <= 0) return;

      const progress = Math.min(Math.max(-rect.top / sectionHeight, 0), 1);

      if (progress < 0.2) {
        setActiveStep(0);
      } else if (progress < 0.4) {
        setActiveStep(1);
      } else if (progress < 0.6) {
        setActiveStep(2);
      } else if (progress < 0.8) {
        setActiveStep(3);
      } else {
        setActiveStep(4);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const toggleMenu = (): void => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      <section ref={sectionRef} className={styles.scrollWrapper}>
        <div className={styles.stickyContainer}>
          <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/assets/logo/Logo.png"
                alt="Studio & Set"
                width={140}
                height={40}
                className={styles.logoImage}
                priority
              />
            </Link>

            <button
              className={styles.menuToggleButton}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </header>

          <div
            className={`${styles.interactiveStage} ${
              activeStep === 4 ? styles.stageHidden : ''
            }`}
          >
            {HOTSPOTS.map((spot, index) => {
              const hotspotStepIndex = index + 1;
              const isActive =
                hoveredSpot === hotspotStepIndex ||
                (hoveredSpot === null && activeStep === hotspotStepIndex);

              return (
                <div
                  key={spot.id}
                  className={`${styles.hotspotAnchor} ${
                    isActive ? styles.hotspotActive : ''
                  }`}
                  style={{ top: spot.top, left: spot.left }}
                  onMouseEnter={() => setHoveredSpot(hotspotStepIndex)}
                  onMouseLeave={() => setHoveredSpot(null)}
                >
                  <div className={styles.shutterIcon}>
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path d="M12 2a10 10 0 0 1 7.07 2.93l-5.66 5.66A2 2 0 0 0 12 10V2z" />
                    </svg>
                  </div>

                  {isActive && (
                    <div
                      className={`${styles.infoCard} ${
                        styles[spot.cardPosition]
                      }`}
                    >
                      <h3 className={styles.cardTitle}>{spot.title}</h3>
                      <p className={styles.cardDescription}>
                        {spot.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            className={`${styles.finalHeroContent} ${
              activeStep === 4 ? styles.heroVisible : ''
            }`}
          >
            <span className={styles.eyebrow}>
              FROM PRE-LIGHT TO WRAP, CONTROLLED.
            </span>
            <h1 className={styles.mainHeading}>
              A streamlined engine for verified crew, cinema gear, and AI-driven
              production staging.
            </h1>
            <Link href="/studio" className={styles.buildManifestBtn}>
              Build Manifest
            </Link>
          </div>

          <div className={styles.scrollIndicator}>
            <div className={styles.mousePill}>
              <div className={styles.wheel} />
            </div>
            <span>Scroll Down</span>
          </div>
        </div>
      </section>

      {isMenuOpen && (
        <div
          className={`${styles.menuOverlay} ${
            isMenuAnimating ? styles.menuVisible : ''
          }`}
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
            <Link href="/register" onClick={closeMenu}>
              Register
            </Link>
            <Link href="/register/crew" onClick={closeMenu}>
              Register as Crew
            </Link>
            <Link href="/register/studio" onClick={closeMenu}>
              Register as Studio
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}