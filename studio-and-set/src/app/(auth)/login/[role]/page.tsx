"use client";

import { use } from "react";
import Link from "next/link";
import styles from "../../auth.module.css";

interface PageProps {
  params: Promise<{ role: string }>;
}

export default function LoginPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const role = resolvedParams.role.toLowerCase();
  const isStudio = role === "studio";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Logging in as ${role}...`);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerText}>
        <h2>{isStudio ? "Studio Login" : "Crew Login"}</h2>
        <p>
          {isStudio
            ? "Access your studio dashboard and manage sets"
            : "Access your crew profile and upcoming bookings"}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email Address</label>
          <input
            type="email"
            required
            placeholder={isStudio ? "studio@production.co.za" : "crew@example.com"}
            className={styles.lineInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Password</label>
          <input
            type="password"
            required
            placeholder="••••••••••••••••"
            className={styles.lineInput}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Log In
        </button>
      </form>

      <div className={styles.footerLinks}>
        <p>
          Don't have an account?{" "}
          <Link href={`/register/${role}`}>
            Sign up as {isStudio ? "Studio" : "Crew"}
          </Link>
        </p>
        <p className="mt-2 text-sm">
          Are you {isStudio ? "Crew" : "a Studio"} instead?{" "}
          <Link href={`/login/${isStudio ? "crew" : "studio"}`}>
            Switch to {isStudio ? "Crew Login" : "Studio Login"}
          </Link>
        </p>
      </div>
    </div>
  );
}