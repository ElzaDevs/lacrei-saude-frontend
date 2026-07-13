import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.white};

    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    line-height: 1.6;
  }

  ul,
  ol {
    list-style: none;
  }

  input,
  textarea,
  select {
    font-family: inherit;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  .skip-link {
    position: absolute;
    left: -9999px;
    top: 0;
    z-index: 1000;

    padding: 0.75rem 1rem;

    background: ${({ theme }) =>
      theme.colors.primaryDark ?? '#014B47'};

    color: ${({ theme }) => theme.colors.white};

    border-radius: 0.5rem;
  }

  .skip-link:focus {
    left: 0.5rem;
    top: 0.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      }
      @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  export const GlobalStyles = createGlobalStyle
  :root {
    --background: ${({ theme }) => theme.colors.white};
    --text: ${({ theme }) => theme.colors.text.primary};
    --primary: ${({ theme }) => theme.colors.primary};
  }
  html.high-contrast {
    --background: #000;
    --text: #fff;
    --primary: #ffff00;
  }
  body {
    background: var(--background);
    color: var(--text);
  }
  a {
    color: var(--primary);
  }
`;