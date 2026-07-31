'use client';

import React from 'react';
import styles from './ActiveProductionView.module.css';

export interface ActiveCrewMember {
  id: string;
  name: string;
  role: string;
  yearsExperience: number;
  location: string;
  pickTag?: string;
  image?: string | { src: string } | any;
}

export interface ActiveKit {
  id: string;
  name: string;
  brandTag: string;
  pickTag?: string;
  image?: string | { src: string } | any;
}

export interface ActiveProductionDetails {
  projectName: string;
  address: string;
  startDate: string;
  endDate: string;
  status: string;
  crew: ActiveCrewMember[];
  kit: ActiveKit;
}

interface ActiveProductionViewProps {
  production: ActiveProductionDetails;
  onContactCrew?: (crewId: string) => void;
  onUpdateProduction?: () => void;
}

export function ActiveProductionView({
  production,
  onContactCrew,
  onUpdateProduction,
}: ActiveProductionViewProps) {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1 className={styles.title}>Production Details</h1>
        <p className={styles.statusLabel}>
          Production Status: <span className={styles.statusValue}>{production.status}</span>
        </p>

        <div className={styles.metaRow}>
          <div className={styles.metaField}>
            <span className={styles.fieldLabel}>Project Name</span>
            <div className={styles.fieldValue}>{production.projectName}</div>
          </div>

          <div className={styles.metaField}>
            <span className={styles.fieldLabel}>Delivery Location</span>
            <div className={styles.fieldValue}>{production.address}</div>
          </div>

          <div className={styles.metaField}>
            <span className={styles.fieldLabel}>Production Start:</span>
            <div className={styles.fieldValue}>{production.startDate}</div>
          </div>

          <div className={styles.metaField}>
            <span className={styles.fieldLabel}>Production End:</span>
            <div className={styles.fieldValue}>{production.endDate}</div>
          </div>
        </div>
      </section>

      {/* Selected Crew Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Crew</h2>
        <div className={styles.crewGrid}>
          {production.crew.map((member) => (
            <CrewCard
              key={member.id}
              member={member}
              onContact={() => onContactCrew?.(member.id)}
            />
          ))}
        </div>
      </section>

      {/* Production Kit Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Production Kit</h2>
        <div className={styles.kitWrapper}>
          <KitCard kit={production.kit} />
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Update Production Section */}
      <section className={styles.updateSection}>
        <h3 className={styles.updateTitle}>Update Production Schedule</h3>
        <p className={styles.updateText}>
          Adjusting your active production schedule will update crew availability contracts and extend or prorate your gear dispatch period. Click 'Update Production' to apply these changes and issue an adjusted invoice summary.
        </p>
        <button
          type="button"
          className={styles.btnUpdate}
          onClick={onUpdateProduction}
        >
          Update Production
        </button>
      </section>
    </div>
  );
}

function CrewCard({
  member,
  onContact,
}: {
  member: ActiveCrewMember;
  onContact: () => void;
}) {
  // Extract image path cleanly whether passed as a string or static import object
  const imageSrc =
    typeof member.image === 'object' && member.image !== null
      ? (member.image as { src?: string }).src || ''
      : member.image;

  return (
    <div className={styles.card}>
      <div className={styles.cardBadgesTop}>
        {member.pickTag && <span className={styles.pickLabel}>{member.pickTag}</span>}
        <span className={styles.locationTag}>{member.location}</span>
      </div>

      <button
        type="button"
        className={styles.contactBtn}
        onClick={(e) => {
          e.stopPropagation();
          onContact();
        }}
        aria-label={`Contact ${member.name}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>

      {imageSrc ? (
        <img src={imageSrc} alt={member.name} className={styles.cardMedia} />
      ) : (
        <div className={styles.cardMediaFallback}>{member.name.charAt(0)}</div>
      )}

      <div className={styles.cardMediaOverlay} />

      <div className={styles.cardBottomBar}>
        <div className={styles.cardMainInfo}>
          <h4 className={styles.cardTitle}>{member.name}</h4>
          <p className={styles.cardSubtitle}>
            {member.role}/ {member.yearsExperience}+ Years
          </p>
        </div>
        <button type="button" className={styles.arrowBtn} aria-label="Toggle details">
          <span className={styles.arrowUp} />
        </button>
      </div>
    </div>
  );
}

function KitCard({ kit }: { kit: ActiveKit }) {
  const imageSrc =
    typeof kit.image === 'object' && kit.image !== null
      ? (kit.image as { src?: string }).src || ''
      : kit.image;

  return (
    <div className={`${styles.card} ${styles.kitCard}`}>
      <div className={styles.cardBadgesTop}>
        {kit.pickTag && <span className={styles.pickLabel}>{kit.pickTag}</span>}
        <span className={styles.brandBadge}>{kit.brandTag}</span>
      </div>

      {imageSrc ? (
        <img src={imageSrc} alt={kit.name} className={styles.cardMedia} />
      ) : (
        <div className={styles.cardMediaFallback}>{kit.brandTag}</div>
      )}

      <div className={styles.cardMediaOverlay} />

      <div className={styles.cardBottomBar}>
        <h4 className={styles.cardTitle}>{kit.name}</h4>
        <button type="button" className={styles.arrowBtn} aria-label="Toggle details">
          <span className={styles.arrowUp} />
        </button>
      </div>
    </div>
  );
}