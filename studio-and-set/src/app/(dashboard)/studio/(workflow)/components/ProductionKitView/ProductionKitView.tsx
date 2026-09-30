import React, { useState, useMemo } from 'react';
import styles from './ProductionKitsView.module.css';

export interface KitItem {
  id: string;
  brand: string;
  subCategory: string;
  pickTag?: string;
  image: string;
}

export interface KitCategoryGroup {
  categoryId: string;
  title: string;
  kits: KitItem[];
}

interface ProductionKitsViewProps {
  initialCategories: KitCategoryGroup[];
  onSelectKit?: (kit: KitItem) => void;
}

export const ProductionKitsView: React.FC<ProductionKitsViewProps> = ({
  initialCategories,
  onSelectKit,
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');

  const filterOptions = useMemo(() => {
    const titles = initialCategories.map((cat) => cat.title);
    return ['All', ...titles];
  }, [initialCategories]);

  const filteredCategories = useMemo(() => {
    if (selectedType === 'All') return initialCategories;
    return initialCategories.filter((cat) => cat.title === selectedType);
  }, [selectedType, initialCategories]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Production Kits</h1>
        <p className={styles.subtitle}>
          Displaying local equipment packages matched by department and active availability.
        </p>
      </div>

      <div className={styles.filterWrapper}>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className={styles.selectInput}
        >
          <option value="All">Kit Type</option>
          {filterOptions.slice(1).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <svg
          className={styles.selectIcon}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {filteredCategories.length > 0 ? (
        <div className={styles.sectionList}>
          {filteredCategories.map((category) => (
            <section key={category.categoryId} className={styles.kitSection}>
              <h2 className={styles.sectionTitle}>{category.title}</h2>

              <div className={styles.grid}>
                {category.kits.map((kit) => (
                  <div
                    key={kit.id}
                    onClick={() => onSelectKit?.(kit)}
                    className={styles.card}
                  >
                    <div className={styles.imageBox}>
                      <img
                        src={kit.image}
                        alt={`${kit.brand} kit`}
                        className={styles.cardImage}
                      />

                      <div className={styles.badges}>
                        {kit.pickTag && (
                          <span className={styles.pickBadge}>
                            {kit.pickTag}
                          </span>
                        )}
                        <span className={styles.brandBadge}>{kit.brand}</span>
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <div>
                        <h3 className={styles.kitName}>{kit.brand}</h3>
                        <p className={styles.kitCategory}>{kit.subCategory}</p>
                      </div>
                      <div className={styles.arrowBtn}>→</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p className={styles.emptyTitle}>0 kits available</p>
          <p className={styles.emptyDesc}>
            No equipment packages found for the selected filter.
          </p>
        </div>
      )}
    </div>
  );
};