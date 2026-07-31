'use client';

import React, { useState } from 'react';
import { ProductionSummaryView } from './ProductionSummaryView';
import { ActiveProductionView, ActiveProductionDetails } from './ActiveProductionView';
import { productionSummaryData } from './ProductionSummaryData';

export function DashboardContainer() {
  const [currentView, setCurrentView] = useState<'summary' | 'active'>('summary');

  // Pull candidates and kit directly from your real data source
  const firstCategoryCrew = productionSummaryData.categories.map((cat) => cat.candidates[0]).filter(Boolean);
  const defaultKit = productionSummaryData.productionKits[0];

  const [activeProduction, setActiveProduction] = useState<ActiveProductionDetails>({
    projectName: productionSummaryData.searchMeta.queryText || 'Nora Advert',
    address: '90 Rivonia Road, Sandton',
    startDate: '01/08/2026',
    endDate: '05/08/2026',
    status: 'Awaiting Payment',
    crew: firstCategoryCrew.map((c) => ({
      id: c.id,
      name: c.name,
      role: c.role,
      yearsExperience: c.yearsExperience,
      location: c.location,
      pickTag: c.pickTag,
      image: c.image, // Correct image path: /assets/images/Crew/...
    })),
    kit: {
      id: defaultKit?.id || 'kit-1',
      name: defaultKit?.name || 'COMMERCIAL KIT',
      brandTag: defaultKit?.brandTag || 'RED',
      pickTag: defaultKit?.pickTag || '#1 Pick',
      image: defaultKit?.image || '/assets/images/Kits/commercial-kit.jpg',
    },
  });

  const handleConfirmAndBook = (selectedData?: {
    selectedCrew?: Record<string, string>;
    selectedKitId?: string;
  }) => {
    if (selectedData?.selectedCrew || selectedData?.selectedKitId) {
      // Map user selections to actual candidates
      const chosenCrew = productionSummaryData.categories.map((cat) => {
        const selectedId = selectedData.selectedCrew?.[cat.title];
        return (
          cat.candidates.find((candidate) => candidate.id === selectedId) ||
          cat.candidates[0]
        );
      }).filter(Boolean);

      const chosenKit = productionSummaryData.productionKits.find(
        (k) => k.id === selectedData.selectedKitId
      ) || productionSummaryData.productionKits[0];

      setActiveProduction((prev) => ({
        ...prev,
        crew: chosenCrew.map((c) => ({
          id: c.id,
          name: c.name,
          role: c.role,
          yearsExperience: c.yearsExperience,
          location: c.location,
          pickTag: c.pickTag,
          image: c.image,
        })),
        kit: {
          id: chosenKit.id,
          name: chosenKit.name,
          brandTag: chosenKit.brandTag,
          pickTag: chosenKit.pickTag,
          image: chosenKit.image,
        },
      }));
    }

    setCurrentView('active');
  };

  const handleUpdateProduction = () => {
    setCurrentView('summary');
  };

  return (
    <>
      {currentView === 'summary' ? (
        <ProductionSummaryView onConfirmAndBook={handleConfirmAndBook} />
      ) : (
        <ActiveProductionView
          production={activeProduction}
          onContactCrew={(crewId) => {
            console.log(`Initiate contact drawer for crew ID: ${crewId}`);
          }}
          onUpdateProduction={handleUpdateProduction}
        />
      )}
    </>
  );
}