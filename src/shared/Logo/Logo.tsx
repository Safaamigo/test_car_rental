import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import logo from '@/images/logo.png'; // Ensure this path is correct

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = 'hidden' }) => {
  return (
    <Link href="/" className="flex cursor-pointer items-center gap-2">
      <img src={logo.src} alt="Logo" />
      <span className={`${className} text-2xl font-bold`}>HotKicks.</span>
    </Link>
  );
};

export default Logo;
