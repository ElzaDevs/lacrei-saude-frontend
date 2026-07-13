import styled from "styled-components";

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;

  width: 56px;
  height: 56px;

  border: none;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  z-index: 9999;

  transition: .3s;

  box-shadow: 0 10px 30px rgba(0,0,0,.25);

  &:hover{
    transform: scale(1.08);
  }

  &:focus-visible{
    outline:3px solid #FFD54F;
    outline-offset:4px;
  }
`;

export const MenuContainer = styled.div`
  position: fixed;

  right: 24px;
  bottom: 92px;

  width: 280px;

  background: ${({ theme }) => theme.colors.white};

  border-radius: 16px;

  padding: 1rem;

  box-shadow: 0 20px 40px rgba(0,0,0,.15);

  display:flex;
  flex-direction:column;

  gap:.75rem;

  z-index:9999;
`;

export const MenuTitle = styled.h2`
  font-size:1rem;
  font-weight:700;

  margin-bottom:.5rem;
`;

export const MenuButton = styled.button`
  width:100%;

  min-height:48px;

  border:none;

  border-radius:10px;

  background:${({theme})=>theme.colors.gray[100]};

  cursor:pointer;

  transition:.2s;

  &:hover{
    background:${({theme})=>theme.colors.primary};
    color:white;
  }
`;