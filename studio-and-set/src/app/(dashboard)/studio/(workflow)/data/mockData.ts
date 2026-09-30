export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  tag: string;
  subtitle: string;
  image: string;
  description: string;
  primaryCamera: string;
  lightingArray: string;
  dayRate: string;
}

export interface CrewMember {
  id: string;
  name: string;
  title: string;
  verified: boolean;
  role: string;
  location: string;
  tag: string;
  avatar: string;
  summary: string;
  recentCredits: string;
  baseRate: string;
  videoThumbnail: string;
}

export interface Production {
  id: string;
  title: string;
  artist: string;
  location: string;
  status: 'Active' | 'Pending' | 'Completed';
  timeline: string;
  burnRate: string;
  heroImage: string;
  equipment: EquipmentItem[];
  crew: CrewMember[];
}

export const mockProductions: Production[] = [
  {
    id: 'prod-1',
    title: 'Music Video',
    artist: 'Dj Whoops ft LeNala - Lazy Culture',
    location: 'Cape Town',
    status: 'Active',
    timeline: '23 - 24 September 2026',
    burnRate: 'R 86 500',
    heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    equipment: [
      {
        id: 'eq-1',
        name: 'ARRI',
        category: 'Commercial / Flagship',
        tag: '#1 Pick',
        subtitle: 'Music Video / Flagship',
        image: 'https://images.unsplash.com/photo-1585822710081-9c6f2d70c778?q=80&w=800&auto=format&fit=crop',
        description: 'Built for large-scale, high-budget agency spots requiring maximum illumination control and broadcast-grade optics.',
        primaryCamera: 'ARRI Alexa 35 Package + Master Built Anamorphic Primes',
        lightingArray: '2x ARRI SkyPanel X21, 1x ARRI 18/12K HMI PAR',
        dayRate: 'R45,000 – R65,000'
      }
    ],
    crew: [
      {
        id: 'cr-1',
        name: 'Thabang Mofokeng',
        title: 'Director of Photography',
        verified: true,
        role: 'Key Gaffer // Commercial & Feature',
        location: 'Johannesburg',
        tag: '#1 Pick',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
        summary: '12+ years of experience lighting high-end automotive commercials, narrative features, and complex studio setups.',
        recentCredits: 'BMW "Gusheshe" Global Spot // Netflix Drama Series (Season 2)',
        baseRate: 'R6,500 – R8,500 / 10-Hr Day',
        videoThumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'prod-2',
    title: 'Angels with Filthy Souls',
    artist: 'Feature Narrative',
    location: 'Johannesburg',
    status: 'Pending',
    timeline: '12 - 18 November 2026',
    burnRate: 'R 210 000',
    heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    equipment: [
      {
        id: 'eq-2',
        name: 'RED V-Raptor XL',
        category: 'Cinema Package',
        tag: 'Top Rated',
        subtitle: 'Feature Narrative / Cinema',
        image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=800&auto=format&fit=crop',
        description: '8K VV Sensor optimized for dynamic range, high frame rates, and low-light cinematic storytelling.',
        primaryCamera: 'RED V-Raptor XL 8K VV + Cooke Anamorphic/i Full Frame Plus',
        lightingArray: '4x Aputure 1200d Pro, 2x Astera Titan Tubes Kit',
        dayRate: 'R38,000 – R52,000'
      }
    ],
    crew: [
      {
        id: 'cr-2',
        name: 'Sipho Dlamini',
        title: 'Key Lighting Technician',
        verified: true,
        role: 'Gaffer // Commercial',
        location: 'Cape Town',
        tag: 'Recommended',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
        summary: 'Specialist in studio lighting design, DMX control networks, and fast-paced commercial setups.',
        recentCredits: 'Nike Africa "Run" Commercial // Standard Bank Campaign',
        baseRate: 'R5,500 – R7,500 / 10-Hr Day',
        videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop'
      }
    ]
  }
];