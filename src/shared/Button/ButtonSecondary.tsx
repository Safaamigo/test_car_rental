import React from 'react';

import type { ButtonProps } from '@/shared/Button/Button';
import Button from '@/shared/Button/Button';

export interface ButtonSecondaryProps extends ButtonProps {
  href?: any;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = '',
  ...args
}) => {
  return <Button className={`rounded-lg bg-beige text-secondary hover:bg-beige/80 disabled:bg-opacity-70${className}`} {...args} />;
};

export default ButtonSecondary;
