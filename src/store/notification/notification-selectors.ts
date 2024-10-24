import { RootState } from '@/store';

export const notificationsSelector = (state: RootState) => state.notification.notifications;
