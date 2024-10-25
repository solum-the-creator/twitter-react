import { Link } from 'react-router-dom';

import { paths } from '@/constants/paths';
import { useLogoutMutation } from '@/store/auth/authApi';
import { useAppDispatch } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';

import { Button } from '../ui/button';
import { Logo } from '../ui/logo';

import { BottomSection, SidebarContainer, SidebarLogo, SidebarMenuWrapper } from './sidebar.styled';
import { SidebarMenu } from './sidebar-menu';
import { SidebarProfile } from './sidebar-profile';

export const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      const errorMessage = (error as { message: string }).message || 'An unexpected error occurred';
      dispatch(addNotification({ type: 'error', message: errorMessage }));
    }
  };

  return (
    <SidebarContainer>
      <SidebarMenuWrapper>
        <SidebarLogo>
          <Link to={paths.home}>
            <Logo />
          </Link>
        </SidebarLogo>
        <SidebarMenu />
        <Button variant="primary">Tweet</Button>
      </SidebarMenuWrapper>
      <BottomSection>
        <SidebarProfile />
        <Button variant="secondary" onClick={handleLogout} disabled={isLoading}>
          Log out
        </Button>
      </BottomSection>
    </SidebarContainer>
  );
};
