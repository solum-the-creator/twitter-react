import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Notification } from '@/types/notificcation';

type NotificationState = {
  notifications: Notification[];
};

const initialState: NotificationState = {
  notifications: [],
};

export const notificcationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
      const newNotification = {
        id: Date.now().toString(),
        ...action.payload,
      };
      state.notifications.push(newNotification);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter((notification) => notification.id !== action.payload);
    },
  },
});

export const { addNotification, removeNotification } = notificcationSlice.actions;
export default notificcationSlice.reducer;
