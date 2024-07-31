import Breadcrumb from "@/components_clients/Breadcrumbs/Breadcrumb";
import TableOne from "@/components_clients/Tables/TableOne";
import TableThree from "@/components_clients/Tables/TableThree";
import TableTwo from "@/components_clients/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components_clients/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
