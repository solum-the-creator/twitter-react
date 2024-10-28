import styled from 'styled-components';

export const AvatarContainer = styled.div`
  position: relative;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 0.25rem solid ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.accentHover};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: brightness(0.8);
`;

export const AvatarActions = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarButton = styled.div`
  background-color: rgba(230, 230, 230, 0.7);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
