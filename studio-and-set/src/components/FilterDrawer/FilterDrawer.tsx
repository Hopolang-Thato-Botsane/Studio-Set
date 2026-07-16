'use client';

import React, { useState, useEffect } from 'react';
import styles from './FilterDrawer.module.css';
import { FilterState } from './Types';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  totalProducts: number;
  currentFilters: FilterState;
  onApplyFilters: (filters: FilterState) => void;
}

const GENDERS = ['MALE', 'FEMALE'] as const;
const SIZES = ['S', 'M', 'L', 'XL'] as const;
const CONDITIONS = ['NORMAL', 'COLD', 'WARM', 'WET'] as const;
const CATEGORIES = ['TROUSERS', 'SHIRTS', 'OUTERWEAR', 'ACCESSORIES'] as const;
const SORT_OPTIONS = [
  { value: 'NEWEST', label: 'NEWEST FIRST' },
  { value: 'OLDEST', label: 'OLDEST FIRST' },
  { value: 'PRICE_LOW_HIGH', label: 'PRICE: LOW TO HIGH' },
  { value: 'PRICE_HIGH_LOW', label: 'PRICE: HIGH TO LOW' },
] as const;

export default function FilterDrawer({
  isOpen,
  onClose,
  totalProducts,
  currentFilters,
  onApplyFilters,
}: FilterDrawerProps) {
  const [tempFilters, setTempFilters] = useState<FilterState>(currentFilters);

  useEffect(() => {
    if (isOpen) {
      setTempFilters(currentFilters);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentFilters]);

  if (!isOpen) return null;

  const handleSingleSelect = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    setTempFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  };

  const handleMultiSelect = (key: 'sizes' | 'conditions' | 'categories', value: string) => {
    setTempFilters((prev) => {
      const currentList = prev[key];
      const updatedList = currentList.includes(value)
        ? currentList.filter((item) => item !== value)
        : [...currentList, value];
      return { ...prev, [key]: updatedList };
    });
  };

  const handleReset = () => {
    setTempFilters({
      gender: null,
      sizes: [],
      conditions: [],
      categories: [],
      sortBy: null,
    });
  };

  const handleApply = () => {
    onApplyFilters(tempFilters);
    onClose();
  };

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />

      <aside className={styles.drawer} role="dialog" aria-modal="true">
        <div className={styles.header}>
          <span className={styles.headerTitle}>Available Options</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close filters">
            ✕
          </button>
        </div>

        <div className={styles.countBanner}>
          {totalProducts} Products In Stock
        </div>

        <div className={styles.scrollContent}>

          <div className={styles.filterSection}>
            <span className={styles.sectionLabel}>Sort By:</span>
            <div className={styles.optionsFlex}>
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`${styles.pillBtn} ${
                    tempFilters.sortBy === opt.value ? styles.activePill : ''
                  }`}
                  onClick={() => handleSingleSelect('sortBy', opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section: Gender */}
          <div className={styles.filterSection}>
            <span className={styles.sectionLabel}>Gender:</span>
            <div className={styles.optionsFlex}>
              {GENDERS.map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`${styles.pillBtn} ${
                    tempFilters.gender === g ? styles.activePill : ''
                  }`}
                  onClick={() => handleSingleSelect('gender', g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <span className={styles.sectionLabel}>Sizes:</span>
            <div className={styles.optionsFlex}>
              {SIZES.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  className={`${styles.squareBtn} ${
                    tempFilters.sizes.includes(sz) ? styles.activeSquare : ''
                  }`}
                  onClick={() => handleMultiSelect('sizes', sz)}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <span className={styles.sectionLabel}>Conditions:</span>
            <div className={styles.optionsFlex}>
              {CONDITIONS.map((cond) => (
                <button
                  key={cond}
                  type="button"
                  className={`${styles.pillBtn} ${
                    tempFilters.conditions.includes(cond) ? styles.activePill : ''
                  }`}
                  onClick={() => handleMultiSelect('conditions', cond)}
                >
                  {cond}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <span className={styles.sectionLabel}>Categories:</span>
            <div className={styles.optionsFlex}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.pillBtn} ${
                    tempFilters.categories.includes(cat) ? styles.activePill : ''
                  }`}
                  onClick={() => handleMultiSelect('categories', cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button type="button" className={styles.resetBtn} onClick={handleReset}>
            RESET FILTERS
          </button>
          <button type="button" className={styles.applyBtn} onClick={handleApply}>
            APPLY FILTERS
          </button>
        </div>
      </aside>
    </>
  );
}