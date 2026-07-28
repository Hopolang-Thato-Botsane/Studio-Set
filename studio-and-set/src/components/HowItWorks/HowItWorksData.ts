export interface StepData {
  id: number;
  iconSrc: string;
  title: string;
  description: string;
}

export const howItWorksSteps: StepData[] = [
  {
    id: 1,
    iconSrc: "/assets/icons/strategy.svg",
    title: "Define your target architecture.",
    description: "Select your production type, input your creative brief, and set your scale, timeline, and direction."
  },
  {
    id: 2,
    iconSrc: "/assets/icons/algorithmic.svg",
    title: "Curate crew & equipment.",
    description: "Gaffer AI parses network data to match specialized crew and auto-curate equipment tailored to your aesthetic."
  },
  {
    id: 3,
    iconSrc: "/assets/icons/deployment.svg",
    title: "Deploy & track live.",
    description: "Review your matched crew and gear manifest, checkout to generate smart deal memos, and track transit live."
  }
];