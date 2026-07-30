export interface KitItem {
  category: string;
  name: string;
  qty: number;
  specifications?: string;
}

export interface KitPricing {
  dailyRate: number;
  weeklyRate: number;
  currency: string;
  insuranceDeposit: number;
}

export interface ProductionKit {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  productionType: string;
  tier: string;
  brandEcosystem: string;
  brand?: string;           // Alias for brandEcosystem if referenced in code
  badge?: string;           // Optional badge
  isBestSeller: boolean;
  isAutoSelectDefault: boolean;
  itemsCount: number;
  pricing: KitPricing;
  items: KitItem[];
  tags: string[];
  coverImageUrl: string;
  isAvailable: boolean;
  isSelected?: boolean;     // Optional UI state flag
}

export const productionKitsData: ProductionKit[] = [
  {
    id: "kit-mv-arri-01",
    slug: "arri-flagship-music-video-kit",
    name: "ARRI Flagship Music Video Kit",
    tagline: "Anamorphic optics and high-output RGBWW lighting.",
    summary: "High-end anamorphic package designed for stylized lighting, fast movement, and cinematic music video aesthetics.",
    productionType: "Music Video",
    tier: "Flagship",
    brandEcosystem: "ARRI",
    isBestSeller: true,
    isAutoSelectDefault: true,
    itemsCount: 10,
    pricing: {
      dailyRate: 18500,
      weeklyRate: 74000,
      currency: "ZAR",
      insuranceDeposit: 35000
    },
    items: [
      { category: "Camera", name: "ARRI Alexa 35 Body", qty: 1, specifications: "LPL Mount, REVEAL Color Science" },
      { category: "Lenses", name: "Atlas Orion Anamorphic 2x Prime Set", qty: 1, specifications: "32mm, 50mm, 80mm T2.0" },
      { category: "Monitoring", name: "SmallHD Cine 7 + Teradek Bolt 4K LT 750", qty: 1 },
      { category: "Lighting", name: "Aputure Electro Storm CS15 RGBWW", qty: 1 },
      { category: "Lighting", name: "Aputure 600c Pro RGBWW Light", qty: 2 },
      { category: "Grip", name: "Matthews 40\" C-Stand Kit", qty: 4 }
    ],
    tags: ["Anamorphic", "RGBWW", "4K", "Stylized"],
    coverImageUrl: "/images/kits/mv-arri.jpg",
    isAvailable: true
  },
  {
    id: "kit-mv-red-02",
    slug: "red-v-raptor-music-video-kit",
    name: "RED V-Raptor Dynamic Music Video Kit",
    tagline: "8K VV high-speed capture with punchy cine primes.",
    summary: "Tailored for high-energy music shoots featuring slow-motion 8K 120fps recording and modern vintage flare.",
    productionType: "Music Video",
    tier: "Agile",
    brandEcosystem: "RED",
    isBestSeller: false,
    isAutoSelectDefault: false,
    itemsCount: 9,
    pricing: {
      dailyRate: 12500,
      weeklyRate: 50000,
      currency: "ZAR",
      insuranceDeposit: 25000
    },
    items: [
      { category: "Camera", name: "RED V-Raptor 8K VV Cinema Camera", qty: 1 },
      { category: "Lenses", name: "Sigma Cine Full-Frame Prime Set", qty: 1, specifications: "20mm, 35mm, 50mm, 85mm T1.5" },
      { category: "Monitoring", name: "Teradek Bolt 4K MAX Wireless Receiver Kit", qty: 1 },
      { category: "Lighting", name: "Aputure 600d Pro Daylight", qty: 1 },
      { category: "Lighting", name: "Nanlite Pavotube 30X RGB Tubes (4-Light Kit)", qty: 1 },
      { category: "Support & Rigging", name: "Tilta Nucleus-M Wireless Follow Focus", qty: 1 }
    ],
    tags: ["8K", "120fps", "Slow Motion", "Agile"],
    coverImageUrl: "/images/kits/mv-red.jpg",
    isAvailable: true
  },
  {
    id: "kit-comm-arri-03",
    slug: "arri-commercial-master-kit",
    name: "ARRI Commercial Master Kit",
    tagline: "Uncompromising color reproduction and client video village.",
    summary: "Built for commercial agency shoots demanding maximum dynamic range, flawless skin tones, and reliable client monitoring.",
    productionType: "Commercial",
    tier: "Flagship",
    brandEcosystem: "ARRI",
    isBestSeller: true,
    isAutoSelectDefault: true,
    itemsCount: 11,
    pricing: {
      dailyRate: 22000,
      weeklyRate: 88000,
      currency: "ZAR",
      insuranceDeposit: 45000
    },
    items: [
      { category: "Camera", name: "ARRI Alexa Mini LF", qty: 1, specifications: "Large Format Sensor" },
      { category: "Lenses", name: "ARRI Signature Prime Set", qty: 1, specifications: "24mm, 35mm, 47mm, 75mm T1.8" },
      { category: "Monitoring", name: "Flanders Scientific 24\" Production Monitor", qty: 1 },
      { category: "Lighting", name: "ARRI SkyPanel S60-C Soft Light", qty: 2 },
      { category: "Grip", name: "12x12 Butterfly Diffusion Frame Kit", qty: 1 },
      { category: "Support & Rigging", name: "O'Connor 2560 Fluid Head & Carbon Legs", qty: 1 }
    ],
    tags: ["Agency Ready", "Client Village", "Large Format"],
    coverImageUrl: "/images/kits/comm-arri.jpg",
    isAvailable: true
  },
  {
    id: "kit-comm-sony-04",
    slug: "sony-venice-commercial-kit",
    name: "Sony Venice 2 Commercial Kit",
    tagline: "Dual native ISO flexibility with pristine digital resolution.",
    summary: "High-impact commercial package with exceptional low-light latitude and modular studio camera rigging.",
    productionType: "Commercial",
    tier: "Agile",
    brandEcosystem: "Sony",
    isBestSeller: false,
    isAutoSelectDefault: false,
    itemsCount: 10,
    pricing: {
      dailyRate: 15000,
      weeklyRate: 60000,
      currency: "ZAR",
      insuranceDeposit: 30000
    },
    items: [
      { category: "Camera", name: "Sony Venice 2 8K Body", qty: 1 },
      { category: "Lenses", name: "Sony CineAlta FF Prime Lens Set", qty: 1, specifications: "28mm, 35mm, 50mm, 85mm T2.0" },
      { category: "Monitoring", name: "SmallHD 17\" Studio Monitor", qty: 1 },
      { category: "Lighting", name: "Aputure 1200d Pro", qty: 1 },
      { category: "Lighting", name: "Aputure Nova P600c RGB Panel", qty: 1 },
      { category: "Power & Accessories", name: "V-Mount High Draw Battery Kit (6x 190Wh)", qty: 1 }
    ],
    tags: ["8K", "Sony Venice", "High ISO"],
    coverImageUrl: "/images/kits/comm-sony.jpg",
    isAvailable: true
  },
  {
    id: "kit-film-arri-05",
    slug: "arri-cinema-feature-kit",
    name: "ARRI Cinema Feature Film Kit",
    tagline: "The global benchmark for narrative cinema.",
    summary: "Complete A-Cam package equipped with reference optics, heavy support, and studio mattebox filtration for feature films.",
    productionType: "Feature Film",
    tier: "Flagship",
    brandEcosystem: "ARRI",
    isBestSeller: true,
    isAutoSelectDefault: true,
    itemsCount: 12,
    pricing: {
      dailyRate: 28000,
      weeklyRate: 112000,
      currency: "ZAR",
      insuranceDeposit: 50000
    },
    items: [
      { category: "Camera", name: "ARRI Alexa LF Production Package", qty: 1 },
      { category: "Lenses", name: "Cooke S4/i Prime Lens Set", qty: 1, specifications: "18mm, 25mm, 35mm, 50mm, 75mm T2.0" },
      { category: "Support & Rigging", name: "O'Connor 2575D Fluid Head + Studio Tripod", qty: 1 },
      { category: "Support & Rigging", name: "ARRI SMB-1 4x5.65 Mattebox & IRND Kit", qty: 1 },
      { category: "Monitoring", name: "Teradek Bolt 4K MAX Triple Monitor Setup", qty: 1 },
      { category: "Power & Accessories", name: "Block Battery Power Station (24V/12V)", qty: 2 }
    ],
    tags: ["Narrative", "Feature Film", "Cooke Look"],
    coverImageUrl: "/images/kits/film-arri.jpg",
    isAvailable: true
  },
  {
    id: "kit-film-red-06",
    slug: "red-cinema-feature-kit",
    name: "RED Cinema Narrative Feature Kit",
    tagline: "Ultra-resolution 8K VV raw acquisition.",
    summary: "Optimized for narrative feature productions seeking massive reframing freedom and timeless visual texture.",
    productionType: "Feature Film",
    tier: "Agile",
    brandEcosystem: "RED",
    isBestSeller: false,
    isAutoSelectDefault: false,
    itemsCount: 11,
    pricing: {
      dailyRate: 18000,
      weeklyRate: 72000,
      currency: "ZAR",
      insuranceDeposit: 35000
    },
    items: [
      { category: "Camera", name: "RED V-Raptor XL 8K VV Camera System", qty: 1 },
      { category: "Lenses", name: "Tokina Vista Cinema Prime Set", qty: 1, specifications: "18mm, 25mm, 35mm, 50mm, 85mm T1.5" },
      { category: "Support & Rigging", name: "Sachtler Cine 15 Head with Carbon Legs", qty: 1 },
      { category: "Monitoring", name: "SmallHD Cine 13\" Director's Monitor", qty: 1 },
      { category: "Lighting", name: "Aputure 600d Pro Light", qty: 2 },
      { category: "Power & Accessories", name: "RED PRO Gold-Mount Battery Package", qty: 1 }
    ],
    tags: ["8K RAW", "Vista Primes", "Narrative"],
    coverImageUrl: "/images/kits/film-red.jpg",
    isAvailable: true
  },
  {
    id: "kit-doc-sony-07",
    slug: "sony-cinema-documentary-kit",
    name: "Sony Cinema Doc Standard Kit",
    tagline: "Internal NDs, dual native ISO, and rapid solo ergonomics.",
    summary: "The quintessential run-and-gun documentary kit, balancing speed, versatility, and professional audio integration.",
    productionType: "Documentary",
    tier: "Compact",
    brandEcosystem: "Sony",
    isBestSeller: true,
    isAutoSelectDefault: true,
    itemsCount: 8,
    pricing: {
      dailyRate: 8500,
      weeklyRate: 34000,
      currency: "ZAR",
      insuranceDeposit: 15000
    },
    items: [
      { category: "Camera", name: "Sony FX9 Full-Frame Cinema Camera", qty: 1, specifications: "Electronic Variable ND" },
      { category: "Lenses", name: "Sony FE PZ 28-135mm f/4 G OSS Cinema Zoom", qty: 1 },
      { category: "Lenses", name: "Sony FE 35mm f/1.4 GM Prime", qty: 1 },
      { category: "Audio", name: "Sennheiser MKH416 Shotgun Mic + Wireless Dual Lavs", qty: 1 },
      { category: "Support & Rigging", name: "Sachtler Flowtech 75 Tripod System", qty: 1 },
      { category: "Lighting", name: "Aputure Amaran 200x Bi-Color LED", qty: 2 }
    ],
    tags: ["Documentary", "Auto-ND", "Run and Gun"],
    coverImageUrl: "/images/kits/doc-sony.jpg",
    isAvailable: true
  },
  {
    id: "kit-doc-red-08",
    slug: "red-komodo-documentary-kit",
    name: "RED Komodo Compact Doc Kit",
    tagline: "Global shutter precision in a lightweight cine package.",
    summary: "High-end compact doc kit featuring a global shutter sensor for zero flash-banding or motion distortion.",
    productionType: "Documentary",
    tier: "Compact",
    brandEcosystem: "RED",
    isBestSeller: false,
    isAutoSelectDefault: false,
    itemsCount: 9,
    pricing: {
      dailyRate: 6500,
      weeklyRate: 26000,
      currency: "ZAR",
      insuranceDeposit: 12000
    },
    items: [
      { category: "Camera", name: "RED Komodo 6K Cinema Camera", qty: 1, specifications: "Global Shutter" },
      { category: "Lenses", name: "Canon EF 24-70mm f/2.8L II USM Lens", qty: 1 },
      { category: "Lenses", name: "Canon EF 70-200mm f/2.8L IS III USM Lens", qty: 1 },
      { category: "Audio", name: "Røde NTG3 Shotgun + Wireless GO II Kit", qty: 1 },
      { category: "Support & Rigging", name: "Woodencamera Komodo Rig + Compact Carbon Tripod", qty: 1 },
      { category: "Power & Accessories", name: "BP-955 Compact Batteries (4x Pack)", qty: 1 }
    ],
    tags: ["Global Shutter", "Compact", "6K"],
    coverImageUrl: "/images/kits/doc-red.jpg",
    isAvailable: true
  },
  {
    id: "kit-tv-arri-09",
    slug: "arri-multicam-series-kit",
    name: "ARRI Multi-Cam TV Series Kit",
    tagline: "Two-camera matched setup for high-volume episodic drama.",
    summary: "Dual ARRI camera package designed for TV drama series requiring matched look profiles and video village feeds.",
    productionType: "Television Series",
    tier: "Flagship",
    brandEcosystem: "ARRI",
    isBestSeller: true,
    isAutoSelectDefault: true,
    itemsCount: 12,
    pricing: {
      dailyRate: 32000,
      weeklyRate: 128000,
      currency: "ZAR",
      insuranceDeposit: 60000
    },
    items: [
      { category: "Camera", name: "ARRI Alexa Mini Cameras (A & B Cam)", qty: 2 },
      { category: "Lenses", name: "Angenieux EZ-1 & EZ-2 Cine Zoom Pair", qty: 2, specifications: "30-90mm & 15-40mm T2.0" },
      { category: "Monitoring", name: "Dual SmallHD 17\" Video Village Setup + Teradek Array", qty: 1 },
      { category: "Support & Rigging", name: "Sachtler Video 20 Tripod Systems", qty: 2 },
      { category: "Lighting", name: "Aputure 600c Pro RGBWW Soft Lights", qty: 4 },
      { category: "Power & Accessories", name: "DIT Mobile Offload Workstation + RAID Storage", qty: 1 }
    ],
    tags: ["Multi-Cam", "Episodic", "TV Drama"],
    coverImageUrl: "/images/kits/tv-arri.jpg",
    isAvailable: true
  },
  {
    id: "kit-tv-sony-10",
    slug: "sony-fx6-multicam-series-kit",
    name: "Sony FX6 Multi-Cam Series Kit",
    tagline: "Efficient dual-camera coverage with outstanding autofocus.",
    summary: "Cost-effective 2-camera TV series and reality format kit built for speed and multi-angle efficiency.",
    productionType: "Television Series",
    tier: "Agile",
    brandEcosystem: "Sony",
    isBestSeller: false,
    isAutoSelectDefault: false,
    itemsCount: 10,
    pricing: {
      dailyRate: 20000,
      weeklyRate: 80000,
      currency: "ZAR",
      insuranceDeposit: 35000
    },
    items: [
      { category: "Camera", name: "Sony FX6 Full-Frame Cinema Cameras (A & B Cam)", qty: 2 },
      { category: "Lenses", name: "Sony FE 24-70mm f/2.8 GM II Zoom Set", qty: 2 },
      { category: "Lenses", name: "Sony FE 70-200mm f/2.8 GM OSS II Zoom", qty: 1 },
      { category: "Monitoring", name: "SmallHD 13\" Dual Wireless Directors Monitor Kit", qty: 1 },
      { category: "Lighting", name: "Nanlite MixPanel 150 RGB Panels", qty: 3 },
      { category: "Audio", name: "4-Channel Wireless Lavalier Receiver System", qty: 1 }
    ],
    tags: ["Dual FX6", "Fast Workflow", "Autofocus"],
    coverImageUrl: "/images/kits/tv-sony.jpg",
    isAvailable: true
  }
];