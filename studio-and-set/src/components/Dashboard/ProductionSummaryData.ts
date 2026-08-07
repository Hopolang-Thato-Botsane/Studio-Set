export interface Candidate {
  id: string;
  name: string;
  role: string;
  yearsExperience: number;
  pickTag?: "Best Pick" | "#1 Pick" | "#2 Pick" | "#3 Pick";
  location: string;
  image?: string;
  isExpanded?: boolean;
}

export interface ProductionKit {
  id: string;
  name: string;
  brandTag: "RED" | "SONY" | string;
  pickTag?: "#1 Pick" | "#2 Pick";
  price: number;
  description: string;
  image?: string;
}

export interface CostBreakdownItem {
  label: string;
  amount: number | "Complimentary";
  isPercentage?: boolean;
  percentageValue?: number;
}

export interface ProductionSummaryData {
  searchMeta: {
    queryText: string;
    location: string;
    crewType: string;
    budgetLimit: number;
  };
  categories: {
    title: string;
    candidates: Candidate[];
  }[];
  productionKits: ProductionKit[];
  costBreakdown: {
    items: CostBreakdownItem[];
    subtotalExclVat: number;
    vatRate: number;
    vatAmount: number;
    grandTotal: number;
  };
}

export const productionSummaryData: ProductionSummaryData = {
  searchMeta: {
    queryText: "Nora Advert, August 1st to August 5th",
    location: "Gauteng",
    crewType: "skeleton crew",
    budgetLimit: 150000,
  },
  categories: [
    {
      title: "Lighting (Gaffer)",
      candidates: [
        {
          id: "gaffer-1",
          name: "THABO KHUMALO",
          role: "Commercial Gaffer",
          yearsExperience: 9,
          pickTag: "Best Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/thabo-khumalo.jpg",
        },
        {
          id: "gaffer-2",
          name: "VANOS EMILA",
          role: "Commercial Gaffer",
          yearsExperience: 4,
          pickTag: "#3 Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/vanos-emila.jpg",
        },
        {
          id: "gaffer-3",
          name: "MARCUS VANE",
          role: "Commercial Gaffer",
          yearsExperience: 4,
          pickTag: "#2 Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/marcus-vane.jpg",
        },
      ],
    },
    {
      title: "Electrical (Best Boy)",
      candidates: [
        {
          id: "bestboy-1",
          name: "SIYA DLAMINI",
          role: "Best Boy",
          yearsExperience: 4,
          pickTag: "Best Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/siya-dlamini.jpg",
        },
        {
          id: "bestboy-2",
          name: "LEO MOKOENA",
          role: "Best Boy",
          yearsExperience: 4,
          pickTag: "#2 Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/leo-mokoena.jpg",
        },
      ],
    },
    {
      title: "Camera Operator/DP",
      candidates: [
        {
          id: "dp-1",
          name: "JANE MOPEDI",
          role: "DP",
          yearsExperience: 6,
          pickTag: "Best Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/jane-mopedi.jpg",
        },
        {
          id: "dp-2",
          name: "PIETER KRAUSE",
          role: "DP",
          yearsExperience: 4,
          pickTag: "#2 Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/pieter-krause.jpg",
        },
      ],
    },
    {
      title: "1st Assistant Camera Operator",
      candidates: [
        {
          id: "ac-1",
          name: "CHRIS BOTHER",
          role: "First AC",
          yearsExperience: 9,
          pickTag: "Best Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/chris-bother.jpg",
        },
        {
          id: "ac-2",
          name: "ANDILE NCUBE",
          role: "First AC",
          yearsExperience: 4,
          pickTag: "#2 Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/andile-ncube.jpg",
        },
      ],
    },
    {
      title: "Key Grip",
      candidates: [
        {
          id: "grip-1",
          name: "PIETER BOTHA",
          role: "Key Grip",
          yearsExperience: 4,
          pickTag: "Best Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/pieter-botha.jpg",
        },
        {
          id: "grip-2",
          name: "ZAMA RADEBE",
          role: "Commercial Gaffer",
          yearsExperience: 3,
          pickTag: "#2 Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/zama-radebe.jpg",
        },
      ],
    },
    {
      title: "Production Manager",
      candidates: [
        {
          id: "pm-1",
          name: "NICOLE SMITH",
          role: "Production Manager",
          yearsExperience: 4,
          pickTag: "Best Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/nicole-smith.jpg",
        },
        {
          id: "pm-2",
          name: "SARAH JOOSTE",
          role: "Production Manager",
          yearsExperience: 4,
          pickTag: "#2 Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/sarah-jooste.jpg",
        },
      ],
    },
    {
      title: "Sound Recordists",
      candidates: [
        {
          id: "sound-1",
          name: "KATLEGO MOYO",
          role: "Sound Recordist",
          yearsExperience: 6,
          pickTag: "Best Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/katlego-moyo.jpg",
        },
        {
          id: "sound-2",
          name: "DAVID COETZEE",
          role: "Sound Recordist",
          yearsExperience: 4,
          pickTag: "#2 Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/david-coetzee.jpg",
        },
      ],
    },
    {
      title: "Art Director",
      candidates: [
        {
          id: "art-1",
          name: "KABELO MOLOI",
          role: "Art Director",
          yearsExperience: 5,
          pickTag: "Best Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/kabelo-moloi.jpg",
        },
        {
          id: "art-2",
          name: "AMY TAYO",
          role: "Art Director",
          yearsExperience: 3,
          pickTag: "#2 Pick",
          location: "Gauteng",
          image: "/assets/images/Crew/amy-tayo.jpg",
        },
      ],
    },
  ],
  productionKits: [
    {
      id: "kit-1",
      name: "Commercial Kit 1 (RED)",
      brandTag: "RED",
      pickTag: "#1 Pick",
      price: 25000,
      description: "RED V-Raptor, Cine Primes, Wireless Monitoring",
      image: "/assets/images/kits/red-kit.jpg",
    },
    {
      id: "kit-2",
      name: "Commercial Kit 2 (SONY)",
      brandTag: "SONY",
      pickTag: "#2 Pick",
      price: 18000,
      description: "Sony FX6, G-Master Zooms, Audio Package",
      image: "/assets/images/kits/sony-kit.jpg",
    },
  ],
  costBreakdown: {
    items: [
      { label: "Crew", amount: 58000 },
      { label: "Equipment", amount: 25000 },
      { label: "Production Insurance (10%)", amount: 2500, isPercentage: true, percentageValue: 10 },
      { label: "Logistics", amount: "Complimentary" },
    ],
    subtotalExclVat: 85500,
    vatRate: 0.15,
    vatAmount: 12825,
    grandTotal: 98325,
  },
};