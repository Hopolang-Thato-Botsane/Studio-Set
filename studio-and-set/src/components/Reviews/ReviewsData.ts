export interface LogoItem {
  id: number;
  name: string;
  src: string;
}

export interface ReviewItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  companyLogo: string;
}

export const LOGOS: LogoItem[] = [
  { id: 1, name: 'Logoipsum 1', src: '/assets/logos/logo1.svg' },
  { id: 2, name: 'Logoipsum 2', src: '/assets/logos/logo2.svg' },
  { id: 3, name: 'Logoipsum 3', src: '/assets/logos/logo3.svg' },
  { id: 4, name: 'Logoipsum 4', src: '/assets/logos/logo4.svg' },
  { id: 5, name: 'Logoipsum 5', src: '/assets/logos/logo5.svg' },
  { id: 6, name: 'Logoipsum 6', src: '/assets/logos/logo6.svg' },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    quote:
      '"Gaffer AI cut our pre-flight gear manifest prep time from three days to 20 minutes. Securing verified crew and specialized optics across South Africa used to be a logistical bottleneck—now it\'s a single prompt."',
    author: 'Simphiwe',
    role: 'Line Producer',
    companyLogo: '/assets/logos/logo1.svg',
  },
  {
    id: 2,
    quote:
      '"The crew roster vetting is strict and reliable. Knowing every gaffer and camera operator assigned through the platform comes fully verified with documented set experience makes instant dispatch seamless."',
    author: 'Dineo',
    role: 'Director of Photography',
    companyLogo: '/assets/logos/logo4.svg',
  },
  {
    id: 3,
    quote:
      '"Line-item clarity, transparent day rates, and instant manifest updates directly to the rigging crew. It completely eliminates miscommunication during pre-light."',
    author: 'Ryan',
    role: 'Key Gaffer & Rigging Lead',
    companyLogo: '/assets/logos/logo3.svg',
  },
];