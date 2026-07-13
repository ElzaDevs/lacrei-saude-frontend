"use client";

import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterLink,
  Copyright,
} from "./style";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>

        <FooterColumn>
          <FooterTitle>Lacrei Saúde</FooterTitle>

          <FooterLink href="https://lacreisaude.com.br">
            Sobre a Lacrei Saúde
          </FooterLink>

          <FooterLink href="https://lacreisaude.com.br">
            Saúde inclusiva
          </FooterLink>

          <FooterLink href="https://lacreisaude.com.br">
            Nossa missão
          </FooterLink>
        </FooterColumn>


        <FooterColumn>
          <FooterTitle>Serviços</FooterTitle>

          <FooterLink href="/consultas">
            Consultas
          </FooterLink>

          <FooterLink href="/profissionais">
            Profissionais
          </FooterLink>
        </FooterColumn>


        <FooterColumn>
          <FooterTitle>Suporte</FooterTitle>

          <FooterLink href="/contato">
            Contato
          </FooterLink>

          <FooterLink href="https://lacreisaude.com.br">
            Central de ajuda
          </FooterLink>

          <FooterLink href="https://lacreisaude.com.br">
            Política de privacidade
          </FooterLink>
        </FooterColumn>

      </FooterContent>


      <Copyright>
        © 2026 Lacrei Saúde. Todos os direitos reservados.
      </Copyright>

    </FooterContainer>
  );
}