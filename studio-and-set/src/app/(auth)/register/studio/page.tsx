'use client';

import AuthLayout from '@/components/Auth/AuthLayout';
import styles from '@/components/Auth/AuthLayout.module.css';

export default function StudioRegisterPage() {
  return (
    <AuthLayout
      title="Sign Up Now"
      subtitle="Join an elite network of production captains. Gain instant access to automated gear staging, protected rate cards, and verified crew rosters."
      bgImageUrl="/assets/images/auth-bg.jpg"
      footerText="Already registered?"
      footerLinkText="Login"
      footerLinkHref="/login/studio"
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Studio Name</label>
          <input type="text" className={styles.input} required />
        </div>

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