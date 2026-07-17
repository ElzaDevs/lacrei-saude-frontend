"use client";

import Link from "next/link";

import {
  HelpContainer,
  HelpContent,
  HelpTitle,
  HelpSubtitle,
  HelpSection,
  HelpCard,
  HelpButton,
} from "./style";

export default function AjudaPage() {
  return (
    <HelpContainer>
      <HelpContent>

        <HelpTitle>
          Como podemos ajudar?
        </HelpTitle>

        <HelpSubtitle>
          Encontre respostas para suas dúvidas sobre a Lacrei Saúde,
          consultas, profissionais e atendimento inclusivo.
        </HelpSubtitle>

        <HelpSection>

          <HelpCard>
            <h2>
              Como encontrar um profissional?
            </h2>

            <p>
              Acesse a área de profissionais e encontre especialistas
              preparados para oferecer um atendimento seguro, respeitoso
              e acolhedor.
            </p>

            <HelpButton as={Link} href="/profissionais">
              Encontrar profissional
            </HelpButton>
          </HelpCard>


          <HelpCard>
            <h2>
              Como funciona a consulta?
            </h2>

            <p>
              A Lacrei Saúde conecta pessoas a profissionais de saúde,
              proporcionando uma experiência acessível e humanizada.
            </p>
          </HelpCard>


          <HelpCard>
            <h2>
              Preciso de suporte
            </h2>

            <p>
              Caso tenha dúvidas sobre a plataforma ou precise de ajuda,
              entre em contato com nossa equipe.
            </p>

            <HelpButton as={Link} href="/contato">
              Falar com suporte
            </HelpButton>
          </HelpCard>

        </HelpSection>


        <HelpButton as={Link} href="/">
          Voltar para início
        </HelpButton>

      </HelpContent>
    </HelpContainer>
  );
}