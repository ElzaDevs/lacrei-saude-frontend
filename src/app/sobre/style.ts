import styled from "styled-components";


export const AboutContainer = styled.main`
  min-height: 80vh;

  padding: 5rem 1.5rem;

  background: ${({ theme }) =>
    theme.colors.white};
`;


export const AboutContent = styled.section`
  max-width: 1000px;

  margin: 0 auto;

  text-align: center;


  .fade {
    animation: fadeUp .6s ease;
  }


  @keyframes fadeUp {

    from {
      opacity: 0;
      transform: translateY(25px);
    }


    to {
      opacity: 1;
      transform: translateY(0);
    }

  }
`;


export const AboutTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 2.8rem);

  font-weight: 700;

  margin-bottom: 1.5rem;

  color: ${({ theme }) =>
    theme.colors.text.primary};
`;


export const AboutText = styled.p`
  max-width: 700px;

  margin: 0 auto 3rem;

  line-height: 1.7;

  font-size: 1.1rem;

  color: ${({ theme }) =>
    theme.colors.text.secondary};
`;


export const Cards = styled.section`
  display: grid;

  grid-template-columns:
  repeat(auto-fit, minmax(250px, 1fr));

  gap: 1.5rem;
`;


export const Card = styled.article`
  padding: 2rem;

  border-radius: 16px;

  background: #fff;

  border: 1px solid #eee;

  text-align: center;


  transition:
    transform .25s ease,
    box-shadow .25s ease;


  &:hover {

    transform: translateY(-8px);


    box-shadow:
      0 12px 25px rgba(0,0,0,.08);

  }


  h2 {

    margin-bottom: .8rem;

    font-size: 1.25rem;

    color: ${({ theme }) =>
      theme.colors.text.primary};

  }


  p {

    line-height: 1.5;

    color: ${({ theme }) =>
      theme.colors.text.secondary};

  }

`;


export const IconBox = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;


  margin-bottom: 1rem;


  svg {

    width: 42px;

    height: 42px;


    stroke-width: 1.8;


    color: ${({ theme }) =>
      theme.colors.primary};

  }

`;