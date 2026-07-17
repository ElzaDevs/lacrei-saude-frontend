"use client";

import Link from "next/link";
import { HeaderContainer, Logo, Nav, NavLink } from "./style";

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/" legacyBehavior={false}>
        <Logo
          src="https://lacreisaude.com.br/assets/logo-b49c7267.svg"
          alt="Logo Lacrei Saúde"
        />
      </Link>
      <Nav>
        <Link href="/" legacyBehavior={false}>
          <NavLink>Início</NavLink>
        </Link>
        {/* Corrigido: Aponta para a página interna de profissionais */}
        <Link href="/profissionais" legacyBehavior={false}>
          <NavLink>Profissionais</NavLink>
        </Link>
        {/* Corrigido: Aponta para o site real da Lacrei e abre em nova aba */}
        <NavLink
          href="https://lacreisaude.com.br/ajuda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NavLink>Ajuda</NavLink>
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
}