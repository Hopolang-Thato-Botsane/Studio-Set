<<<<<<< HEAD
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', width: '100%' }}>
      {children}
=======
import React from "react";
import styles from "./auth.module.css";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={styles.splitLayout}>
      <div className={styles.leftPanel}>
        <h1 className={styles.brandTitle}>Studio&Set</h1>
        <p>
          Did you know that with Studio and Set you don’t have to apply for posts? 
          Gaffer AI automatically selects the best candidates based on Employer and 
          teammate reviews, experience and expertise to put you at the fore front of 
          all productions currently taking place.
        </p>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.formContainer}>{children}</div>
      </div>
>>>>>>> e91ca4fbe9acc89c90eed43c1829fc496b844c68
    </div>
  );
}