import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { LinkProps } from './link.type';

const variantStyles = {
  primary: css`
    color: ${({ theme }) => theme.colors.accentText};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.accentDisabled};
      cursor: not-allowed;
      pointer-events: none;
    }
  `,
  secondary: css`
    color: #0f1419;
    text-decoration: none;

    &:hover {
      color: #657786;
    }

    &:disabled {
      color: #cfd9de;
      cursor: not-allowed;
      pointer-events: none;
    }
  `,
};

export const StyledLink = styled(RouterLink)<Pick<LinkProps, 'variant'>>`
  ${({ variant }) => variantStyles[variant || 'primary']}
  cursor: pointer;
`;
