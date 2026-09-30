'use client';

import React, { useState } from 'react';
import { faqData } from './FaqData';
import styles from './Faq.module.css';

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const studioFaqs = faqData.filter((item) => item.category === 'studio');
  const crewFaqs = faqData.filter((item) => item.category === 'crew');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.headerStack}>
          <span className={styles.badge}>PLATFORM GUIDE</span>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.subheading}>From prompt to provisioned set in seconds.</p>
        </div>

        <div className={styles.categorySection}>
          <div className={styles.dividerHeader}>
            <span className={styles.dividerTitle}>Studio</span>
          </div>

          <div className={styles.cardGrid}>
            {studioFaqs.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className={styles.faqCard}>
                  <button
                    type="button"
                    className={styles.questionButton}
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>{item.question}</span>
                    <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>

                  <div className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ''}`}>
                    <div className={styles.answerInner}>
                      <p className={styles.answerText}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.categorySection}>
          <div className={styles.dividerHeader}>
            <span className={styles.dividerTitle}>Crew</span>
          </div>

          <div className={styles.cardGrid}>
            {crewFaqs.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className={styles.faqCard}>
                  <button
                    type="button"
                    className={styles.questionButton}
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>{item.question}</span>
                    <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>

                  <div className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ''}`}>
                    <div className={styles.answerInner}>
                      <p className={styles.answerText}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}