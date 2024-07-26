import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import type { FC } from 'react';
import React from 'react';
import logo from '@/images/logo.png'; // Ensure this path is correct

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <><Link href="/">
      <a className={`flex cursor-pointer items-center gap-2 ${className}`}>
        <Image src={logo} alt="Logo" width={60} height={50} />
      </a>
    </Link><Link href="/" className="flex cursor-pointer items-center gap-2">
        <Image src={logo.src} alt="Logo" width={60} height={50} />
      </Link></>

  );
};

export default Logo;