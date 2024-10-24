import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 7fr 5fr;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.img`
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 4rem 2.75rem;
`;

export const Title = styled.h1`
  font-size: 5.25rem;
  font-weight: 900;

  margin-bottom: 2.5rem;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 3.5rem;
`;

export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Subtitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 900;

  margin-bottom: 2rem;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  margin-bottom: 1.5rem;
`;

export const AgreementText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 1.3rem;
`;

export const LoginText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const FooterLinks = styled.footer`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinksList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ListItem = styled.li`
  width: max-content;
`;
