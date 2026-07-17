"use client";

import styled from "styled-components";

export const ProfessionalsContainer = styled.section`
  width: 100%;
  padding: 60px 20px;
`;

export const ProfessionalsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProfessionalsTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  margin-bottom: 32px;
`;

export const ProfessionalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;