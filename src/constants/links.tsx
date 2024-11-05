import BookmarksIcon from '@/assets/images/icons/bookmarks-fill-icon.svg?react';
import BookmarksIconAlt from '@/assets/images/icons/bookmarks-outline-icon.svg?react';
import ExploreIcon from '@/assets/images/icons/explore-fill-icon.svg?react';
import ExploreIconAlt from '@/assets/images/icons/explore-outline-icon.svg?react';
import HomeIcon from '@/assets/images/icons/home-fill-icon.svg?react';
import HomeIconAlt from '@/assets/images/icons/home-outline-icon.svg?react';
import ListsIcon from '@/assets/images/icons/lists-fill-icon.svg?react';
import ListsIconAlt from '@/assets/images/icons/lists-outline-icon.svg?react';
import MessagesIcon from '@/assets/images/icons/messages-fill-icon.svg?react';
import MessagesIconAlt from '@/assets/images/icons/messages-outline-icon.svg?react';
import MoreIcon from '@/assets/images/icons/more-icon.svg?react';
import NotificationsIcon from '@/assets/images/icons/notification-fill-icon.svg?react';
import NotificationsIconAlt from '@/assets/images/icons/notification-outline-icon.svg?react';
import ProfileIcon from '@/assets/images/icons/profile-fill-icon.svg?react';
import ProfileIconAlt from '@/assets/images/icons/profile-outline-icon.svg?react';

import { paths } from './paths';

export const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Help Center', href: '/help' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie' },
  { label: 'Ads Info', href: '/ads' },
  { label: 'Blog', href: '/blog' },
  { label: 'Status', href: '/status' },
  { label: 'Careers', href: '/careers' },
  { label: 'Brand Resources', href: '/brand' },
  { label: 'Advertising', href: '/advertising' },
  { label: 'Marketing', href: '/marketing' },
  { label: 'Twitter for Business', href: '/business' },
  { label: 'Developers', href: '/developers' },
  { label: 'Directory', href: '/directory' },
  { label: 'Settings', href: '/settings' },
  { label: '© 2024 Twitter, Inc.', href: '/copyright' },
];

export const rightFooterLinks = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie' },
  { label: 'Help Center', href: '/help' },
  { label: 'Ads Info', href: '/ads' },
  { label: '© 2024 Twitter, Inc.', href: '/copyright' },
];

export const privacyLinks = {
  terms: 'https://twitter.com/en/tos',
  privacy: 'https://twitter.com/en/privacy',
  cookies: 'https://twitter.com/en/cookies',
};

export const menuLinks = [
  {
    label: 'Home',
    to: paths.home,
    iconOutline: HomeIconAlt,
    iconFill: HomeIcon,
  },
  {
    label: 'Explore',
    to: '/explore',
    iconOutline: ExploreIconAlt,
    iconFill: ExploreIcon,
  },
  {
    label: 'Notifications',
    to: '/notifications',
    iconOutline: NotificationsIconAlt,
    iconFill: NotificationsIcon,
  },
  {
    label: 'Messages',
    to: '/messages',
    iconOutline: MessagesIconAlt,
    iconFill: MessagesIcon,
  },
  {
    label: 'Bookmarks',
    to: '/bookmarks',
    iconOutline: BookmarksIconAlt,
    iconFill: BookmarksIcon,
  },
  {
    label: 'Lists',
    to: '/lists',
    iconOutline: ListsIconAlt,
    iconFill: ListsIcon,
  },
  {
    label: 'Profile',
    to: paths.profile,
    iconOutline: ProfileIconAlt,
    iconFill: ProfileIcon,
  },
  {
    label: 'More',
    to: '/more',
    iconOutline: MoreIcon,
    iconFill: MoreIcon,
  },
];
