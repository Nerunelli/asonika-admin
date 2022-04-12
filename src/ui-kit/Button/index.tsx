import React from 'react';
import { Btn } from './styled';

interface IProps {
  width?: string;
  height?: string;
  variant?: 'normal' | 'danger';
  className?: string;
  isForm?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IProps> = ({
  children,
  width = '100px',
  height = '38px',
  variant = 'normal',
  isForm,
  className,
  onClick,
}) => {
  return (
    <Btn
      className={className}
      width={width}
      height={height}
      variant={variant}
      type={isForm ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
};
