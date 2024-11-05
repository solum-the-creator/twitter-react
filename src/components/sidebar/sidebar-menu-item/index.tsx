import { useLocation } from 'react-router-dom';

import { IconWrapper } from '@/components/ui/icon-wrapper';

import { IconContainer, Label, MenuItemLink, MenuItemWrapper } from './sidebar-menu-item.styled';

type SidebarMenuItemProps = {
  to: string;
  label: string;
  iconOutline: React.ElementType<React.SVGProps<SVGSVGElement>>;
  iconFill: React.ElementType<React.SVGProps<SVGSVGElement>>;
};

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  to,
  iconOutline: IconOutline,
  iconFill: IconFill,
  label,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <MenuItemLink to={to}>
      <MenuItemWrapper>
        <IconContainer>
          <IconWrapper icon={isActive ? IconFill : IconOutline} />
        </IconContainer>
        <Label>{label}</Label>
      </MenuItemWrapper>
    </MenuItemLink>
  );
};
