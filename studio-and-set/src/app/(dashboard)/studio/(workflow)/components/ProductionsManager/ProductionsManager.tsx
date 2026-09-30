'use client';

import React, { useState } from 'react';

import { INITIAL_PRODUCTIONS, ProductionItem } from './ProductionsData';
import styles from './ProductionsManager.module.css';

interface ProductionsManagerProps {
  initialProductionId?: string | null;
  onBackToDashboard?: () => void;
}

export const ProductionsManager: React.FC<ProductionsManagerProps> = ({
  initialProductionId = null,
  onBackToDashboard,
}) => {
  const [productions, setProductions] = useState<ProductionItem[]>(INITIAL_PRODUCTIONS);
  const [selectedProductionId, setSelectedProductionId] = useState<string | null>(
    initialProductionId
  );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Form State for Production Extension
  const [newEndDate, setNewEndDate] = useState<string>('');

  const activeProduction = productions.find((p) => p.id === selectedProductionId);

  const handleOpenEdit = () => {
    if (activeProduction) {
      setNewEndDate(activeProduction.endDate);
      setIsEditModalOpen(true);
    }
  };

  const handleEndProduction = () => {
    if (!activeProduction) return;

    setProductions((prev) => prev.filter((p) => p.id !== activeProduction.id));
    setNotification(`Production "${activeProduction.title}" has been successfully ended.`);
    setIsEditModalOpen(false);
    setSelectedProductionId(null);
  };

  // Extension calculation logic
  const calculateExtension = () => {
    if (!activeProduction || !newEndDate) {
      return { days: 0, cost: 0, deposit: 0 };
    }
    const currentEnd = new Date(activeProduction.endDate).getTime();
    const updatedEnd = new Date(newEndDate).getTime();
    const diffTime = updatedEnd - currentEnd;
    const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    const cost = diffDays * activeProduction.dailyRate;
    const deposit = cost * 0.5;

    return { days: diffDays, cost, deposit };
  };

  const extensionStats = calculateExtension();

  const handleBack = () => {
    if (selectedProductionId) {
      setSelectedProductionId(null);
    } else if (onBackToDashboard) {
      onBackToDashboard();
    }
  };

  const activeList = productions.filter((p) => p.status === 'In Production');
  const pendingList = productions.filter((p) => p.status !== 'In Production');

  return (
    <div className={styles.container}>
      {notification && (
        <div className={styles.notification}>
          <span>{notification}</span>
          <button className={styles.closeNotif} onClick={() => setNotification(null)}>
            ✕
          </button>
        </div>
      )}

      {!selectedProductionId ? (
        /* Overview Dashboard */
        <>
          <div style={{ marginBottom: '1.5rem' }}>
            {onBackToDashboard && (
              <button className={styles.backButton} onClick={onBackToDashboard}>
                ← Back to Dashboard
              </button>
            )}
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Active Productions</h2>
            <div className={styles.grid}>
              {activeList.map((prod) => (
                <div
                  key={prod.id}
                  className={styles.card}
                  onClick={() => setSelectedProductionId(prod.id)}
                >
                  <div className={styles.cardMedia}>
                    <img src={prod.coverImage} alt={prod.title} className={styles.cardImage} />
                    <span className={styles.locationBadge}>{prod.locationBadge}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{prod.title}</h3>
                    <p className={styles.cardStatus}>{prod.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Pending Productions</h2>
            <div className={styles.grid}>
              {pendingList.map((prod) => (
                <div
                  key={prod.id}
                  className={styles.card}
                  onClick={() => setSelectedProductionId(prod.id)}
                >
                  <div className={styles.cardMedia}>
                    <img src={prod.coverImage} alt={prod.title} className={styles.cardImage} />
                    <span className={styles.locationBadge}>{prod.locationBadge}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{prod.title}</h3>
                    <p className={styles.cardStatus}>{prod.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        /* Detail View */
        activeProduction && (
          <div>
            <button className={styles.backButton} onClick={handleBack}>
              ← Back to Productions
            </button>

            <div className={styles.heroMedia}>
              <img
                src={activeProduction.coverImage}
                alt={activeProduction.title}
                className={styles.heroImage}
              />
            </div>

            <div className={styles.detailHeader}>
              <h1 className={styles.detailTitle}>{activeProduction.title}</h1>
              {activeProduction.subtitle && (
                <p className={styles.detailSubtitle}>{activeProduction.subtitle}</p>
              )}
              <p className={styles.detailSubtitle}>
                Production Location: {activeProduction.location}
              </p>
            </div>

            {activeProduction.kits.length > 0 && (
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Production Equipment</h3>
                <div className={styles.subGrid}>
                  {activeProduction.kits.map((kit) => (
                    <div key={kit.id} className={styles.miniCard}>
                      <img src={kit.image} alt={kit.title} className={styles.miniImage} />
                      <div className={styles.miniFooter}>
                        <div className={styles.miniTitle}>{kit.title}</div>
                        <div className={styles.miniSub}>{kit.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeProduction.crew.length > 0 && (
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Production Crew</h3>
                <div className={styles.subGrid}>
                  {activeProduction.crew.map((member) => (
                    <div key={member.id} className={styles.miniCard}>
                      <img src={member.image} alt={member.name} className={styles.miniImage} />
                      <div className={styles.miniFooter}>
                        <div className={styles.miniTitle}>{member.name}</div>
                        <div className={styles.miniSub}>{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className={styles.financialBox}>
              <h3 className={styles.sectionTitle}>Financial Breakdown</h3>
              <p className={styles.burnRate}>
                Estimated Burn Rate: {activeProduction.estimatedBurnRate}
              </p>
              <p className={styles.timeline}>
                Production Timeline: {activeProduction.startDate} – {activeProduction.endDate}
              </p>

              <button className={styles.editBtn} onClick={handleOpenEdit}>
                Edit Production
              </button>
            </div>
          </div>
        )
      )}

      {/* Edit Modal */}
      {isEditModalOpen && activeProduction && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Update Production Schedule</h2>
              <button className={styles.closeModal} onClick={() => setIsEditModalOpen(false)}>
                ✕
              </button>
            </div>

            <div className={styles.calendarControls}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Extend Wrap Date</label>
                <input
                  type="date"
                  value={newEndDate}
                  min={activeProduction.endDate}
                  onChange={(e) => setNewEndDate(e.target.value)}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.summaryBox}>
              <p className={styles.summaryText}>
                <strong>EXTENSION SUMMARY:</strong> +{extensionStats.days} Days (New Wrap:{' '}
                {newEndDate})
              </p>
              <p className={styles.summaryText}>
                Production Extension Cost: R {extensionStats.cost.toLocaleString()}
              </p>
              <p className={styles.summaryText}>
                Required Deposit (50%): R {extensionStats.deposit.toLocaleString()}
              </p>
            </div>

            <div className={styles.actionsGroup}>
              <button className={styles.downloadBtn} onClick={() => setIsEditModalOpen(false)}>
                Download Quotation
              </button>
              <button className={styles.endBtn} onClick={handleEndProduction}>
                End Production
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};