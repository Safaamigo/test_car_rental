
"use client";
import Link from "next/link";
import React from "react";
import { footerBannerData } from "@/data/content";
import Heading from "@/shared/Heading/Heading";
import ButtonPrimary from "../Button/ButtonPrimary";
import { usePathname } from "next/navigation";

const FooterBanner = () => {
  const pathname = usePathname();

  // Check if the URL contains "about-us"
  if (pathname.includes("about-us")) {
    return null;
  }

  return (
    <div className="rounded-2xl bg-[url('/bgProducts.jpg')] bg-cover bg-center bg-no-repeat py-16 text-white">
      <Heading className="mb-0" isMain isCenter>
        {footerBannerData.heading}
      </Heading>
      <p className="mx-auto w-[80%] text-center md:w-[50%]">
        {footerBannerData.description}
      </p>
      <div className="mt-10 flex items-center justify-center">
        <Link href="/about-us">
          <ButtonPrimary sizeClass="px-6 py-4">More about us</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default FooterBanner;
