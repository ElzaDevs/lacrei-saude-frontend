'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Menu, X, Heart, Shield } from 'lucide-react';

import { Logo } from '../Logo/Logo';
import { Button } from '../button/Button';

const HeaderContainer = styled.header`
  width: 100%;
  background: linear-gradient(180deg, #F5FFFB 31.04%, #FFFFFF 100%);
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;


const HeaderContent = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 1.5rem 2rem;
  }
`;


const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }
`;


const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  font-weight: 500;
  transition: .3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;


const ActionButtons = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }
`;


const IconButton = styled.button<{
  variant?: 'primary' | 'dark'
}>`
  width: 2.7rem;
  height: 2.7rem;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:999px;
  transition:.3s;

  ${({ variant, theme }) =>
    variant === 'primary' &&
    `
      background:${theme.colors.primary};
      color:white;

      &:hover{
        transform:scale(1.05);
      }
    `
  }

  ${({ variant, theme }) =>
    variant === 'dark' &&
    `
      background:${theme.colors.gray[900]};
      color:white;

      &:hover{
        transform:scale(1.05);
      }
    `
  }
`;


const MobileMenuButton = styled.button`
  display:flex;
  color:${({ theme }) => theme.colors.text.primary};

  @media(min-width:${({ theme }) => theme.breakpoints.desktop}){
    display:none;
  }
`;


const MobileMenu = styled.div`
  position:absolute;
  top:100%;
  left:0;
  width:100%;
  background:white;
  border-top:1px solid #eee;
`;


const MobileNav = styled.nav`
  padding:1rem;
  display:flex;
  flex-direction:column;
  gap:1rem;
`;


const MobileNavLink = styled(Link)`
  color:${({ theme }) => theme.colors.text.primary};
  font-weight:500;
`;


const MobileActions = styled.div`
  padding:1rem;
  border-top:1px solid #eee;
  display:flex;
  flex-direction:column;
  gap:1rem;
`;


const MobileIconButtons = styled.div`
  display:flex;
  justify-content:center;
  gap:1rem;
`;


export function Header(){

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <HeaderContainer>

      <HeaderContent>

        <Link 
          href="/"
          aria-label="Página inicial Lacrei Saúde"
        >
          <Logo />
        </Link>


        <Nav aria-label="Navegação principal">

          <NavLink href="/">
            Início
          </NavLink>


          <NavLink
            href="https://profissional.lacreisaude.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profissionais
          </NavLink>

          <NavLink href="../Ajuda/page.tsx">
            Ajuda
          </NavLink>
        </Nav>

        <ActionButtons>
          <IconButton
            type="button"
            variant="primary"
            aria-label="Área do paciente">
            <Heart size={18}/>
          </IconButton>

          <IconButton
            type="button"
            variant="dark"
            aria-label="Área do profissional">
            <Shield size={18}/>
          </IconButton>


          <Button
            variant="primary"
            size="medium"
            href="/profissionais">
            Agendar
          </Button>
      </ActionButtons>

        <MobileMenuButton
          type="button"
          aria-label={
            mobileMenuOpen
              ? "Fechar menu"
              : "Abrir menu"
          }
          aria-expanded={mobileMenuOpen}
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
        >
          {
            mobileMenuOpen
              ? <X />
              : <Menu />
          }
        </MobileMenuButton>
        {
          mobileMenuOpen && (

            <MobileMenu>

              <MobileNav>

                <MobileNavLink href="/">
                  Início
                </MobileNavLink>


                <MobileNavLink
                  href="https://profissional.lacreisaude.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Profissionais
                </MobileNavLink>


                <MobileNavLink href="/ajuda">
                  Ajuda
                </MobileNavLink>


              </MobileNav>



              <MobileActions>

                <Button
                  variant="primary"
                  size="large"
                  fullWidth
                  href="/profissionais"
                >
                  Agendar Consulta
                </Button>


                <MobileIconButtons>

                  <IconButton
                    variant="primary"
                    type="button"
                    aria-label="Paciente"
                  >
                    <Heart/>
                  </IconButton>


                  <IconButton
                    variant="dark"
                    type="button"
                    aria-label="Profissional"
                  >
                    <Shield/>
                  </IconButton>


                </MobileIconButtons>

              </MobileActions>

            </MobileMenu>

          )
        }


      </HeaderContent>

    </HeaderContainer>
  );
}