'use client';

import React from 'react';
import Image from 'next/image';
import { howItWorksSteps } from './HowItWorksData';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Heading */}
        <h2 className={styles.heading}>
          How It Works
        </h2>

        {/* 3-Column Grid */}
        <div className={styles.grid}>
          {howItWorksSteps.map((step) => (
            <div key={step.id} className={styles.card}>
              
              {/* Icon Container */}
              <div className={styles.iconWrapper}>
                <Image
                  src={step.iconSrc}
                  alt={step.title}
                  width={64}
                  height={64}
                  className={styles.icon}
                />
              </div>

              {/* Title & Body */}
              <h3 className={styles.stepTitle}>
                {step.title}
              </h3>
              <p className={styles.stepDescription}>
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}