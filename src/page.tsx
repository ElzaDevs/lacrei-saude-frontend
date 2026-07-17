"use client";

import styled from "styled-components";
import {
  ShieldCheck,
  UsersRound,
  Stethoscope,
} from "lucide-react";

import { Button } from "./components/button/Button";


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

    opacity: .25;

    pointer-events: none;
  }
`;


const Hero = styled.section`
  max-width: 720px;

  margin: 0 auto;

  padding: 6rem 1.5rem;

  text-align: center;

  animation: fadeUp .8s ease;


  @keyframes fadeUp {

    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }

  }
`;


const Title = styled.h1`
  font-size: clamp(2rem,5vw,3rem);

  line-height: 1.2;

  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};
`;


const Highlight = styled.span`
  color: ${({ theme }) =>
    theme.colors.primary};
`;


const Description = styled.p`
  margin: 1.5rem auto 2rem;

  max-width: 650px;

  line-height: 1.7;

  font-size: 1.1rem;

  color: ${({ theme }) =>
    theme.colors.text};
`;


const Actions = styled.div`
  display:flex;

  justify-content:center;

  gap:1rem;

  flex-wrap:wrap;
`;


const Cards = styled.section`
  display:grid;

  grid-template-columns:
    repeat(auto-fit,minmax(250px,1fr));

  gap:1.5rem;

  max-width:960px;

  margin:0 auto;

  padding:0 1.5rem;
`;


const Card = styled.article`
  padding:2rem;

  text-align:center;

  border-radius:16px;

  background:white;

  border:1px solid #eeeeee;

  transition:
    transform .3s ease,
    box-shadow .3s ease;


  &:hover {

    transform:translateY(-8px);

    box-shadow:
      0 15px 35px rgba(0,0,0,.08);

  }


  svg {

    width:42px;

    height:42px;

    margin-bottom:1rem;

    color:${({ theme }) =>
      theme.colors.primary};

    stroke-width:1.8;

  }


  h2 {

    margin-bottom:.8rem;

  }


  p {

    line-height:1.5;

    color:${({ theme }) =>
      theme.colors.text};

  }
`;


const CommunityTitle = styled.h2`

  text-align:center;

  margin:4rem 1rem;

  font-size:clamp(1.8rem,4vw,2.5rem);

  color:${({ theme }) =>
    theme.colors.text};


  animation:fadeCommunity .9s ease;


  @keyframes fadeCommunity {

    from {

      opacity:0;

      transform:translateY(25px);

    }


    to {

      opacity:1;

      transform:translateY(0);

    }

  }

`;



export default function Home() {

  return (

    <HomeContainer>


      <Hero>


        <Title>

          Saúde com{" "}

          <Highlight>
            respeito
          </Highlight>

          {" "}e{" "}

          <Highlight>
            acolhimento
          </Highlight>

          🌈

        </Title>


        <Description>

          Profissionais preparados para atender a comunidade LGBTQIAPN+
          com segurança, dignidade e sem julgamentos.

        </Description>



        <Actions>


          <Button
            href="/profissionais"
            variant="primary"
            size="large"
          >

            Encontrar profissionais

          </Button>



          <Button
            href="/sobre"
            variant="outline"
            size="large"
          >

            Saber mais

          </Button>


        </Actions>


      </Hero>



      <Cards>


        <Card>

          <ShieldCheck aria-hidden="true"/>

          <h2>
            Ambiente seguro
          </h2>

          <p>
            Sua identidade é respeitada aqui.
            Sinta-se acolhido em nossa comunidade.
          </p>

        </Card>



        <Card>

          <UsersRound aria-hidden="true"/>

          <h2>
            Rede de apoio
          </h2>

          <p>
            Mais que saúde, uma comunidade que cuida melhor de você.
          </p>

        </Card>



        <Card>

          <Stethoscope aria-hidden="true"/>

          <h2>
            Profissionais qualificados
          </h2>

          <p>
            Atendimento com empatia, acolhimento e experiência.
          </p>

        </Card>


      </Cards>



      <CommunityTitle>

        Venha fazer parte da nossa comunidade!

      </CommunityTitle>


    </HomeContainer>

  );
}