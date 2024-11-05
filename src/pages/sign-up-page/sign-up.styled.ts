import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Section = styled.section`
  padding: 2rem 2.5rem 2.5rem;
  width: 100%;
  max-width: 46rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
`;

export const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media screen and (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const FormTitle = styled.h1`
  font-family: 'Roboto Serif', serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const DateOfBirthGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

export const DateOfBirthTitle = styled.h3`
  font-family: 'Roboto Serif', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const DateOfBirthText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const SelectGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1.3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
