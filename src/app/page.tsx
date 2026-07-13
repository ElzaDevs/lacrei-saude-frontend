'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '../components/button/Button';

const HomeContainer = styled.main`
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("https://lacreisaude.com.br/_next/static/media/greetings-banner-image.3ec83257.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.35; /* menor = texto mais legível (contraste) */
    z-index: -89;
  }
`;

const Hero = styled.section`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 6rem 1.5rem;
  max-width: 720px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Highlight = styled.span`
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.colors.pride.red}, ${theme.colors.pride.orange}, ${theme.colors.pride.yellow}, ${theme.colors.pride.green}, ${theme.colors.pride.blue}, ${theme.colors.pride.purple})`};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; /* fallback */
  -webkit-text-fill-color: transparent;
`;

const Cards = styled.section`
  display: grid;
  gap: 1.5rem;
  max-width: 960px;
  margin: 0 auto 4rem;
  padding: 0 1.5rem;
  grid-template-columns: 1fr; /* mobile-first: 1 coluna */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.bgGradientStart};
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const CommunityTitle = styled.h2`
  width: 100%;
  text-align: center;
  margin: 4rem 0 2rem;
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #000000, #000000, #010806);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 0.8s ease;

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(25px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default function Home() {
  const scrollToCards = () => {
    document.getElementById('cards')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <HomeContainer>
      <Hero aria-labelledby="hero-title">
        <HeroTitle id="hero-title">
          Saúde com <Highlight>respeito</Highlight> e <Highlight>acolhimento</Highlight> 🌈
        </HeroTitle>
        <HeroDescription>
          Profissionais preparados para atender a comunidade LGBTQIAPN+ com
          segurança, dignidade e sem julgamentos.
        </HeroDescription>
        <Actions>
          <Button as={Link} href="/profissionais" variant="primary" size="large">
            Encontrar profissionais
          </Button>
          <Button variant="outline" size="large" onClick={scrollToCards}>
            Saber mais
          </Button>
        </Actions>
      </Hero>

      <Cards id="cards" aria-label="Diferenciais da Lacrei Saúde">
        <Card>
          <CardTitle>Ambiente seguro</CardTitle>
          <p>Sua identidade é respeitada aqui. Sinta-se acolhido em nossa comunidade.</p>
        </Card>
        <Card>
          <CardTitle>Rede de apoio</CardTitle>
          <p>Mais que saúde, uma comunidade que cuida melhor de você.</p>
        </Card>
        <Card>
          <CardTitle>Profissionais qualificados</CardTitle>
          <p>Atendimento com empatia, acolhimento e experiência.</p>
        </Card>
      </Cards>

      <CommunityTitle>Venha fazer parte da nossa comunidade!</CommunityTitle>
    </HomeContainer>
  );
}