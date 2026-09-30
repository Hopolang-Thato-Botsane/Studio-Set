export type UserRole = 'crew' | 'studio';

export interface BaseUser {
  id: string;
  email: string;
  role: UserRole;
  location: string;
  avatarUrl?: string;
}

export interface WorkHistoryItem {
  id: string;
  studioName: string;
  role: string;
  duration: string;
}

export interface CrewProfile extends BaseUser {
  role: 'crew';
  firstName: string;
  lastName: string;
  idOrPassport: string;
  mainDepartment: string;
  departmentRole: string;
  dailyRate: number;
  portfolioUrl?: string;

  // Education
  institution?: string;
  qualification?: string;
  yearOfCompletion?: string;

  // Billing & Taxes
  bankName?: string;
  accountNumber?: string;
  branchCode?: string;
  taxNumber?: string;

  // Past Work History / Experience
  workHistory?: WorkHistoryItem[];

  // Showreel / Video Media
  showreelUrl?: string;
}

export interface StudioProfile extends BaseUser {
  role: 'studio';
  companyName: string;
  registrationNumber: string;
  contactPerson: string;
  studioAddress: string;
  dayRate?: number;
  websiteUrl?: string;
}