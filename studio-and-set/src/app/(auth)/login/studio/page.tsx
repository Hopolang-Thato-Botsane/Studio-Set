'use client';

import AuthLayout from '@/components/Auth/AuthLayout';
import styles from '@/components/auth/AuthLayout.module.css';

export default function StudioLoginPage() {
  return (
    <AuthLayout
      title="Login"
      subtitle="Re-authenticate your operational account. Secure access to locked equipment manifests and live dispatch schedules."
      bgImageUrl="/assets/images/studio-bg.jpg"
      footerText="Don't have an account?"
      footerLinkText="Register"
      footerLinkHref="/register/studio"
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Studio Email Address</label>
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