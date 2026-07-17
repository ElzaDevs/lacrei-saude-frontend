import { render, screen } from '@testing-library/react';
import Home from './page';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

describe('Home Page', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  });

  it('should render the hero title', () => {
    const title = screen.getByRole('heading', {
      name: /Saúde com respeito e acolhimento 🌈/i,
    });
    expect(title).toBeInTheDocument();
  });

  it('should render the hero description', () => {
    const description = screen.getByText(
      /Profissionais preparados para atender a comunidade LGBTQIAPN\+ com segurança, dignidade e sem julgamentos./i
    );
    expect(description).toBeInTheDocument();
  });

  it('should render action buttons', () => {
    expect(screen.getByRole('link', { name: /Encontrar profissionais/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Saber mais/i })).toBeInTheDocument();
  });
});