import styled from 'styled-components';

export const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  overflow: hidden;
`;

export const CoverPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
`;

export const CoverActions = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const CoverButton = styled.div`
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

export const RemoveButton = styled(CoverButton)`
  background-color: rgba(255, 0, 0, 0.5);

  &:hover {
    background-color: rgba(255, 0, 0, 0.7);
  }
`;
