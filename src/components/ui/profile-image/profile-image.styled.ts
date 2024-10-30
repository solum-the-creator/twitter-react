import styled from 'styled-components';

export const ProfileImageWrapper = styled.div<{ size?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;

  width: ${({ size }) => (size ? `${size}px` : '100%')};
  height: ${({ size }) => (size ? `${size}px` : '100%')};

  background-color: ${({ theme }) => theme.colors.backgroundGray};
`;

export const ProfileImageStyled = styled.img<{ size?: number }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProfileImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
`;
