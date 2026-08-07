'use client';

import { useRouter } from 'next/navigation';
import { StudioProfile } from '@/components/Profile/StudioProfile';

export default function StudioProfilePage() {
  const router = useRouter();

  const handleSuccess = (data: Record<string, string>) => {
    console.log('Studio onboarded successfully:', data);
    router.push('/dashboard');
  };

  return <StudioProfile onSuccess={handleSuccess} />;
}