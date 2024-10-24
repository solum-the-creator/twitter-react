import styled from 'styled-components';

import { NotificationType } from '@/types/notificcation';

export const ToastItemStyled = styled.div<{ $type: NotificationType }>`
  min-width: 12rem;
  max-width: 20rem;
  width: fit-content;
  padding: 1rem 1rem;
  border: 2px solid;

  display: flex;
  justify-content: space-between;

  border-color: ${({ $type, theme }) => theme.notification.backgroundColor[$type]};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ $type, theme }) => theme.notification.color[$type]};
  box-shadow: 0 4px 4px ${({ $type, theme }) => theme.notification.backgroundColor[$type]};
  border-radius: 0.5rem;

  font-size: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;

export const Message = styled.p`
  padding-right: 15px;
`;
