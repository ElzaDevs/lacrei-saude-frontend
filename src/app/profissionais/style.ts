import styled from "styled-components";

export const ProfessionalsContainer = styled.section`
  width: 100%;
  padding: 60px 20px;
`;

export const ProfessionalsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 2rem;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.1rem;
  margin-bottom: 32px;
`;

export const Filters = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 240px;
  padding: 12px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-size: 1rem;
`;

export const Select = styled.select`
  min-width: 220px;
  padding: 12px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-size: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.bgGradientStart};
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
  }
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;