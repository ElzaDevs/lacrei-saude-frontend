'use client';

import styled from 'styled-components';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './src/contexts/ThemeContext';

const ToggleButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.backgroundLight};
  }
`;

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={`Ativar modo ${
        theme === 'light' ? 'escuro' : 'claro'
      }`}
    >
      {theme === 'light' ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </ToggleButton>
  );
};