'use client';

import React, { useState } from 'react';
import styles from './ProductionSummaryView.module.css';
import { productionSummaryData, Candidate, ProductionKit } from './ProductionSummaryData';

export interface ProductionSummaryViewProps {
  onConfirmAndBook?: (selectedData?: {
    selectedCrew: Record<string, string>;
    selectedKitId: string;
  }) => void;
}

export function ProductionSummaryView({ onConfirmAndBook }: ProductionSummaryViewProps) {
  const { searchMeta, categories, productionKits, costBreakdown } = productionSummaryData;

  const [selectedCrew, setSelectedCrew] = useState<Record<string, string>>({});
  const [selectedKitId, setSelectedKitId] = useState<string>(productionKits[0]?.id || '');
  const [isRegenerateOpen, setIsRegenerateOpen] = useState(false);

  const handleSelectCrew = (categoryTitle: string, candidateId: string) => {
    setSelectedCrew((prev) => ({ ...prev, [categoryTitle]: candidateId }));
  };

  const handleConfirmAndBook = () => {
    onConfirmAndBook?.({
      selectedCrew,
      selectedKitId,
    });
  };

  const formatZAR = (val: number) =>
    `R ${val.toLocaleString('en-ZA', { minimumFractionDigits: 0 })}`;

  return (
    <div className={styles.container}>
      <header className={styles.metaBar}>
        <div>
          <span className={styles.metaLabel}>Project Search</span>
          <h1 className={styles.metaTitle}>{searchMeta.queryText}</h1>
        </div>
        <div className={styles.metaBadges}>
          <span className={styles.pill}>📍 {searchMeta.location}</span>
          <span className={styles.pill}>🎬 {searchMeta.crewType}</span>
          <span className={styles.pillCap}>
            Cap: {formatZAR(searchMeta.budgetLimit)}
          </span>
        </div>
      </header>

      <div className={styles.layoutGrid}>
        <main className={styles.mainContent}>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Crew Selection</h2>

            {categories.map((cat) => (
              <div key={cat.title} className={styles.categoryBlock}>
                <div className={styles.sectionHeader}>
                  <h3 className={styles.categoryTitle}>{cat.title}</h3>
                  <span className={styles.badge}>{cat.candidates.length} Matches</span>
                </div>

                <div className={styles.scrollContainer}>
                  <div className={styles.cardGrid}>
                    {cat.candidates.map((candidate, idx) => {
                      const isSelected =
                        selectedCrew[cat.title] === candidate.id ||
                        (!selectedCrew[cat.title] && idx === 0);

                      return (
                        <CandidateCard
                          key={candidate.id}
                          candidate={candidate}
                          isSelected={isSelected}
                          onSelect={() => handleSelectCrew(cat.title, candidate.id)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Production Kits</h2>
            </div>

            <div className={styles.scrollContainer}>
              <div className={styles.cardGrid}>
                {productionKits.map((kit, idx) => (
                  <KitCard
                    key={kit.id}
                    kit={kit}
                    isSelected={selectedKitId ? selectedKitId === kit.id : idx === 0}
                    onSelect={() => setSelectedKitId(kit.id)}
                    formatZAR={formatZAR}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.costCard}>
            <h3 className={styles.costTitle}>Cost Breakdown</h3>

            <div className={styles.rowGroup}>
              {costBreakdown.items.map((item, idx) => (
                <div key={idx} className={styles.row}>
                  <span className={styles.rowLabel}>{item.label}</span>
                  <span
                    className={
                      typeof item.amount === 'string'
                        ? styles.rowValueGreen
                        : styles.rowValue
                    }
                  >
                    {typeof item.amount === 'number'
                      ? formatZAR(item.amount)
                      : item.amount}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.rowGroup}>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Subtotal (Excl. VAT)</span>
                <span className={styles.rowValue}>
                  {formatZAR(costBreakdown.subtotalExclVat)}
                </span>
              </div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>
                  VAT ({(costBreakdown.vatRate * 100).toFixed(0)}%)
                </span>
                <span className={styles.rowValue}>
                  {formatZAR(costBreakdown.vatAmount)}
                </span>
              </div>
            </div>

            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Grand Total</span>
              <span className={styles.totalValue}>
                {formatZAR(costBreakdown.grandTotal)}
              </span>
            </div>

            <button 
              type="button" 
              className={styles.btnPrimary}
              onClick={handleConfirmAndBook}
            >
              Confirm & Book
            </button>
            <button
              type="button"
              className={styles.btnSecondary}
              onClick={() => setIsRegenerateOpen(true)}
            >
              Regenerate Proposal
            </button>
          </div>
        </aside>
      </div>

      <div
        className={`${styles.modalOverlay} ${isRegenerateOpen ? styles.overlayVisible : ''}`}
        onClick={() => setIsRegenerateOpen(false)}
      />

      <aside
        className={`${styles.modalDrawer} ${isRegenerateOpen ? styles.drawerVisible : ''}`}
        aria-hidden={!isRegenerateOpen}
      >
        <div className={styles.modalHeader}>
          <span className={styles.modalHeaderTitle}>Results</span>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setIsRegenerateOpen(false)}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          <h2 className={styles.modalHeadline}>Roster Curation Complete</h2>
          <p className={styles.modalDescription}>
            These are the top-tier candidates matching your technical specifications. Roster availability is exclusively locked to your project dates.
          </p>
        </div>

        <div className={styles.modalFooter}>
          <h3 className={styles.footerTitle}>Initiate Project With Recommended?</h3>
          <button
            type="button"
            className={styles.modalProceedBtn}
            onClick={() => setIsRegenerateOpen(false)}
          >
            Proceed
          </button>
        </div>
      </aside>
    </div>
  );
}

function CandidateCard({
  candidate,
  isSelected,
  onSelect,
}: {
  candidate: Candidate;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const imageSrc =
    typeof candidate.image === 'object' && candidate.image !== null
      ? (candidate.image as { src?: string }).src || ''
      : candidate.image;

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  const formatZA_p_d = (val?: number) =>
    val ? `R ${val.toLocaleString('en-ZA')} p/d` : 'R 3 500 p/d';

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`}
    >
      <div className={styles.cardBadgesTop}>
        {candidate.pickTag && (
          <span className={styles.pickLabel}>{candidate.pickTag}</span>
        )}
        <span className={styles.locationTag}>{candidate.location}</span>
      </div>

      {imageSrc ? (
        <img
          src={imageSrc}
          alt={candidate.name}
          className={styles.cardMedia}
        />
      ) : (
        <div className={styles.cardMediaFallback}>
          {candidate.name.charAt(0)}
        </div>
      )}
      <div className={styles.cardMediaOverlay} />

      <div className={styles.cardBottomBar}>
        <div className={styles.cardMainInfo}>
          <h4 className={styles.cardTitle}>{candidate.name}</h4>
          <p className={styles.cardSubtitle}>
            {candidate.role}/ {candidate.yearsExperience}+ Years
          </p>
        </div>

        <button
          type="button"
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
          className={styles.toggleBtn}
          onClick={toggleExpand}
        >
          <span className={isExpanded ? styles.arrowDown : styles.arrowUp} />
        </button>
      </div>

      <div
        className={`${styles.expandedDrawer} ${
          isExpanded ? styles.drawerOpen : ''
        }`}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.cardMainInfo}>
            <h4 className={styles.cardTitle}>{candidate.name}</h4>
            <p className={styles.cardSubtitle}>
              {candidate.role}/ {candidate.yearsExperience}+ Years
            </p>
          </div>
          <button
            type="button"
            aria-label="Collapse details"
            className={styles.toggleBtn}
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
              {(candidate as any).education || 'UCT Degree in Film & Television'}
            </p>
          </div>

          <div className={styles.infoSection}>
            <h5 className={styles.infoLabel}>Work Experience</h5>
            <div className={styles.expList}>
              {((candidate as any).workExperience || [
                '2+ Years at Soul Fire Studios',
                '3 Years at Fire Mind Studios',
                '3+ Years at Mind Fire Studios',
              ]).map((exp: string, idx: number) => (
                <p key={idx} className={styles.infoText}>
                  {exp}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.infoSection}>
            <h5 className={styles.infoLabel}>Rate</h5>
            <p className={styles.rateText}>
              {formatZA_p_d((candidate as any).rate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function KitCard({
  kit,
  isSelected,
  onSelect,
  formatZAR,
}: {
  kit: ProductionKit;
  isSelected: boolean;
  onSelect: () => void;
  formatZAR: (val: number) => string;
}) {
  const imageSrc =
    typeof kit.image === 'object' && kit.image !== null
      ? (kit.image as { src?: string }).src || ''
      : kit.image;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`}
    >
      <div className={styles.cardBadgesTop}>
        {kit.pickTag && <span className={styles.pickLabel}>{kit.pickTag}</span>}
        <span className={styles.brandBadge}>{kit.brandTag}</span>
      </div>

      {imageSrc ? (
        <img
          src={imageSrc}
          alt={kit.name}
          className={styles.cardMedia}
        />
      ) : (
        <div className={styles.cardMediaFallback}>
          {kit.brandTag}
        </div>
      )}
      <div className={styles.cardMediaOverlay} />

      <div className={styles.cardBottomBar}>
        <div className={styles.cardMainInfo}>
          <h4 className={styles.cardTitle}>{kit.name}</h4>
          <p className={styles.cardSubtitle}>{formatZAR(kit.price)} / day</p>
        </div>
      </div>
    </div>
  );
}