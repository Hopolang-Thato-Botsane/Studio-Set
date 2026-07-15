'use client';

import React, { useEffect, useRef, useState } from 'react';
import { steps } from './ProcessData';
import styles from './Process.module.css';

export default function Process() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px",
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const textBlocks = container.querySelectorAll(`.${styles.textStepBlock}`);
    
    textBlocks.forEach((block) => observer.observe(block));

    return () => {
      textBlocks.forEach((block) => observer.unobserve(block));
    };
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        
        <div className={styles.leftVisualColumn}>
          <div className={styles.visualWindow}>
            {steps.map((step, idx) => {
              const colorClass = styles[step.placeholderClass] || '';
              
              return (
                <div
                  key={step.id}
                  className={`${styles.visualCard} ${colorClass} ${
                    activeIndex === idx ? styles.visualCardActive : ''
                  }`}
                  aria-hidden={activeIndex !== idx}
                >
                  {/* Gifs
                    <img 
                      src={`/assets/gifs/step-${step.id}.gif`} 
                      alt={step.imageAlt} 
                      className={styles.mediaElement} 
                    /> 
                  */}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.rightTextColumn}>
          {steps.map((step, idx) => (
            <div
              key={step.id}
              data-index={idx}
              className={`${styles.textStepBlock} ${
                activeIndex === idx ? styles.textStepBlockActive : ''
              }`}
            >
              <h3 className={styles.heading}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}