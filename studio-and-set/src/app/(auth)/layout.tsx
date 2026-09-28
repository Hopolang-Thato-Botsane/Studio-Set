import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', width: '100%' }}>
      {children}
    </div>
  );
}