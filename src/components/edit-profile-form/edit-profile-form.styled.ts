import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 38rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const CoverImageWrapper = styled.div`
  width: 100%;
`;

export const FormControls = styled.div`
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const EditProfilceImageWrapper = styled.div`
  margin-top: -3rem;
  display: flex;
`;

export const FormSubtitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryText};
`;
