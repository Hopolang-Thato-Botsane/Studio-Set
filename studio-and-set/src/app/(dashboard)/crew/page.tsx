'use client';

import React, { useState, useMemo } from 'react';
import crewData from '@/data/crewData/';
import { CrewMember, LocationFilter } from '@/types/crew';
import { CrewCard } from '@/components/Crew/CrewCard';
import { CrewFilterBar } from '@/components/Crew/CrewFilter';

export default function CrewFinderPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<LocationFilter>('All');
  const [showFinalizedOnly, setShowFinalizedOnly] = useState(false);

  const filteredCrew = useMemo(() => {
    return (crewData as CrewMember[]).filter((crew) => {
      const matchesSearch =
        crew.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crew.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crew.workExperience.some((exp) => exp.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLocation =
        selectedLocation === 'All' || crew.location === selectedLocation;

      const matchesFinalized = !showFinalizedOnly || crew.isFinalized;

      return matchesSearch && matchesLocation && matchesFinalized;
    });
  }, [searchQuery, selectedLocation, showFinalizedOnly]);

  const handleDirectMessage = (id: string) => {
    console.log(`Opening direct contact channel for crew ID: ${id}`);
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-screen">

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#3B1219] tracking-tight">Crew Finder</h1>
        <p className="text-sm text-[#3B1219]/70 mt-1">
          Search and finalize verified production professionals for your next shoot.
        </p>
      </div>

      {/* Filter Controls */}
      <CrewFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        showFinalizedOnly={showFinalizedOnly}
        setShowFinalizedOnly={setShowFinalizedOnly}
      />

      {/* Grid View */}
      {filteredCrew.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          {filteredCrew.map((crew) => (
            <CrewCard
              key={crew.id}
              crew={crew}
              onDirectMessage={handleDirectMessage}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#D3C4A9]/10 rounded-2xl border border-dashed border-[#3B1219]/20">
          <p className="text-[#3B1219] font-bold text-base">No crew members found</p>
          <p className="text-xs text-[#3B1219]/60 mt-1">
            Try adjusting your search keywords or location filter.
          </p>
        </div>
      )}
    </div>
  );
}