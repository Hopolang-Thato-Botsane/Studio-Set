"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './Services.module.css';

interface ServiceItem {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

interface ServicesProps {
  initialServices: ServiceItem[];
}

export default function Services({ initialServices }: ServicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexAttr = entry.target.getAttribute('data-index');
          if (indexAttr !== null) {
            setActiveIndex(parseInt(indexAttr, 10));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [initialServices]);

  return (
    <section className={styles['services-wrapper']}>
      <span className={styles['section-label']}>SERVICES</span>
      
      <div className={styles['services-container']}>
        <div className={styles['left-sticky-canvas']}>
          {initialServices.map((service, idx) => (
            <div 
              key={`img-${service._id}`}
              className={`${styles['canvas-image-layer']} ${activeIndex === idx ? styles['active-layer'] : ''}`}
              style={{ backgroundColor: '#16181D' }}
            >
              {service.imageUrl && (
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className={styles['actual-image']} 
                />
              )}
            </div>
          ))}
        </div>

        <div className={styles['right-scroll-content']}>
          {initialServices.map((service, idx) => (
            <div 
              key={service._id} 
              className={styles['service-text-block']}
              data-index={idx}
              ref={(el) => { sectionRefs.current[idx] = el; }}
            >
              <h2 className={styles['service-title']}>{service.title}</h2>
              <p className={styles['service-description']}>{service.description}</p>
              
              {service.tags && service.tags.length > 0 && (
                <ul className={styles['service-tags-list']}>
                  {service.tags.map((tag, tIdx) => (
                    <li key={tIdx} className={styles['service-tag']}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}