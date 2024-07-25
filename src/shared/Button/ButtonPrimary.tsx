import React from 'react';

import type { ButtonProps } from '@/shared/Button/Button';
import Button from '@/shared/Button/Button';

export interface ButtonPrimaryProps extends ButtonProps {
  href?: any;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = '',
  ...args
}) => {
  return (
    <Button
<<<<<<< HEAD
      className={`rounded-none bg-yellow text-white hover:bg-blue/80 disabled:bg-opacity-70 ${className}`}
=======
      className={`rounded-lg bg-primary text-secondary hover:bg-primary/80 disabled:bg-opacity-70 ${className}`}
>>>>>>> 9274e7063ed5110984649103be31e814a8066e72
      {...args}
    />
  );
};

export default ButtonPrimary;
