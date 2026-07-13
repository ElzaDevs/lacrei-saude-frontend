'use client';
import React from 'react';
import styled, { css } from 'styled-components';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'medium' | 'large';

interface StyledProps { $variant: Variant; $size: Size; $fullWidth: boolean; }

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    &:hover { filter: brightness(0.93); }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.white};
    &:hover { filter: brightness(0.95); }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    &:hover { background: rgba(1, 135, 129, 0.08); }
  `,
};

const sizes = {
  /* 48x48 mínimo (WCAG 2.5.5) */
  medium: css`min-height: 48px; padding: 0.75rem 1.5rem; font-size: 1rem;`,
  large:  css`min-height: 56px; padding: 1rem 2rem; font-size: 1.125rem;`,
};

const StyledButton = styled.button<StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;               /* espaçamento interno entre ícone e texto */
  min-width: 48px;           /* garante alvo de toque de 48x48 */
  font-weight: 700;
  line-height: 1;
  text-align: center;
  border-radius: 999px;      /* pill, no padrão da Lacrei */
  cursor: pointer;
  text-decoration: none;
  transition: filter 0.25s ease, background 0.25s ease, transform 0.1s ease;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  ${({ $variant }) => variants[$variant]}
  ${({ $size }) => sizes[$size]}
  &:active { transform: translateY(1px); }
  &:disabled { opacity: 0.55; cursor: not-allowed; }
  &:focus-visible { outline: 3px solid ${({ theme }) => theme.colors.primary}; outline-offset: 2px; }
`;

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'> & { as?: React.ElementType; href?: string };

export function Button({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} $size={size} $fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  );
}

export default function Page() {
  return (
    <main>
      <h1>Data</h1>
      <Button variant="primary">Exemplo</Button>
    </main>
  );
}