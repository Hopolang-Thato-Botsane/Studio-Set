import { useState, useMemo } from 'react';
import { CrewMember, LocationFilter } from '@/types/crew';

export function useCrewFilter(initialCrew: CrewMember[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<LocationFilter>('All');
  const [showFinalizedOnly, setShowFinalizedOnly] = useState(false);
  const [selectedCrewIds, setSelectedCrewIds] = useState<string[]>([]);

  const filteredCrew = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return initialCrew.filter((crew) => {
      // 1. Text Search Across Multiple Fields
      const matchesSearch =
        !query ||
        crew.name.toLowerCase().includes(query) ||
        crew.role.toLowerCase().includes(query) ||
        crew.education.toLowerCase().includes(query) ||
        crew.workExperience.some((exp) => exp.toLowerCase().includes(query));

      // 2. Location Filtering
      const matchesLocation =
        selectedLocation === 'All' || crew.location === selectedLocation;

      // 3. Finalized Status Filtering
      const matchesFinalized = !showFinalizedOnly || crew.isFinalized;

      return matchesSearch && matchesLocation && matchesFinalized;
    });
  }, [initialCrew, searchQuery, selectedLocation, showFinalizedOnly]);

  const toggleSelectCrew = (id: string) => {
    setSelectedCrewIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedLocation,
    setSelectedLocation,
    showFinalizedOnly,
    setShowFinalizedOnly,
    selectedCrewIds,
    toggleSelectCrew,
    filteredCrew,
  };
}