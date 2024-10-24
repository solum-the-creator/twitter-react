import styled from 'styled-components';

export const Container = styled.div`
  padding: 3.75rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ControlGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SignUpLintWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
