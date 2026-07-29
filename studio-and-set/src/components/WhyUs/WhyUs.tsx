'use client';

import React from 'react';
import Image from 'next/image';
import { features } from './WhyUsData';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.innerContainer}>
        
        <h2 className={styles.sectionHeading}>
          Built to Eliminate Production Friction.
        </h2>

        <div className={styles.contentGrid}>
          
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/why-us-tripod.jpg"
              alt="Professional camera on tripod in studio"
              fill
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.featuresColumn}>
            {features.map((feature, idx) => (
              <div key={feature.id} className={styles.featureBlock}>
                <h3 className={styles.featureTitle}>
                  {feature.title}
                </h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
                {idx < features.length - 1 && (
                  <div className={styles.divider} />
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}