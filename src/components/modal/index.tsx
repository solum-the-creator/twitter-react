import { useRef } from 'react';

import CloseIcon from '@/assets/images/icons/close-icon.svg?react';
import { useClickOutside } from '@/hooks/use-click-outside';

import { Backdrop, CloseButton, Container, ModalContent, ModalHeader, ModalWrapper } from './modal.styled';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  header?: React.ReactNode;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, children, header, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onClose, true);

  if (!isOpen) {
    return null;
  }

  return (
    <Container>
      <Backdrop />
      <ModalWrapper ref={modalRef}>
        <ModalHeader>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          {header}
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </Container>
  );
};
