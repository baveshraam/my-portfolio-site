'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  // If we're on the Studio page, render only the children without Header/Footer
  if (pathname && pathname.startsWith('/studio')) {
    return <>{children}</>;
  }

  // For all other pages, render the full layout with Header and Footer
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
