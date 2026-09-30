import DualCTA from '@/components/DuelCTA/DualCTA';

export default function RegisterChoicePage() {
  return (
    <main>
      <DualCTA 
        studioHref="/register/studio" 
        crewHref="/register/crew"
        studioButtonText="Create Studio Account"
        crewButtonText="Create Crew Profile"
      />
    </main>
  );
}