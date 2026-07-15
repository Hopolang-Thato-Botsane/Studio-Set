'use client';

import React, { useState } from 'react';
import { reviews } from './ReviewsData';
import styles from "./Reviews.module.css"

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className={styles.section}>
      <div className={styles.carouselContainer}>
        <button 
          onClick={handlePrev} 
          className={styles.navButton} 
          aria-label="Previous review"
        >
          <svg className={styles.arrowIcon} viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>

        <div className={styles.contentArea} key={currentReview.id}>
          <span className={styles.company}>{currentReview.company}</span>
          <p className={styles.quote}>{currentReview.quote}</p>
          <span className={styles.author}>{currentReview.author}</span>
        </div>

        <button 
          onClick={handleNext} 
          className={styles.navButton} 
          aria-label="Next review"
        >
          <svg className={styles.arrowIcon} viewBox="0 0 24 24">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
          </svg>
        </button>
      </div>
    </section>
  );
}