'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FEATURED_PRODUCTIONS } from './FeaturedProductionsData';
import styles from './FeaturedProductions.module.css';

export default function FeaturedProductions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;

      if (sectionHeight <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / sectionHeight, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trackY = scrollProgress * 100;

  return (

    <section ref={sectionRef} className={styles.section}>
      
      <div className={styles.clippedFrame}>
        
        <div className={styles.pillTag}>Our Portfolio</div>

        <div
          className={styles.slidingTrack}
          style={{ transform: `translateY(-${trackY}vh)` }}
        >
          <div className={styles.quoteFrame}>
            <blockquote className={styles.quoteText}>
              "You know somethin', Utvich? I think this just might be my masterpiece."
            </blockquote>
            <cite className={styles.quoteAuthor}>- Lieutenant Aldo Raine</cite>
          </div>

          <div className={styles.dvdFrame}>
            <div className={styles.shelfRack}>
              {FEATURED_PRODUCTIONS.map((item) => {
                const isHovered = hoveredId === item.id;

                return (
                  <Link
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.dvdCard} ${isHovered ? styles.active : ''}`}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className={styles.spineView}>
                      <span className={styles.yearText}>{item.year}</span>
                      <span className={styles.titleText}>{item.title}</span>

                      <div className={styles.logoSlot}>
                        {item.dvdLogoImg ? (
                          <img
                            src={item.dvdLogoImg}
                            alt={`${item.title} Logo`}
                            className={styles.logoImage}
                          />
                        ) : (
                          <span className={styles.dvdLogo}>DVD</span>
                        )}
                      </div>
                    </div>

                    <div className={styles.coverView}>
                      <img
                        src={item.coverImg}
                        alt={item.title}
                        className={styles.coverImage}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}