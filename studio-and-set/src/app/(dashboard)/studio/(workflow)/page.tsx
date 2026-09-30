'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { DashboardSearch } from './components/DashboardSearch/DashboardSearch';
import { ProductionsManager } from './components/ProductionsManager/ProductionsManager';
import { ProductionCrewView } from './components/ProductionCrewView/ProductionCrewView';
import { ProductionKitsView } from './components/ProductionKitView/ProductionKitsView';

import { mockCrewMembers, mockEquipmentPackages } from './data/CrewKitsData';

type WorkflowView = 'dashboard' | 'productions' | 'crew' | 'kits';

const normalizeKit = (kit: any, index: number) => ({
  ...kit,
  id: kit.id || `kit-${index}`,
  key: kit.id || `kit-${index}`,
  name: kit.name || kit.title || 'Equipment Kit',
  title: kit.title || kit.name || 'Equipment Kit',
  image: kit.image || kit.imageUrl || kit.photo || 'https://images.unsplash.com/photo-1512790182412-b19e6d614397?w=600&auto=format&fit=crop&q=80',
  imageUrl: kit.imageUrl || kit.image || kit.photo || 'https://images.unsplash.com/photo-1512790182412-b19e6d614397?w=600&auto=format&fit=crop&q=80',
});

const normalizeCrew = (member: any, index: number) => ({
  ...member,
  id: member.id || `crew-${index}`,
  key: member.id || `crew-${index}`,
  name: member.name || member.fullName || 'Crew Member',
  image: member.image || member.avatar || member.photoUrl || member.imageUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
  avatar: member.avatar || member.image || member.photoUrl || member.imageUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
  imageUrl: member.imageUrl || member.image || member.avatar || member.photoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
});

const kitDepartments = Array.from(
  new Set((mockEquipmentPackages as any[]).map((k) => k.department || k.category || 'General'))
);

const formattedKitsCategories = [
  {
    id: 'all-kits',
    key: 'all-kits',
    name: 'All Equipment Kits',
    title: 'All Equipment Kits',
    categoryName: 'All Equipment Kits',
    kits: (mockEquipmentPackages as any[]).map(normalizeKit),
    packages: (mockEquipmentPackages as any[]).map(normalizeKit),
    items: (mockEquipmentPackages as any[]).map(normalizeKit),
  },
  ...kitDepartments.map((dept, idx) => {
    const filtered = (mockEquipmentPackages as any[])
      .filter((k) => (k.department || k.category) === dept)
      .map(normalizeKit);
    return {
      id: `dept-kit-${idx}`,
      key: `dept-kit-${idx}`,
      name: dept,
      title: dept,
      categoryName: dept,
      kits: filtered,
      packages: filtered,
      items: filtered,
    };
  }),
];

const crewDepartments = Array.from(
  new Set((mockCrewMembers as any[]).map((c) => c.department || c.role || 'General'))
);

const formattedCrewCategories = [
  {
    id: 'all-crew',
    key: 'all-crew',
    name: 'All Crew Members',
    title: 'All Crew Members',
    categoryName: 'All Crew Members',
    members: (mockCrewMembers as any[]).map(normalizeCrew),
    crew: (mockCrewMembers as any[]).map(normalizeCrew),
    items: (mockCrewMembers as any[]).map(normalizeCrew),
  },
  ...crewDepartments.map((dept, idx) => {
    const filtered = (mockCrewMembers as any[])
      .filter((c) => (c.department || c.role) === dept)
      .map(normalizeCrew);
    return {
      id: `dept-crew-${idx}`,
      key: `dept-crew-${idx}`,
      name: dept,
      title: dept,
      categoryName: dept,
      members: filtered,
      crew: filtered,
      items: filtered,
    };
  }),
];

function WorkflowContent() {
  const searchParams = useSearchParams();
  const urlView = searchParams.get('view') as WorkflowView | null;

  const [currentView, setCurrentView] = useState<WorkflowView>('dashboard');
  const [selectedProductionId, setSelectedProductionId] = useState<string | null>(null);

  useEffect(() => {
    if (urlView && ['dashboard', 'productions', 'crew', 'kits'].includes(urlView)) {
      setCurrentView(urlView);
    } else {
      setCurrentView('dashboard');
    }
  }, [urlView]);

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
      {currentView === 'dashboard' && (
        <DashboardSearch onNavigateToProduction={handleNavigateToProduction} />
      )}

      {currentView === 'productions' && (
        <ProductionsManager
          initialProductionId={selectedProductionId}
          onBackToDashboard={handleGoToDashboard}
        />
      )}

      {currentView === 'crew' && (
        <ProductionCrewView 
          initialCategories={formattedCrewCategories as any[]}
        />
      )}

      {currentView === 'kits' && (
        <ProductionKitsView 
          initialCategories={formattedKitsCategories as any[]}
        />
      )}
    </div>
  );
}

export default function StudioWorkflowPage() {
  return (
    <Suspense fallback={<div style={{ color: '#fff', padding: '2rem' }}>Loading...</div>}>
      <WorkflowContent />
    </Suspense>
  );
}