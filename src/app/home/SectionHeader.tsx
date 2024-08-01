import Image from 'next/image';
import React from 'react';

import PromoTag from '@/components/PromoTag';
import { headerSection } from '@/data/content';
import pic1 from '@/images/car-images/pic2.png';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';

const SectionHeader = () => {
  return (
    <div className="container items-stretch gap-y-5 lg:flex lg:gap-5 lg:gap-y-0">
      <div
        className="basis-[68%] items-center space-y-10 rounded-2xl bg-beige p-5 md:flex md:space-y-0"
        style={{
          backgroundImage: `url(${pic1.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="basis-[63%] bg-white bg-opacity-70 p-5 rounded-xl">
          <h4 className="mb-5 text-xl font-medium text-primary">
            {headerSection.title}
          </h4>
          <h1
            className="text-[50px] font-medium tracking-tight text-secondary"
            style={{ lineHeight: '1em' }}
          >
            {headerSection.heading}
          </h1>
          <p className="my-10 w-[80%] text-neutral-500">
            {headerSection.description}
          </p>
          <ButtonPrimary sizeClass="px-5 py-4">View car</ButtonPrimary>
        </div>
      </div>

      <div className="mt-5 basis-[30%] lg:mt-0">
        <PromoTag />
      </div>
    </div>
  );
};

export default SectionHeader;
