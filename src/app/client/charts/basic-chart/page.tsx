import BasicChart from "@/components_clients/Charts/BasicChart";
import { Metadata } from "next";
import DefaultLayout from "@/components_clients/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components_clients/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Basic Chart Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Basic Chart page for NextAdmin Dashboard Kit",
  // other metadata
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Basic Chart" />

      <BasicChart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
