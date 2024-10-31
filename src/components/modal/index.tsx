import { useRef } from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from '@/assets/images/icons/close-icon.svg?react';
import { useClickOutside } from '@/hooks/use-click-outside';
import { useHideOverflow } from '@/hooks/use-hide-overflow';

import { Backdrop, CloseButton, Container, ModalContent, ModalHeader, ModalWrapper } from './modal.styled';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  header?: React.ReactNode;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, children, header, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onClose);
  useHideOverflow(isOpen);

  if (!isOpen) {
    return null;
  }

  return createPortal(
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
    </Container>,
    document.body,
  );
};
