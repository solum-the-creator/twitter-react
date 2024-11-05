import styled from 'styled-components';

export const PreviewContainer = styled.div<{ $imagesCount: number }>`
  display: grid;
  gap: 4px;
  grid-template-columns: ${({ $imagesCount }) => ($imagesCount === 1 ? '1fr' : 'repeat(2, 1fr)')};
  grid-template-rows: ${({ $imagesCount }) => {
    if ($imagesCount === 1) return '1fr';
    if ($imagesCount === 2) return '1fr';
    if ($imagesCount === 3) return '1fr 1fr';
    return 'repeat(2, 1fr)';
  }};
`;

export const ImagePreviewStyled = styled.div<{ $imagesCount: number }>`
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  ${({ $imagesCount }) =>
    $imagesCount === 1 &&
    `
      grid-column: 1 / -1;
      width: 100%;
      height: auto;
    `}

  ${({ $imagesCount }) =>
    $imagesCount === 3 &&
    `
      &:nth-child(1), &:nth-child(2) {
        grid-row: 1;
      }
      &:nth-child(3) {
        grid-row: 2;
        grid-column: span 2;
      }
    `}

  @media screen and (max-width: 576px) {
    &:nth-child(1) {
      grid-row: 1;
      grid-column: span 2;
    }
    &:nth-child(2) {
      grid-row: 2;
      grid-column: span 2;
    }
    &:nth-child(3) {
      grid-row: 3;
      grid-column: span 2;
    }
    &:nth-child(4) {
      grid-row: 4;
      grid-column: span 2;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RemoveButtonWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
