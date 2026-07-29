export interface FeatureData {
  id: number;
  title: string;
  description: string;
}

export const features: FeatureData[] = [
  {
    id: 1,
    title: "Automated Legal & Compliance",
    description: "Traditional production logistics rely on manual contract drafting and rate back-and-forth. Studio and Set automatically generates and dispatches role-specific, industry-standard contracts straight to your crew the moment a project is locked."
  },
  {
    id: 2,
    title: "Synchronized Crew & Equipment",
    description: "Never worry about booking high-end gear without a technician to operate it. Our platform directly matches catalogued camera packages, grip rigs, and lighting setups with verified department specialists in a single booking."
  },
  {
    id: 3,
    title: "Dynamic Schedule Recalibration",
    description: "Weather delays and extended shoots no longer mean hours of contract renegotiation. Adjust production dates in one click to automatically recalculate daily rates, crew availability, and equipment prorating with an updated tax invoice."
  }
];