'use client';

import React, { useState } from 'react';
import { faqData } from './FaqData';
import styles from './Faq.module.css';

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <h2 className={styles.heading}>
          Frequently Asked Questions
        </h2>

        <div className={styles.accordionList}>
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className={styles.faqItem}>
                
                <button
                  type="button"
                  className={styles.questionButton}
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>
                    {item.question}
                  </span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    +
                  </span>
                </button>

                <div
                  className={`${styles.answerWrapper} ${
                    isOpen ? styles.answerOpen : ''
                  }`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answerText}>
                      {item.answer}
                    </p>
                  </div>
                </div>

                <div className={styles.divider} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}