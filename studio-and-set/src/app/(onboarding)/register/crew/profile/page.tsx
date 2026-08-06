'use client';

import { useRouter } from 'next/navigation';
import { CrewProfile } from '@/components/Profile/CrewProfile';
import { CrewProfile as CrewProfileType } from '@/types/auth';

export default function CrewProfilePage() {
  const router = useRouter();

  const handleSuccess = (data: CrewProfileType) => {
    console.log('Profile saved:', data);
    router.push('/dashboard'); 
  };

  return <CrewProfile onSuccess={handleSuccess} />;
}