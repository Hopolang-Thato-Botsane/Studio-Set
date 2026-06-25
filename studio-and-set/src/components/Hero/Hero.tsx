'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroSlide {
  title: string;
  subtitle: string;
  trailerUrl?: string;
  videoUrl?: string;
}

const DEFAULT_SLIDES: HeroSlide[] = [
  { 
    title: "Studio & Set", 
    subtitle: "Home of Film Equipment Rental" 
  },
  { 
    title: "Project 1", 
    subtitle: "Home of Film Equipment Rental",
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  { 
    title: "Project 2", 
    subtitle: "Home of Film Equipment Rental",
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  { 
    title: "Project 3", 
    subtitle: "Home of Film Equipment Rental",
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      
      if (totalHeight <= 0) return;
      
      const percentage = scrolled / totalHeight;
      const index = Math.min(
        DEFAULT_SLIDES.length - 1,
        Math.floor(percentage * DEFAULT_SLIDES.length)
      );
      
      setActiveSlideIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSlide = DEFAULT_SLIDES[activeSlideIndex];

  return (
    <div ref={containerRef} className={styles.timelineContainer}>
      <div className={styles.stickyViewport}>
        
        {/* TOP NAVIGATION BAR OVERLAY */}
        <header className={styles.navHeader}>
          <span className={styles.logoText}>Studio&Set</span>
          <button 
            className={styles.burgerButton} 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
          </button>
        </header>

        {/* CINEMATIC LAYERS BACKGROUND STACK */}
        <div className={styles.videoStackContainer}>
          {DEFAULT_SLIDES.map((slide, idx) => (
            <div 
              key={idx} 
              className={`${styles.videoLayer} ${idx === activeSlideIndex ? styles.layerActive : ''}`}
            >
              <div className={styles.darkOverlay} />
              {slide.videoUrl ? (
                <video src={slide.videoUrl} autoPlay loop muted playsInline className={styles.bgVideo} />
              ) : (
                <div className={`${styles.videoFallbackImage} ${styles[`fallback_${idx}`]}`} />
              )}
            </div>
          ))}
        </div>

        {/* FIXED ACCENT TEXT LAYOUT */}
        <div className={styles.contentOverlay}>
          <div className={styles.textContainer}>
            <h1 className={styles.heroTitle}>
              {currentSlide.title}
            </h1>
            <p className={styles.heroSubtitle}>
              {currentSlide.subtitle}
            </p>
            
            {currentSlide.trailerUrl && (
              <a 
                href={currentSlide.trailerUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.trailerButton}
              >
                Watch Trailer
              </a>
            )}
          </div>
        </div>

        {/* FULL DROPDOWN INTERACTIVE MENU */}
        <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <button 
            className={styles.closeButton} 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            X
          </button>
          
          <nav className={styles.overlayNav}>
            <Link href="/" className={`${styles.navLink} ${styles.activeLink}`} onClick={() => setIsMenuOpen(false)}>
              HOME
            </Link>
            <Link href="/store" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              STORE
            </Link>
            <Link href="/request-access" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              REQUEST ACCESS
            </Link>
            <Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              CONTACT
            </Link>
          </nav>
        </div>

      </div>
    </div>
  );
}