export type LocationFilter = 'All' | 'Gauteng' | 'Western Cape' | 'KwaZulu-Natal';

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  category?: string;
  experience: string;
  education: string;
  workExperience: string[];
  rate: string;
  dailyRate?: number;
  location: LocationFilter | string;
  badge?: string;
  imageUrl: string;
  isFinalized: boolean;
  isSelected?: boolean;
}

export interface CrewFilterState {
  searchQuery: string;
  selectedLocation: LocationFilter;
  showFinalizedOnly: boolean;
}