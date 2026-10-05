import styles from "./layout.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}