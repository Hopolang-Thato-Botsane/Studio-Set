'use client';

import AuthLayout from '@/components/Auth/AuthLayout';
import styles from '@/components/auth/AuthLayout.module.css';

export default function CrewLoginPage() {
  return (
    <AuthLayout
      title="Login"
      subtitle="Re-authenticate your operational account. Secure access to upcoming productions and be available for your dream roles."
      bgImageUrl="/assets/images/auth-bg.jpg"
      footerText="Don't have an account?"
      footerLinkText="Register"
      footerLinkHref="/register/crew"
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Full Name</label>
          <input type="text" className={styles.input} required />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Email Address</label>
          <input type="email" className={styles.input} required />
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <input type="password" className={styles.input} required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Confirm Password</label>
            <input type="password" className={styles.input} required />
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Create Account
        </button>
      </form>
    </AuthLayout>
  );
}