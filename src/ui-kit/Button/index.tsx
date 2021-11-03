import React from 'react';
import { Btn } from './styled';

interface IProps {
  width?: string;
  height?: string;
  variant?: 'normal' | 'danger';
  className?: string;
}

export const Button: React.FC<IProps> = ({
  children,
  width = '100px',
  height = '38px',
  variant = 'normal',
  className,
}) => {
  return (
    <Btn className={className} width={width} height={height} variant={variant}>
      {children}
    </Btn>
  );
};
