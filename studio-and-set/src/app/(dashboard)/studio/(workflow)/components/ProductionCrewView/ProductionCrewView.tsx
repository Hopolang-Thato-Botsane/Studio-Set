import React, { useState, useMemo } from 'react';
import styles from './ProductionCrewView.module.css';

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  pickTag?: string;
  yearsExp?: string;
  image: string;
  specialization?: string;
  tags?: string[];
}

export interface CategoryGroup {
  categoryId: string;
  title: string;
  members: CrewMember[];
}

interface CrewSearchProps {
  initialCategories: CategoryGroup[];
  onSelectMember?: (member: CrewMember) => void;
}

export const ProductionCrewView: React.FC<CrewSearchProps> = ({
  initialCategories,
  onSelectMember,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return initialCategories;

    return initialCategories
      .map((category) => {
        const matchingMembers = category.members.filter((member) => {
          const matchName = member.name.toLowerCase().includes(query);
          const matchRole = member.role.toLowerCase().includes(query);
          const matchSpec = member.specialization?.toLowerCase().includes(query);
          const matchTags = member.tags?.some((tag) =>
            tag.toLowerCase().includes(query)
          );

          return matchName || matchRole || matchSpec || matchTags;
        });

        return {
          ...category,
          members: matchingMembers,
        };
      })
      .filter((category) => category.members.length > 0);
  }, [searchQuery, initialCategories]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Production Crew</h1>
        <p className={styles.subtitle}>
          Showing local crew matched by specialty and active availability.
        </p>
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, role, or tag (e.g., Director, Gaffer)..."
          className={styles.searchInput}
        />
        <svg
          className={styles.searchIcon}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {filteredCategories.length > 0 ? (
        <div className={styles.sectionList}>
          {filteredCategories.map((category) => (
            <section key={category.categoryId} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>

              <div className={styles.grid}>
                {category.members.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => onSelectMember?.(member)}
                    className={styles.card}
                  >
                    <div className={styles.imageBox}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className={styles.cardImage}
                      />

                      <div className={styles.badges}>
                        {member.pickTag && (
                          <span className={styles.pickBadge}>
                            {member.pickTag}
                          </span>
                        )}
                        {member.yearsExp && (
                          <span className={styles.yearsBadge}>
                            {member.yearsExp}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <div>
                        <h3 className={styles.memberName}>{member.name}</h3>
                        <p className={styles.memberRole}>{member.role}</p>
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
          <p className={styles.emptyTitle}>0 matches found</p>
          <p className={styles.emptyDesc}>
            We couldn't find any crew matching "{searchQuery}". Try searching for another role, specialty, or tag.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className={styles.clearBtn}
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};