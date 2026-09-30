'use client';

import React, { useState } from 'react';
import styles from './StudioProfile.module.css';

interface Props {
  onSuccess?: (data: Record<string, string>) => void;
}

export const StudioProfile = ({ onSuccess }: Props) => {
  const [formData, setFormData] = useState({
    registeredName: '',
    registrationNumber: '',
    tradingName: '',
    vatNumber: '',
    physicalAddress: '',
    primaryEmail: '',
    primaryContactName: '',
    primaryContactId: '',
    primaryContactPhone: '',
    secondaryContactName: '',
    secondaryContactId: '',
    secondaryContactPhone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Studio Profile Submitted:', formData);
    if (onSuccess) onSuccess(formData);
  };

  return (
    <main className={styles.container}>
      <nav className={styles.breadcrumbs}>
        Dashboard / <strong>Company Profile</strong>
      </nav>

      <section className={styles.heroBanner}>
        <div className={styles.bannerContent}>
          <span className={styles.uploadIcon}>§</span>
          <h2 className={styles.bannerText}>Upload Studio Cover & Logo</h2>
        </div>
        <input type="file" className={styles.hiddenInput} accept="image/*" />
      </section>

      <h1 className={styles.pageTitle}>Company Details</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>01/ Identity</h3>
          <div className={styles.grid3}>
            <div className={styles.inputGroup}>
              <label>Registered Company Name</label>
              <input 
                name="registeredName"
                type="text" 
                className={styles.input}
                value={formData.registeredName}
                onChange={handleChange}
                placeholder="Velocity Films Pty Ltd"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Company Registration Number</label>
              <input 
                name="registrationNumber"
                type="text" 
                className={styles.input}
                value={formData.registrationNumber}
                onChange={handleChange}
                placeholder="2026/XXXXXX/XX"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Trading Name</label>
              <input 
                name="tradingName"
                type="text" 
                className={styles.input}
                value={formData.tradingName}
                onChange={handleChange}
                placeholder="production@velocityfilms"
              />
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>02/ Operational & Billing Details</h3>
          <div className={styles.grid3}>
            <div className={styles.inputGroup}>
              <label>Company VAT Number</label>
              <input 
                name="vatNumber"
                type="text" 
                className={styles.input}
                value={formData.vatNumber}
                onChange={handleChange}
                placeholder="4XX XXX XXXX"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Physical Address</label>
              <input 
                name="physicalAddress"
                type="text" 
                className={styles.input}
                value={formData.physicalAddress}
                onChange={handleChange}
                placeholder="90 Rivonia Road, Sandton."
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Primary Business Email</label>
              <input 
                name="primaryEmail"
                type="email" 
                className={styles.input}
                value={formData.primaryEmail}
                onChange={handleChange}
                placeholder="production@velocityfilms.co.za"
              />
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>03/ Primary Contact Person</h3>
          <div className={styles.grid3}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input 
                name="primaryContactName"
                type="text" 
                className={styles.input}
                value={formData.primaryContactName}
                onChange={handleChange}
                placeholder="Daniel O'Neal"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Identity Number</label>
              <input 
                name="primaryContactId"
                type="text" 
                className={styles.input}
                value={formData.primaryContactId}
                onChange={handleChange}
                placeholder="XXXXXXXXXXXXX"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Direct Contact Number</label>
              <input 
                name="primaryContactPhone"
                type="tel" 
                className={styles.input}
                value={formData.primaryContactPhone}
                onChange={handleChange}
                placeholder="08X XXX XXXX"
              />
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>04/ Secondary Contact Person</h3>
          <div className={styles.grid3}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input 
                name="secondaryContactName"
                type="text" 
                className={styles.input}
                value={formData.secondaryContactName}
                onChange={handleChange}
                placeholder="Palesa Nkosi"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Identity Number</label>
              <input 
                name="secondaryContactId"
                type="text" 
                className={styles.input}
                value={formData.secondaryContactId}
                onChange={handleChange}
                placeholder="XXXXXXXXXXXXX"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Direct Contact Number</label>
              <input 
                name="secondaryContactPhone"
                type="tel" 
                className={styles.input}
                value={formData.secondaryContactPhone}
                onChange={handleChange}
                placeholder="08X XXX XXXX"
              />
            </div>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Create Company Profile
        </button>
      </form>
    </main>
  );
};