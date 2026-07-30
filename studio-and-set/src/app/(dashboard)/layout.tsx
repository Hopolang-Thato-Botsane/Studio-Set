import Sidebar from "@/components/SideBar/SideBar";
import styles from "./layout.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      {/* 1. Sidebar */}
      <Sidebar />

      {/* 2. Main Body */}
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}