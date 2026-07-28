export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "How does Gaffer AI curate equipment packages?",
    answer: "Gaffer AI analyzes your creative brief, technical requirements, and visual reference notes to instantly compile a complete gear manifest—matching camera bodies, glass, grip, and lighting setups optimized for your project scale."
  },
  {
    id: 2,
    question: "How are contracts and smart deal memos generated?",
    answer: "Once a booking is finalized, our platform automatically generates role-specific, legally compliant deal memos and tax invoices pre-populated with agreed daily rates, overtime terms, and asset allocations."
  },
  {
    id: 3,
    question: "What happens during weather delays or schedule shifts?",
    answer: "Use our Dynamic Schedule Recalibration tool in your dashboard to adjust production dates with a single click. The system recalculates prorated equipment rates, checks crew availability, and updates all active contracts automatically."
  },
  {
    id: 4,
    question: "Can we request custom billing or studio enterprise accounts?",
    answer: "Yes. Production houses and high-frequency studios can set up enterprise accounts with customized billing terms, dedicated line-item invoicing, and multi-project management access."
  }
];