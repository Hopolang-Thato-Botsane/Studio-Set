import React from 'react';
import { crewMembers } from '@/data/crewData';
import { useCrewFilter } from '@/hooks/useCrewFilter';
import { CrewFilterBar } from '@/components/Crew/CrewFilter';
import { CrewCard } from '@/components/Crew/CrewCard';
import { CrewMember } from '@/types/crew';
import './CrewDirectory.module.css';

export const CrewDirectory: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedLocation,
    setSelectedLocation,
    showFinalizedOnly,
    setShowFinalizedOnly,
    selectedCrewIds,
    toggleSelectCrew,
    filteredCrew,
  } = useCrewFilter(crewMembers);

  const handleDirectMessage = (crew: CrewMember) => {
    alert(`Opening direct line with ${crew.name} (${crew.role})`);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedLocation('All');
    setShowFinalizedOnly(false);
  };

  return (
    <div className="crew-directory">
      <div className="crew-directory__container">
        <header className="crew-directory__header">
          <h1 className="crew-directory__title">Studio & Set Crew Roster</h1>
          <p className="crew-directory__subtitle">
            Search, filter, and shortlist vetted production crew across South Africa.
          </p>
        </header>

        <CrewFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          showFinalizedOnly={showFinalizedOnly}
          onFinalizedToggle={setShowFinalizedOnly}
          resultsCount={filteredCrew.length}
        />

        {filteredCrew.length > 0 ? (
          <div className="crew-directory__grid">
            {filteredCrew.map((crew) => (
              <CrewCard
                key={crew.id}
                crew={crew}
                isSelected={selectedCrewIds.includes(crew.id)}
                onToggleSelect={toggleSelectCrew}
                onDirectMessage={handleDirectMessage}
              />
            ))}
          </div>
        ) : (
          <div className="crew-directory__empty-state">
            <p className="crew-directory__empty-message">
              No crew members match your search criteria.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="crew-directory__reset-button"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrewDirectory;