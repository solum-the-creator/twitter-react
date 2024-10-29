import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 7;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  left: 0;
  top: 0;
`;

export const ModalWrapper = styled.div`
  position: relative;
  z-index: 12;

  background-color: ${({ theme }) => theme.colors.primary};
  min-width: 20rem;
  min-height: 10rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ModalContent = styled.div`
  max-height: 30rem;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
`;

export const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.backdrop};
`;
