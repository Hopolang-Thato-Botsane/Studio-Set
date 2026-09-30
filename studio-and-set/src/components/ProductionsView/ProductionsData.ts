export interface CrewMember {
  id: string;
  name: string;
  role: string;
  image: string;
  badge?: string;
  experience?: string;
}

export interface EquipmentKit {
  id: string;
  title: string;
  category: string;
  image: string;
  pickBadge?: string;
  brandBadge?: string;
}

export interface ProductionItem {
  id: string;
  title: string;
  status: 'In Production' | 'Paused Production' | 'Paused';
  location: string;
  subtitle?: string;
  locationBadge: 'JHB' | 'CPT';
  coverImage: string;
  startDate: string;
  endDate: string;
  dailyRate: number;
  estimatedBurnRate: string;
  kits: EquipmentKit[];
  crew: CrewMember[];
}

export const INITIAL_PRODUCTIONS: ProductionItem[] = [
  {
    id: 'prod-1',
    title: 'DJ Whoops Music Video',
    status: 'In Production',
    location: 'Cape Town',
    subtitle: 'Artist: DJ Whoops ft LeNala = Lazy Culture',
    locationBadge: 'JHB',
    coverImage: '/images/productions/dj-whoops.jpg',
    startDate: '2026-09-12',
    endDate: '2026-09-20',
    dailyRate: 42500,
    estimatedBurnRate: 'R 86 500',
    kits: [
      {
        id: 'k1',
        title: 'ARRI',
        category: 'Music Video/ Flagship',
        image: '/images/kits/arri-flagship.jpg',
        pickBadge: '#1 Pick',
        brandBadge: 'ARRI',
      },
    ],
    crew: [
      {
        id: 'c1',
        name: 'Thabang Mofokeng',
        role: 'Director of Photography',
        image: '/images/crew/thabang.jpg',
        badge: '#1 Pick',
        experience: '12 YRS +',
      },
      {
        id: 'c2',
        name: 'Katlego Molefe',
        role: 'Director',
        image: '/images/crew/katlego.jpg',
        badge: '#1 Pick',
        experience: '12 YRS +',
      },
      {
        id: 'c3',
        name: 'Jessica v.d. Merwe',
        role: '1st AD / Script',
        image: '/images/crew/jessica.jpg',
        badge: '#1 Pick',
      },
      {
        id: 'c4',
        name: 'Tariq Hendricks',
        role: '1st AC / Focus',
        image: '/images/crew/tariq.jpg',
        badge: '#1 Pick',
      },
    ],
  },
  {
    id: 'prod-2',
    title: 'Angels with Filthy Souls',
    status: 'In Production',
    location: 'Johannesburg',
    subtitle: 'Feature Film Core Shooting Phase',
    locationBadge: 'CPT',
    coverImage: '/images/productions/angels.jpg',
    startDate: '2026-09-01',
    endDate: '2026-10-15',
    dailyRate: 65000,
    estimatedBurnRate: 'R 145 000',
    kits: [],
    crew: [],
  },
  {
    id: 'prod-3',
    title: 'Chubby Rain',
    status: 'Paused Production',
    location: 'Johannesburg',
    subtitle: 'Sci-Fi Comedy Feature',
    locationBadge: 'JHB',
    coverImage: '/images/productions/chubby-rain.jpg',
    startDate: '2026-10-01',
    endDate: '2026-10-10',
    dailyRate: 35000,
    estimatedBurnRate: 'R 52 000',
    kits: [],
    crew: [],
  },
  {
    id: 'prod-4',
    title: 'Scorcher 6',
    status: 'Paused Production',
    location: 'Johannesburg',
    subtitle: 'Action Blockbuster Series',
    locationBadge: 'JHB',
    coverImage: '/images/productions/scorcher.jpg',
    startDate: '2026-10-15',
    endDate: '2026-11-01',
    dailyRate: 90000,
    estimatedBurnRate: 'R 210 000',
    kits: [],
    crew: [],
  },
  {
    id: 'prod-5',
    title: 'Action Doctor',
    status: 'Paused',
    location: 'Johannesburg',
    subtitle: 'Medical Drama Pilot',
    locationBadge: 'JHB',
    coverImage: '/images/productions/action-doctor.jpg',
    startDate: '2026-11-05',
    endDate: '2026-11-20',
    dailyRate: 48000,
    estimatedBurnRate: 'R 95 000',
    kits: [],
    crew: [],
  },
];