'use client';

import React, { useState, useEffect } from 'react';
import styles from './NewsletterDrawer.module.css';

interface NewsletterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToStore?: () => void;
}

export default function NewsletterDrawer({ isOpen, onClose, onNavigateToStore }: NewsletterDrawerProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && mounted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => setIsSubmitted(false), 300); 
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, mounted]);

  if (!mounted || !isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSuccessAction = () => {
    onClose();
    if (onNavigateToStore) {
      onNavigateToStore();
    }
  };

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />

      <div className={styles.drawer} role="dialog" aria-modal="true">
        <div className={styles.header}>
          <span className={styles.headerTitle}>NEWS LETTER</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {!isSubmitted ? (
            <div className={styles.formState}>
              <h2 className={styles.mainHeading}>
                STAY UP TO DATE WITH THE STUDIO AND SET LOGISTICAL NETWORK
              </h2>
              <p className={styles.subText}>
                Receive critical system updates, exclusive hardware drops, and priority crew roster synchronization directly to your terminal.
              </p>

              <p className={styles.legalText}>
                By clicking "REGISTER TERMINAL NODE", you confirm that you have read, understood, and agree to our Privacy Log and our Terms of Operation, and would like to receive system alerts (including by email, SMS, and direct network transmission) about new platform deployment activities, elite gear allocations, customized crew matching services, and to establish a personalized developer/operator profile based on your production specialization.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <input 
                  type="email" 
                  required 
                  placeholder="JaneDoe@gmail.com" 
                  className={styles.inputField} 
                />
                <button type="submit" className={styles.submitBtn}>
                  REGISTER TERMINAL NODE
                </button>
              </form>
            </div>
          ) : (
            <div className={styles.successState}>
              <h2 className={styles.mainHeading}>
                CREW STATUS: ACTIVATED
              </h2>
              <p className={styles.subText}>
                Thanks for joining. We build clothing for the elements, the night shoots, and the grueling hours. Standby for exclusive gear updates.
              </p>
              
              <button 
                type="button" 
                className={styles.submitBtn} 
                onClick={handleSuccessAction}
              >
                SEE WHAT'S IN STOCK
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}