// ProcessData.ts

export interface StepData {
  id: number;
  title: string;
  description: string;
  placeholderClass: string;
  imageAlt: string;
}

export const steps: StepData[] = [
  {
    id: 1,
    title: "Define your target architecture.",
    description: "Initialize your terminal node and select your core production track: Television Movie, Series, Documentary, or Commercial. Feed your raw creative brief directly into the workspace interface, mapping out your project's physical scale, timeline parameters, and creative direction.",
    placeholderClass: "placeholderMaroon",
    imageAlt: "Target architecture terminal configuration layout"
  },
  {
    id: 2,
    title: "Algorithmic filtering & curation engine active.",
    description: "Let Gaffer AI execute the heavy lifting. The engine instantly processes your parameters against the network log, parsing through the global crew catalogue to filter the absolute best technical talent tailored precisely to their filmmaking specialty. Simultaneously, Gaffer AI cross-references your desired visual aesthetic to auto-curate a high-end, pre-packaged hardware configuration engineered for that exact feel.",
    placeholderClass: "placeholderMint",
    imageAlt: "Gaffer AI hardware configuration screen"
  },
  {
    id: 3,
    title: "System synchronization and deployment.",
    description: "Finalize your unified production manifest. Review your intelligently matched crew roster and hyper-curated equipment package side-by-side in a single, high-fidelity checkout loop. Secure the transaction to generate automated smart deal memos, capture asset allocations, and launch live transit logs straight to your registered operator dashboard.",
    placeholderClass: "placeholderYellow",
    imageAlt: "System synchronization checkout dashboard"
  }
];