import { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoutIcon from '@/assets/images/icons/logout-icon.svg?react';
import TweetIcon from '@/assets/images/icons/tweet-icon.svg?react';
import { paths } from '@/constants/paths';
import { useLogoutMutation } from '@/store/auth/authApi';
import { useAppDispatch } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';

import { ConfirmModal } from '../confirm-modal';
import { TweetModal } from '../tweet-modal';
import { Button } from '../ui/button';
import { IconWrapper } from '../ui/icon-wrapper';
import { Logo } from '../ui/logo';

import {
  BottomSection,
  ButtonIconWrapper,
  ButtonText,
  ButtonWrapper,
  SidebarContainer,
  SidebarLogo,
  SidebarMenuWrapper,
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

  const handleLogoutOpen = () => {
    setIsLogoutConfirmOpen(true);
  };

  const handleLogoutClose = () => {
    setIsLogoutConfirmOpen(false);
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

        <ButtonWrapper>
          <Button variant="primary" onClick={handleTweetOpen} fullWidth={true}>
            <ButtonIconWrapper>
              <IconWrapper icon={TweetIcon} />
            </ButtonIconWrapper>
            <ButtonText>Tweet</ButtonText>
          </Button>
          <TweetModal isOpen={isTweetModalOpen} onClose={handleTweetClose} />
        </ButtonWrapper>
      </SidebarMenuWrapper>
      <BottomSection>
        <SidebarProfile />
        <ButtonWrapper>
          <Button variant="secondary" onClick={handleLogoutOpen} isLoading={isLoading} fullWidth={true}>
            <ButtonIconWrapper>
              <IconWrapper icon={LogoutIcon} />
            </ButtonIconWrapper>
            <ButtonText>Log out</ButtonText>
          </Button>
        </ButtonWrapper>
        <ConfirmModal
          isOpen={isLogoutConfirmOpen}
          onClose={handleLogoutClose}
          onConfirm={handleLogout}
          text="Are you sure you want to log out?"
          header="Log out"
        />
      </BottomSection>
    </SidebarContainer>
  );
};
