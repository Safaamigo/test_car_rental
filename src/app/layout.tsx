'use client';
import '@/styles/global.css';

import React, { Suspense } from 'react';
import { usePathname } from 'next/navigation';

import Header from '@/components/admin/Header/Header';
import Footer from '@/shared/Footer/Footer';
// import MainNav from '@/components/Header/MainNav';

import Loading from './loading';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  const hideNavAndFooterRoutes = ['/login', '/signup'].includes(pathname) || pathname.startsWith('/admin');

  return (
    <html lang="en">
      <body className="">
        {!hideNavAndFooterRoutes && <Header />}
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {!hideNavAndFooterRoutes && <Footer />}
      </body>
    </html>
  );
}
