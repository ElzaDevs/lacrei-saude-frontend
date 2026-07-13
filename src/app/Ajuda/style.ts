import styled from "styled-components";
import Link from "next/link";

export const HelpContainer = styled.main`
  min-height: 80vh;
  padding: 4rem 1rem;
  background: ${({ theme }) => theme.colors.white};
`;

export const HelpContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const HelpTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const HelpSubtitle = styled.p`
  max-width: 700px;
  margin: 0 auto 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const HelpSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const HelpCard = styled.article`
  padding: 2rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.gray[100]};
  
  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

export const HelpButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 3rem auto 0;
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
