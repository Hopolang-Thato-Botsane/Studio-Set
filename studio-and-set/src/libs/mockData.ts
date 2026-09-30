// src/libs/mockData.ts

export interface CrewMember {
  id: string;
  name: string;
  verified: boolean;
  department: 'Camera' | 'Lighting' | 'Sound' | 'Grip' | 'Art' | 'Production';
  primaryRole: string;
  secondaryRoles: string[];
  location: 'Johannesburg' | 'Cape Town' | 'Durban';
  avatar: string;
  showreelThumbnail?: string;
  showreelVideoUrl?: string;
  
  // Operational Summary & Details
  bio: string;
  primarySpecialization: string[];
  certifications: string[];
  recentCredits: string[];
  ownedEquipment: string[];
  rateTierHours: string;
  
  // Pricing & Contact
  dayRate: number;
  dayRateMax?: number;
  contactEmail: string;
  phone: string;
  
  // Layout Control Flags
  showAddButton?: boolean;
}

export interface EquipmentPackage {
  id: string;
  packageName: string;
  brand: string;
  category: 'Camera Kit' | 'Lighting Package' | 'Audio Rig' | 'Grip & Motion' | 'Commercial / Flagship';
  tier: 'Standard' | 'Pro' | 'Master Cinema' | 'Commercial / Flagship';
  imageUrl: string;
  availability: 'Available' | 'On Set' | 'Maintenance';
  description: string;
  
  // Kit Breakdown Specs matching Modal
  primaryCamera?: string;
  lightingArray?: string;
  controlAndPower?: string;
  gripAndStaging?: string;
  crewLead?: string;
  includedItems?: string[];
  
  // Rates & Financials
  dailyRate: number;
  dailyRateMax?: number;
  itemCount: number;

  // Layout Control Flags
  showAddButton?: boolean;
}

export const mockCrewMembers: CrewMember[] = [
  {
    id: 'crew-01',
    name: 'Thabang Mofokeng',
    verified: true,
    department: 'Lighting',
    primaryRole: 'Key Gaffer',
    secondaryRoles: ['Gaffer', 'Commercial & Feature Lead'],
    location: 'Johannesburg',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    showreelThumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=80',
    bio: '12+ years of experience lighting high-end automotive commercials, narrative features, and complex studio setups. Specializes in wireless DMX programming (CRMX), high-output LED arrays, and rapid set turnover while maintaining strict safety compliance.',
    primarySpecialization: [
      'High-Output Exterior Night Shoots',
      'DMX Console Operation',
      'Car Rigs',
    ],
    certifications: [
      'EC1 Heavy Vehicle License',
      'High-Voltage Safety Certified',
      'Rope Access Level 1',
    ],
    recentCredits: [
      'BMW "Gusheshe" Global Spot (2025)',
      'Netflix Drama Series (Season 2)',
      'Vodacom Summer Campaign',
    ],
    ownedEquipment: [
      'Astera Titan 8-Tube Kit',
      'CRMX Wireless Transmitter',
      'Luminair iPad Control Console',
    ],
    rateTierHours: '10-Hour Commercial Day Standard // 12-Hour Feature Standard // Call Time Flexible',
    dayRate: 6500,
    dayRateMax: 8500,
    contactEmail: 'thabang.m@uprise.co.za',
    phone: '082 123 4567',
    showAddButton: true,
  },
  {
    id: 'crew-02',
    name: 'Tanya van der Merwe',
    verified: true,
    department: 'Camera',
    primaryRole: '1st Assistant Camera',
    secondaryRoles: ['Focus Puller'],
    location: 'Cape Town',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    showreelThumbnail: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800&auto=format&fit=crop&q=80',
    bio: 'Precision focus puller with deep familiarity across wireless follow focus systems, anamorphic optics, and fast-paced tracking shots on multi-camera setups.',
    primarySpecialization: [
      'Wireless Lens Control (Preston FI+Z)',
      'High-Speed Tracking',
      'Large-Format Anamorphics',
    ],
    certifications: [
      'ARRI Academy Certified',
      'SACAA Drone Assistant',
    ],
    recentCredits: [
      'One Piece S1 (Netflix)',
      'BMW Global Commercial',
      'Toyota Hilux Campaign',
    ],
    ownedEquipment: [
      'Preston Single-Channel Wireless Follow Focus',
      'Teradek Bolt 4K Monitor Rig',
    ],
    rateTierHours: '10-Hour Standard Day // Overtime per S Guild Standards',
    dayRate: 4200,
    dayRateMax: 5500,
    contactEmail: 'tanya.vdm@uprise.co.za',
    phone: '083 234 5678',
    showAddButton: true,
  },
  {
    id: 'crew-03',
    name: 'Nandi Khumalo',
    verified: true,
    department: 'Sound',
    primaryRole: 'Location Sound Recordist',
    secondaryRoles: ['Sound Mixer', 'Boom Operator'],
    location: 'Durban',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    showreelThumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80',
    bio: 'Crisp dialogue recording in complex acoustic environments with multi-channel wireless rigs and ambient timecode synchronization.',
    primarySpecialization: [
      'Multi-Cast Dialogue Recording',
      'RF Environment Management',
      'Acoustic Concealment',
    ],
    certifications: [
      'Dante Audio Network Certified',
    ],
    recentCredits: [
      'Reyka S2 (M-Net/Fremantle)',
      'KFC National Commercial',
    ],
    ownedEquipment: [
      'Sound Devices Scorpio Field Recorder',
      'Lectrosonics Wireless Rigs',
      'Sennheiser MKH416 Shotgun Mic',
    ],
    rateTierHours: '10-Hour Commercial Day // Equipment Package Rates Available',
    dayRate: 4800,
    dayRateMax: 6200,
    contactEmail: 'nandi.k@uprise.co.za',
    phone: '082 567 8901',
    showAddButton: true,
  },
];

export const mockEquipmentPackages: EquipmentPackage[] = [
  {
    id: 'pkg-01',
    packageName: 'Commercial / Flagship Package',
    brand: 'ARRI',
    category: 'Commercial / Flagship',
    tier: 'Commercial / Flagship',
    imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80',
    availability: 'Available',
    description: 'Built for large-scale, high-budget agency spots requiring maximum illumination control and broadcast-grade optics. Ideal for high-contrast car commercial exterior night shoots or large studio setups where heavy HMI power distribution and dynamic crane movement are mandatory.',
    primaryCamera: 'ARRI Alexa 35 Package + Master Built Anamorphic Primes',
    lightingArray: '2x ARRI SkyPanel X21, 1x ARRI 18/12K HMI PAR, Nanlite Forza 720B (X3)',
    controlAndPower: 'Wireless DMX / CRMX Console, 100kW Generator Rig',
    gripAndStaging: 'Technocrane 30, Heavy-Duty Track & Dolly',
    crewLead: 'Key Gaffer + Rigging Gaffer + Best Boy + 3 Sparks',
    dailyRate: 45000,
    dailyRateMax: 65000,
    itemCount: 18,
    includedItems: [
      'ARRI Alexa 35 Body & Cage Rig',
      'Master Built Anamorphic Prime Set',
      '2x ARRI SkyPanel X21 LED Panels',
      '18kW/12kW HMI Daylite PAR Head',
      'Wireless CRMX DMX Console',
      '30ft Technocrane System',
    ],
    showAddButton: true,
  },
  {
    id: 'pkg-02',
    packageName: 'RED V-Raptor 8K VV Production Package',
    brand: 'RED Cinema',
    category: 'Camera Kit',
    tier: 'Master Cinema',
    imageUrl: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800&auto=format&fit=crop&q=80',
    availability: 'Available',
    description: 'High-frame-rate 8K cinema beast designed for high-end commercials, sports tracking, and heavy CGI visual effects pipelines.',
    primaryCamera: 'RED V-Raptor 8K VV + Sigma Cine High-Speed Primes',
    lightingArray: 'Aputure LS 1200d Pro + 600c Pro RGB',
    controlAndPower: 'Core SWX Micro V-Mount High-Draw Battery Array',
    gripAndStaging: 'Ronin 2 Gimbal Head & Ready Rig GS',
    crewLead: 'Camera Operator + 1st AC + DIT',
    dailyRate: 11000,
    dailyRateMax: 16000,
    itemCount: 12,
    includedItems: [
      'RED V-Raptor 8K VV Body',
      'Sigma Cine High-Speed Prime Set (20, 24, 35, 50, 85mm)',
      'DSMC3 RED Touch 7.0" LCD Monitor',
      '2x RED PRO CFexpress 2TB Cards & Reader',
      'DJI Ronin 2 Gimbal System',
    ],
    showAddButton: true,
  },
];