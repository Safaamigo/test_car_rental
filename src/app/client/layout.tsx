"use client";
// import "flatpickr/dist/flatpickr.min.css";
// import "@/css/satoshi.css";
// import '@/css/style.css';
import '@/styles/global.css';

import 'jsvectormap/dist/jsvectormap.cjs';

// import 'jsvectormap/dist/css/jsvectormap.css';
import React, { useEffect, useState } from "react";
import Loader from "@/components_clients/common/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    
      <>
        {loading ? <Loader /> : children}
      </>
    
  );
}
