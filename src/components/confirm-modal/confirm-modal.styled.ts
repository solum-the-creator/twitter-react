import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Content = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 24rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ConfirmText = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1rem;
  font-weight: 400;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
