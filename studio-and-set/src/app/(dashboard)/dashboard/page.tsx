// 'use client';

// import { useState } from 'react';
// import styles from './page.module.css';
// import { ProductionSummaryView } from '@/components/Dashboard/ProductionSummaryView';

// export default function DashboardPage() {
//   const [hasSearched, setHasSearched] = useState(false);

//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setHasSearched(true);
//   };

//   if (hasSearched) {
//     return <ProductionSummaryView />;
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <h1 className={styles.title}>Welcome, What are we doing today?</h1>

//       <form onSubmit={handleSearchSubmit} className={styles.searchContainer}>
//         <input
//           type="text"
//           className={styles.searchInput}
//           placeholder="Enter Production name, genre and crew type to begin."
//         />
//       </form>
//     </div>
//   );
// }

import { ProductionSummaryView } from '@/components/Dashboard/ProductionSummaryView';

export default function DashboardPage() {
  return (
    <div>
      <ProductionSummaryView />
    </div>
  );
}