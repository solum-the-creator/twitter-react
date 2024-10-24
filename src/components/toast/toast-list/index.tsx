import { createPortal } from 'react-dom';

import { useAppSelector } from '@/store/index';
import { notificationsSelector } from '@/store/notification/notification-selectors';

import { ToastItem } from '../toast-item';

import { List, ToastListWrapper } from './toast-list.styled';

export const ToastList: React.FC = () => {
  const notifications = useAppSelector(notificationsSelector);

  return createPortal(
    <ToastListWrapper>
      <List>
        {notifications.map((notification) => (
          <ToastItem
            key={notification.id}
            id={notification.id}
            message={notification.message}
            type={notification.type}
          />
        ))}
      </List>
    </ToastListWrapper>,
    document.body,
  );
};
