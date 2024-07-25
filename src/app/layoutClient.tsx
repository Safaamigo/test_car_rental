'use client';

import React, { Suspense } from 'react';
import { usePathname } from 'next/navigation';
// import Header from '@/components/Header/Header';
import Footer from '@/shared/Footer/Footer';
import Loading from './loading';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const noFooterPaths = ['/login', '/signup']; // Define paths where you don't want the footer

  const shouldShowFooter = !noFooterPaths.includes(pathname);

  return (
    <>
      {/* {shouldShowHeader && <Header />} */}
      <Suspense fallback={<Loading />}>{children}</Suspense>
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default ClientLayout;
