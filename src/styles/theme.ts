export const theme = {
  colors: {
    primary: '#018762',
    primaryDark: '#016B50',
    gradientStart: '#008392',
    gradientEnd: '#00BC86',
    bgGradientStart: '#F5FFFB',
    bgGradientEnd: '#FFFFFF',
    backgroundLight: '#F5FFFB',
    dark: '#111827',
    textBody: '#374151',
    textMuted: '#4B5563',
    textLight: '#9CA3AF',
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      400: '#9CA3AF',
      800: '#1F2937',
      900: '#111827',
    },
    text: {
      primary: '#111827',
      secondary: '#374151',
      light: '#9CA3AF',
    },
    pride: {
      red: '#E70000',
      orange: '#FF8C00',
      yellow: '#FFEF00',
      green: '#00811F',
      blue: '#0044FF',
      purple: '#760089',
    },
  },
  fonts: {
    body: "'Inter', sans-serif",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
    wide: '1440px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 12px rgba(0,0,0,0.1)',
    lg: '0 10px 20px rgba(0,0,0,0.15)',
  },
};

export type Theme = typeof theme;