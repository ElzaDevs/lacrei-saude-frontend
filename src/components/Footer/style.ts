import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FooterTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Copyright = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
`;