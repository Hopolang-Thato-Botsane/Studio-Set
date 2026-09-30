import type { CrewProfile } from '@/types/auth';

export const initialCrewProfile: CrewProfile = {
  id: 'crew-101',
  email: 'thabangM@studio.co.za',
  role: 'crew',
  firstName: 'Thabang',
  lastName: 'Mofokeng',
  idOrPassport: '8901015800087',
  location: 'Gauteng',
  avatarUrl: '/images/avatar-placeholder.jpg',
  mainDepartment: 'Lighting (Gaffer)',
  departmentRole: 'Commercial Gaffer',
  dailyRate: 3500,
  portfolioUrl: 'thabangM@studio.co.za',
  institution: 'Film School',
  qualification: 'Electrical Engineering',
  yearOfCompletion: '2015',
  bankName: 'Prosper Bank',
  accountNumber: '1234567890',
  branchCode: '21050',
  taxNumber: '987654321',
  workHistory: [
    { id: '1', studioName: 'Studio Uno', role: 'Gaffer', duration: '3 Years' },
    { id: '2', studioName: 'Pirate Films', role: 'Best-Boy & Gaffer', duration: '+2 Years' },
    { id: '3', studioName: 'Papaya Rules Films', role: 'Gaffer', duration: '+3 Years' },
  ],
  showreelUrl: '',
};