'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

interface StyledProps {
  $variant: 'primary' | 'secondary' | 'outline';
  $size: 'small' | 'medium' | 'large';
  $fullWidth: boolean;
}

const buttonStyles = css<StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background: linear-gradient(
        90deg,
        ${theme.colors.gradientStart} 0%,
        ${theme.colors.gradientEnd} 100%
      );
      color: ${theme.colors.white};
      border: none;
      box-shadow: ${theme.shadows.md};

      &:hover {
        opacity: 0.9;
        transform: scale(1.05);
        box-shadow: ${theme.shadows.lg};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'secondary' &&
    css`
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      border: none;

      &:hover {
        background: ${theme.colors.primaryDark};
        transform: scale(1.05);
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'outline' &&
    css`
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};

      &:hover {
        background: ${theme.colors.backgroundLight};
        transform: scale(1.05);
      }
    `}

  ${({ $size }) =>
    $size === 'small' &&
    css`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    `}

  ${({ $size }) =>
    $size === 'medium' &&
    css`
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    `}

  ${({ $size }) =>
    $size === 'large' &&
    css`
      padding: 1rem 2rem;
      font-size: 1.125rem;
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button<StyledProps>`
  ${buttonStyles}
`;

const StyledLink = styled(Link)<StyledProps>`
  ${buttonStyles}
`;

export function Button({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  href,
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  if (href) {
    return (
      <StyledLink
        href={href}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
}