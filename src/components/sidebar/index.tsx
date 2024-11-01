import { useState } from 'react';
import { Link } from 'react-router-dom';

import { paths } from '@/constants/paths';
import { useLogoutMutation } from '@/store/auth/authApi';
import { useAppDispatch } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';

import { ConfirmModal } from '../confirm-modal';
import { TweetModal } from '../tweet-modal';
import { Button } from '../ui/button';
import { Logo } from '../ui/logo';

import {
  BottomSection,
  SidebarContainer,
  SidebarLogo,
  SidebarMenuWrapper,
  TweetButtonWrapper,
} from './sidebar.styled';
import { SidebarMenu } from './sidebar-menu';
import { SidebarProfile } from './sidebar-profile';

export const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [logout, { isLoading }] = useLogoutMutation();

  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const [isTweetModalOpen, setIsTweetModalOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      const errorMessage = (error as { message: string }).message || 'An unexpected error occurred';
      dispatch(addNotification({ type: 'error', message: errorMessage }));
    }
  };

  const handleTweetOpen = () => {
    setIsTweetModalOpen(true);
  };

  const handleTweetClose = () => {
    setIsTweetModalOpen(false);
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

        <TweetButtonWrapper>
          <Button variant="primary" onClick={handleTweetOpen} fullWidth={true}>
            Tweet
          </Button>
          <TweetModal isOpen={isTweetModalOpen} onClose={handleTweetClose} />
        </TweetButtonWrapper>
      </SidebarMenuWrapper>
      <BottomSection>
        <SidebarProfile />
        <Button variant="secondary" onClick={() => setIsLogoutConfirmOpen(true)} isLoading={isLoading}>
          Log out
        </Button>
        <ConfirmModal
          isOpen={isLogoutConfirmOpen}
          onClose={() => setIsLogoutConfirmOpen(false)}
          onConfirm={handleLogout}
          text="Are you sure you want to log out?"
          header="Log out"
        />
      </BottomSection>
    </SidebarContainer>
  );
};
