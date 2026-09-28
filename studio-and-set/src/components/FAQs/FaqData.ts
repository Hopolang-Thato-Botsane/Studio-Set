export interface FaqItem {
  id: number;
  category: 'studio' | 'crew';
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    category: 'studio',
    question: "How fast can we source and book verified crew?",
    answer: "Instantly. Gaffer AI maps your project requirements directly to verified crew members based on real-time availability, kit specs, and location."
  },
  {
    id: 2,
    category: 'studio',
    question: "Can we manage multi-department logistics in one place?",
    answer: "Absolutely. Manage call sheets, gear manifestations, crew rosters, and consolidated billing through a single centralized dashboard."
  },
  {
    id: 3,
    category: 'studio',
    question: "Is equipment insurance included in rental bookings?",
    answer: "Yes. All kit listed through Studio & Set includes verified insurance coverage and real-time damage-protection protocols during production."
  },
  {
    id: 4,
    category: 'studio',
    question: "What happens if crew or equipment becomes unavailable last minute?",
    answer: "Gaffer AI automatically triggers emergency dispatch protocols, re-routing available backup crew or replacement kit with equivalent specs within your immediate radius."
  },
  {
    id: 5,
    category: 'studio',
    question: "How are billing and PO approvals handled for large productions?",
    answer: "We support custom corporate invoicing, multi-signature purchase order approvals, and consolidated weekly billing manifests for studio accounting teams."
  },
  {
    id: 6,
    category: 'studio',
    question: "How does Studio & Set handle multi-location filming and border movement?",
    answer: "Custom location manifests, equipment carnet documentation, and regional crew travel logistics are automatically generated and linked directly to your production schedule."
  },

  {
    id: 7,
    category: 'crew',
    question: "How do I list my equipment and set rental rates?",
    answer: "Create a crew profile, upload your inventory, set daily or weekly rates, and choose whether gear comes bundled with your technician services."
  },
  {
    id: 8,
    category: 'crew',
    question: "How does Studio & Set ensure payout security?",
    answer: "Payments are escrowed prior to call time and released automatically upon project completion or agreed billing milestones."
  },
  {
    id: 9,
    category: 'crew',
    question: "Who can register as a verified crew member?",
    answer: "Any freelance technician, HOD, or rental facility. Once submitted, our vetting team reviews your portfolio and references within 24 hours."
  },
  {
    id: 10,
    category: 'crew',
    question: "How do call times, overtimes, and wrap reports work on the platform?",
    answer: "Call times and wrap logs are tracked digitally in-app. Any overtime or meal penalty additions are automatically calculated and pushed to studio approval upon wrap."
  },
  {
    id: 11,
    category: 'crew',
    question: "Can I list my equipment as a standalone rental without hiring myself out?",
    answer: "Yes. You can toggle listings between Dry Hire (gear only) and Wet Hire (gear + technician), giving you full control over how your kit is deployed."
  },
  {
    id: 12,
    category: 'crew',
    question: "What is the cancellation policy if a shoot is called off last minute?",
    answer: "Standard industry cancellation windows apply. Bookings canceled within 24 hours of call time trigger a full day-rate payout protected by our escrow system."
  }
];