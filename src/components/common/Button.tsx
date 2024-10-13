import React from 'react';
import Button from '@mui/material/Button';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  type?: 'button' | 'submit' | 'reset';
  sx?: React.CSSProperties;
  startIcon?: React.ReactElement<SvgIconProps>;
  endIcon?: React.ReactElement<SvgIconProps>;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'contained',
  color = 'primary',
  type = 'button',
  sx,
  startIcon,
  endIcon,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      type={type}
      sx={sx}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
