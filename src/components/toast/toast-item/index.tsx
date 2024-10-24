import { useEffect } from 'react';

import CloseIcon from '@/assets/images/icons/close-icon.svg?react';
import { useAppDispatch } from '@/store/index';
import { removeNotification } from '@/store/notification/notificationSlice';
import { NotificationType } from '@/types/notificcation';

import { ButtonWrapper, CloseButton, Message, ToastItemStyled } from './toast-item.styled';

type ToastItemProps = {
  id: string;
  message?: string;
  type?: NotificationType;
};

export const ToastItem: React.FC<ToastItemProps> = ({ id, message, type = 'info' }) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(removeNotification(id));
  };

  useEffect(() => {
    const removeTimeout = setTimeout(() => {
      handleClose();
    }, 3000);
    return () => clearTimeout(removeTimeout);
  });

  return (
    <ToastItemStyled $type={type}>
      <Message>{message}</Message>
      <ButtonWrapper>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
      </ButtonWrapper>
    </ToastItemStyled>
  );
};
