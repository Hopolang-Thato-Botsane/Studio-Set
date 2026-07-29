"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { registerConfigs, UserRole } from "../registerConfig";
import styles from "../../auth.module.css";

export default function RegisterRolePage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const resolvedParams = use(params);
  const role = resolvedParams.role.toLowerCase() as UserRole;

  const config = registerConfigs[role];

  if (!config) {
    notFound();
  }

  return (
    <div>
      <div className={styles.headerText}>
        <h2>{config.title}</h2>
        <p>{config.subtitle}</p>
      </div>

      {config.showSocials && (
        <>
          <div className={styles.socialButtons}>
            <button className={styles.socialButton}>☁</button>
            <button className={styles.socialButton}>G</button>
          </div>

          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <span className={styles.dividerText}>Or</span>
            <div className={styles.dividerLine}></div>
          </div>
        </>
      )}

      <form onSubmit={(e) => e.preventDefault()}>
        {config.fields.showNameFields && (
          <div className={styles.formGridTwoCol}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>First Name</label>
              <input
                type="text"
                placeholder="Thabang"
                className={styles.lineInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Surname</label>
              <input
                type="text"
                placeholder="Mofokeng"
                className={styles.lineInput}
              />
            </div>
          </div>
        )}

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email</label>
          <input
            type="email"
            placeholder={config.fields.emailPlaceholder}
            className={styles.lineInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Password</label>
          <input
            type="password"
            placeholder="••••••••••••••••"
            className={styles.lineInput}
          />
        </div>

        <p className={styles.passwordNote}>
          Password must be at least 8 characters long
        </p>

        <button type="submit" className={styles.submitButton}>
          Sign Up
        </button>
      </form>

      <div className={styles.footerLink}>
        Already have an account? <Link href={`/login/${role}`}>Log in</Link>
      </div>
    </div>
  );
}