'use client';

import React from 'react';
import { LOGOS, REVIEWS } from './ReviewsData';
import styles from './Reviews.module.css';

export default function Reviews() {
  // Duplicate array so marquee loops seamlessly infinitely
  const marqueeLogos = [...LOGOS, ...LOGOS];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <h2 className={styles.heading}>The Continent's Best</h2>

        {/* Infinite Logo Marquee */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className={styles.logoItem}>
                <span className={styles.logoPlaceholder}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.horizontalDivider} />

        {/* 3-Column Testimonial Grid */}
        <div className={styles.reviewsGrid}>
          {REVIEWS.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <p className={styles.quoteText}>{review.quote}</p>
              
              <div className={styles.authorMeta}>
                <span className={styles.authorName}>
                  {review.author}, <span className={styles.authorRole}>{review.role}</span>
                </span>
                <div className={styles.authorLogo}>
                  <span className={styles.logoPlaceholderSmall}>
                    {review.author} Logo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}