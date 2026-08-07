import React from 'react';
import { LocationFilter } from '@/types/crew';

interface CrewFilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedLocation: LocationFilter;
  onLocationChange: (location: LocationFilter) => void;
  showFinalizedOnly: boolean;
  onFinalizedToggle: (value: boolean) => void;
  resultsCount: number;
}

const locations: LocationFilter[] = ['All', 'Gauteng', 'Western Cape', 'KwaZulu-Natal'];

export const CrewFilterBar: React.FC<CrewFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedLocation,
  onLocationChange,
  showFinalizedOnly,
  onFinalizedToggle,
  resultsCount,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-6 text-white space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:gap-4">
      <div className="flex-1 relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name, role, school, or experience..."
          className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 text-white text-sm rounded-lg px-4 py-2.5 outline-none transition"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => onLocationChange(loc)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
              selectedLocation === loc
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 border-slate-800 pt-3 md:pt-0">
        <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={showFinalizedOnly}
            onChange={(e) => onFinalizedToggle(e.target.checked)}
            className="accent-amber-500 rounded cursor-pointer"
          />
          Finalized Only
        </label>

        <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
          {resultsCount} {resultsCount === 1 ? 'member' : 'members'}
        </span>
      </div>
    </div>
  );
};