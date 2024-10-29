import { RootState } from '@/store';

export const selectUser = (state: RootState) => state.auth.user;

export const selectUserId = (state: RootState) => state.auth.user?.uid;

export const selectAuthLoading = (state: RootState) => state.auth.isLoading;

export const selectAuthenticatedUser = (state: RootState) => {
  const user = selectUser(state);
  if (!user) {
    throw new Error('User should be authenticated in protected routes.');
  }
  return user;
};
