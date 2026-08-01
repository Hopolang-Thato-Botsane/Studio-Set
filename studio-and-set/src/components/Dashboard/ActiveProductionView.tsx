'use client';

import React, { useState } from 'react';
import styles from './ActiveProductionView.module.css';
import { MessagesDrawer } from '../MessageDrawer/MessageDrawer';

export interface ActiveCrewMember {
  id: string;
  name: string;
  role: string;
  yearsExperience: number;
  location: string;
  pickTag?: string;
  image?: string | { src: string };
  education?: string;
  workExperience?: string[];
  rate?: number;
}

export interface ActiveKit {
  id: string;
  name: string;
  brandTag: string;
  pickTag?: string;
  image?: string | { src: string };
  price?: number;
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
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [selectedCrewId, setSelectedCrewId] = useState<string | null>(null);

  const handleContactClick = (crewId: string) => {
    console.log('[ActiveProductionView] Contact Button Clicked! Crew ID:', crewId);
    setSelectedCrewId(crewId);
    setIsMessagesOpen(true);
    if (onContactCrew) {
      onContactCrew(crewId);
    }
  };

  return (
    <div className={styles.container}>
      
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
            <span className={styles.fieldLabel}>Production Start</span>
            <div className={styles.fieldValue}>{production.startDate}</div>
          </div>

          <div className={styles.metaField}>
            <span className={styles.fieldLabel}>Production End</span>
            <div className={styles.fieldValue}>{production.endDate}</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Crew</h2>
        <div className={styles.crewGrid}>
          {production.crew.map((member) => (
            <CrewCard
              key={member.id}
              member={member}
              onContact={() => handleContactClick(member.id)}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Production Kit</h2>
        <div className={styles.kitWrapper}>
          <KitCard kit={production.kit} />
        </div>
      </section>

      <hr className={styles.divider} />

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

      <MessagesDrawer
        isOpen={isMessagesOpen}
        onClose={() => {
          console.log('[ActiveProductionView] Closing drawer');
          setIsMessagesOpen(false);
        }}
        crewId={selectedCrewId}
      />
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
  const [isExpanded, setIsExpanded] = useState(false);

  const imageSrc =
    typeof member.image === 'object' && member.image !== null
      ? member.image.src
      : member.image;

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  const handleContactBtnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('[CrewCard] Paperplane icon clicked for:', member.id);
    onContact();
  };

  const formatZA_p_d = (val?: number) =>
    val ? `R ${val.toLocaleString('en-ZA')} p/d` : 'R 3 500 p/d';

  return (
    <div className={styles.card}>
      {imageSrc ? (
        <img src={imageSrc} alt={member.name} className={styles.cardMedia} />
      ) : (
        <div className={styles.cardMediaFallback}>{member.name.charAt(0)}</div>
      )}
      <div className={styles.cardMediaOverlay} />

      <div className={styles.cardBadgesTop}>
        {member.pickTag && <span className={styles.pickLabel}>{member.pickTag}</span>}
        <span className={styles.locationTag}>{member.location}</span>
      </div>

      <button
        type="button"
        className={styles.contactBtn}
        onClick={handleContactBtnClick}
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

      <div className={styles.cardBottomBar}>
        <div className={styles.cardMainInfo}>
          <h4 className={styles.cardTitle}>{member.name}</h4>
          <p className={styles.cardSubtitle}>
            {member.role} / {member.yearsExperience}+ Years
          </p>
        </div>
        <button
          type="button"
          aria-expanded={isExpanded}
          className={styles.arrowBtn}
          onClick={toggleExpand}
        >
          <span className={isExpanded ? styles.arrowDown : styles.arrowUp} />
        </button>
      </div>

      {isExpanded && (
        <div className={styles.expandedDrawer}>
          <div className={styles.drawerHeader}>
            <div className={styles.cardMainInfo}>
              <h4 className={styles.cardTitle}>{member.name}</h4>
              <p className={styles.cardSubtitle}>
                {member.role} / {member.yearsExperience}+ Years
              </p>
            </div>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={toggleExpand}
            >
              <span className={styles.arrowDown} />
            </button>
          </div>

          <hr className={styles.drawerDivider} />

          <div className={styles.drawerBody}>
            <div className={styles.infoSection}>
              <h5 className={styles.infoLabel}>Education</h5>
              <p className={styles.infoText}>
                {member.education || 'UCT Degree in Film & Television'}
              </p>
            </div>

            <div className={styles.infoSection}>
              <h5 className={styles.infoLabel}>Work Experience</h5>
              <div className={styles.expList}>
                {(member.workExperience || [
                  '2+ Years at Soul Fire Studios',
                  '3 Years at Fire Mind Studios',
                ]).map((exp: string, idx: number) => (
                  <p key={idx} className={styles.infoText}>
                    {exp}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.infoSection}>
              <h5 className={styles.infoLabel}>Rate</h5>
              <p className={styles.rateText}>{formatZA_p_d(member.rate)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function KitCard({ kit }: { kit: ActiveKit }) {
  const imageSrc =
    typeof kit.image === 'object' && kit.image !== null
      ? kit.image.src
      : kit.image;

  return (
    <div className={`${styles.card} ${styles.kitCard}`}>
      {imageSrc ? (
        <img src={imageSrc} alt={kit.name} className={styles.cardMedia} />
      ) : (
        <div className={styles.cardMediaFallback}>{kit.brandTag}</div>
      )}

      <div className={styles.cardMediaOverlay} />

      <div className={styles.cardBadgesTop}>
        {kit.pickTag && <span className={styles.pickLabel}>{kit.pickTag}</span>}
        <span className={styles.brandBadge}>{kit.brandTag}</span>
      </div>

      <div className={styles.cardBottomBar}>
        <h4 className={styles.cardTitle}>{kit.name}</h4>
      </div>
    </div>
  );
}