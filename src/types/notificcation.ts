export type Notification = {
  id: string;
  message: string;
  type: NotificationType;
};

export type NotificationType = 'success' | 'error' | 'warning' | 'info';
