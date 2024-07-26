import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import logo from '@/images/logo.png'; // Ensure this path is correct
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = () => {
  return (
    <Link href="/" className="flex cursor-pointer items-center gap-2">
<Image src={logo.src} alt="Logo" width={60} height={50} />
</Link>
  );
};

export default Logo;
