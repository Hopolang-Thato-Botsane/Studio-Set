export interface Hotspot {
  id: string;
  title: string;
  description: string;
  top: string;
  left: string;
  cardPosition: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'roster',
    title: 'VETTED ROSTER',
    description:
      'Direct access to verified DOPs, Gaffers, Key Grips, and technical specialists across Southern Africa. Filter by availability, scale, and production history.',
    top: '68%',
    left: '48%',
    cardPosition: 'top-right',
  },
  {
    id: 'gaffer',
    title: 'GAFFER AI',
    description:
      'Instant manifest generation powered by production logic. Input your shoot parameters, location, and creative vision to compile complete gear lists and crew packages automatically.',
    top: '25%',
    left: '68%',
    cardPosition: 'top-right',
  },
  {
    id: 'gear',
    title: 'GEAR & RIGGING',
    description:
      'Heavy-duty camera support, cinema optics, and high-output lighting arrays. Access real-time regional inventory and stage pre-flight manifests in seconds.',
    top: '48%',
    left: '14.5%',
    cardPosition: 'top-right',
  },
];