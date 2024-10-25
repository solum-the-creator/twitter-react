import { menuLinks } from '@/constants/links';

import { SidebarMenuItem } from '../sidebar-menu-item';

import { SidebarMenuStyled } from './sidebar-menu.styled';

export const SidebarMenu: React.FC = () => {
  return (
    <SidebarMenuStyled>
      {menuLinks.map((link) => (
        <SidebarMenuItem
          key={link.label}
          to={link.to}
          iconOutline={link.iconOutline}
          iconFill={link.iconFill}
          label={link.label}
        />
      ))}
    </SidebarMenuStyled>
  );
};
