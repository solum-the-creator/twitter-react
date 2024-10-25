import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuItemWrapper = styled.div`
  border-radius: 1.5rem;
  padding: 0.75rem 1.25rem 0.75rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;

  transition: background-color 0.2s ease-in-out;
`;

export const IconWrapper = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItemLink = styled(NavLink)`
  display: flex;
  align-items: center;

  font-size: 1.125rem;
  font-weight: 500;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.primaryText};
  text-decoration: none;

  &.active {
    font-weight: 800;
  }

  &:hover {
    ${MenuItemWrapper} {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  }
`;
