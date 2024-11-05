import { useMemo } from 'react';

import { menuLinks } from '@/constants/links';
import { paths } from '@/constants/paths';
import { selectAuthenticatedUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/index';
import { getProfilePath } from '@/utils/paths-utils';

import { SidebarMenuItem } from '../sidebar-menu-item';

import { SidebarMenuStyled } from './sidebar-menu.styled';

export const SidebarMenu: React.FC = () => {
  const { uid } = useAppSelector(selectAuthenticatedUser);

  const dynamicMenuLinks = useMemo(() => {
    return menuLinks.map((link) => {
      if (link.to === paths.profile) {
        return {
          ...link,
          to: getProfilePath(uid),
        };
      }
      return link;
    });
  }, [uid]);

  return (
    <SidebarMenuStyled>
      {dynamicMenuLinks.map((link) => (
        <SidebarMenuItem key={link.label} {...link} />
      ))}
    </SidebarMenuStyled>
  );
};
