import { useLocation } from 'react-router-dom';

import { IconWrapper, Label, MenuItemLink, MenuItemWrapper } from './sidebar-menu-item.styled';

type SidebarMenuItemProps = {
  to: string;
  label: string;
  iconOutline: React.ReactNode;
  iconFill: React.ReactNode;
};

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ to, iconOutline, iconFill, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <MenuItemLink to={to}>
      <MenuItemWrapper>
        <IconWrapper>{isActive ? iconFill : iconOutline}</IconWrapper>
        <Label>{label}</Label>
      </MenuItemWrapper>
    </MenuItemLink>
  );
};
