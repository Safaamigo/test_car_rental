import Breadcrumb from "@/components_clients/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components_clients/Layouts/DefaultLaout";
import ProfileBox from "@/components_clients/ProfileBox";

export const metadata: Metadata = {
  title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const Profile = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Profile" />

        <ProfileBox />
      </div>
    </DefaultLayout>
  );
};

export default Profile;
