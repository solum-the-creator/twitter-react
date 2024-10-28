import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from '@/assets/images/icons/close-icon.svg?react';

import { Backdrop, CloseButton, Container, ModalContent, ModalHeader, ModalWrapper } from './modal.styled';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  header?: React.ReactNode;
  onClose?: () => void;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, children, header, onClose }) => {
  const [modalContainer] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(modalContainer);

    return () => {
      document.body.removeChild(modalContainer);
    };
  }, [modalContainer]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <Container>
      <Backdrop onClick={onClose} />
      <ModalWrapper>
        <ModalHeader>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          {header}
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </Container>,
    modalContainer,
  );
};
