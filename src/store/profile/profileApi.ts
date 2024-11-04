import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { fetchUserProfile, searchUsers, updateUserProfile } from '@/firebase/firebase-utils';
import { UpdateProfileRequest, UserProfile, UserProfileWithId } from '@/types/user';
import { getFirebaseErrorMessage, isFirebaseError } from '@/utils/errors-utils';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['UserProfile'],
  endpoints: (builder) => ({
    getProfile: builder.query<UserProfile, string>({
      queryFn: async (uid) => {
        try {
          const userProfile = await fetchUserProfile(uid);

          if (userProfile) {
            return { data: userProfile };
          }
          return { error: { message: 'User profile not found.' } };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);
            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred while fetching the profile.' } };
        }
      },
      providesTags: (_, _error, uid) => [{ type: 'UserProfile', id: uid }],
    }),
    updateProfile: builder.mutation<void, UpdateProfileRequest>({
      queryFn: async ({ uid, profileData, newPassword, newAvatarFile, newCoverFile, isCoverRemoved }) => {
        try {
          await updateUserProfile(uid, profileData, newPassword, newAvatarFile, newCoverFile, isCoverRemoved);
          return { data: undefined };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);
            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred while updating the profile.' } };
        }
      },
      invalidatesTags: (_, _error, { uid }) => [{ type: 'UserProfile', id: uid }],
    }),

    searchUsers: builder.query<UserProfileWithId[], string>({
      queryFn: async (query) => {
        try {
          const users = await searchUsers(query);
          return { data: users };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);
            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred while searching users.' } };
        }
      },
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation, useSearchUsersQuery } = profileApi;
