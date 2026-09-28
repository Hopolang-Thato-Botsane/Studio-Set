'use client';

import React, { useState, useRef, useEffect } from 'react';
import { HOW_IT_WORKS_STEPS } from './HowItWorksData';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;

      if (sectionHeight <= 0) return;

      const currentScroll = -sectionRect.top;
      const progress = Math.min(Math.max(currentScroll / sectionHeight, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateShift = () => {
    if (!trackRef.current) return 0;
    const trackWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const maxShift = trackWidth - viewportWidth + 60;
    return Math.max(0, maxShift) * scrollProgress;
  };

  const xShift = calculateShift();

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        
        <div className={styles.header}>
          <div className={styles.pillTag}>Gaffer AI</div>
          <h2 className={styles.heading}>How It Works</h2>
          <p className={styles.subheading}>
            From prompt to provisioned set in seconds.
          </p>
        </div>

        <div className={styles.windowFrame}>
          <div
            ref={trackRef}
            className={styles.horizontalTrack}
            style={{ transform: `translateX(-${xShift}px)` }}
          >
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div key={step.id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <img
                    src={step.imageSrc}
                    alt={step.stepNumber}
                    className={styles.mockupImage}
                  />
                </div>
                <div className={styles.cardFooter}>
                  <h3 className={styles.stepTitle}>{step.stepNumber}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}