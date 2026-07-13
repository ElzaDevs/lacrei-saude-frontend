import type { Metadata, Viewport } from 'next';

import StyledComponentsRegistry from '../lib/registry';
import { ThemeProvider } from '../styles/ThemeProvider';
import { Header } from '../components/header/header';
import { Footer } from '../components/Footer/footer';
import { AccessibilityButton } from '../components/Acessibility/Acessibility-Button';

export const metadata: Metadata = {
  title: 'Lacrei Saúde - Saúde com respeito e acolhimento 🌈',
  description:
    'Na Lacrei Saúde, você encontra profissionais qualificados e sensíveis às necessidades da comunidade LGBTQIAPN+.',
icon: '/favicon.svg',
  };

export const viewport: Viewport = {
  themeColor: '#018781',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>

            <a href="#conteudo-principal" className="skip-link">
              Pular para o conteúdo principal
            </a>

            <Header />

            <main id="conteudo-principal">
              {children}
            </main>

            <AccessibilityButton />

            <Footer />

          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}