import styles from "./page.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Welcome, What are we doing today?</h1>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Enter Production name, genre and crew type to begin."
        />
      </div>
    </div>
  );
}