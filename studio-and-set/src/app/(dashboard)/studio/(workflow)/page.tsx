'use client';

import React, { useState } from 'react';
import { DashboardSearch } from './components/DashboardSearch/DashboardSearch';
import { ProductionsManager } from './components/ProductionsManager/ProductionsManager';

export default function StudioWorkflowPage() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'productions'>('dashboard');
  const [selectedProductionId, setSelectedProductionId] = useState<string | null>(null);

  const handleNavigateToProduction = (productionId: string) => {
    setSelectedProductionId(productionId);
    setCurrentView('productions');
  };

  const handleGoToDashboard = () => {
    setSelectedProductionId(null);
    setCurrentView('dashboard');
  };

  return (
    <div style={{ width: '100%', minHeight: '100%' }}>
      {currentView === 'dashboard' ? (
        <DashboardSearch onNavigateToProduction={handleNavigateToProduction} />
      ) : (
        <ProductionsManager
          initialProductionId={selectedProductionId}
          onBackToDashboard={handleGoToDashboard}
        />
      )}
    </div>
  );
}