import { Metadata } from "next";
import DefaultLayout from "@/components_clients/Layouts/DefaultLaout";
import Breadcrumb from "@/components_clients/Breadcrumbs/Breadcrumb";
import CalendarBox from "@/components_clients/CalenderBox";

export const metadata: Metadata = {
  title: "Next.js Calender Page | NextAdmin - Next.js Dashboard Kit",
  description:
    "This is Next.js Calender page for NextAdmin  Tailwind CSS Admin Dashboard Kit",
  // other metadata
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Calendar_client" />

        <CalendarBox />
      </div>
    </DefaultLayout>
  );
};

export default CalendarPage;
