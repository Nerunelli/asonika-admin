import React from 'react';
import { Btn } from './styled';

interface IProps {
  width?: string;
  height?: string;
  variant?: 'normal' | 'danger' | 'transparent' | 'orange';
  className?: string;
  isForm?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<IProps> = ({
  children,
  width = '100px',
  height = '38px',
  variant = 'normal',
  disabled = false,
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
      disabled={disabled}
    >
      {children}
    </Btn>
  );
};
