import { RootState } from '@/store';

export const selectUser = (state: RootState) => state.auth;

export const selectUserId = (state: RootState) => state.auth.uid;
