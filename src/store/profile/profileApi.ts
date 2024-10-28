import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { fetchUserProfile } from '@/firebase/firebase-utils';
import { UserProfile } from '@/types/user';
import { getFirebaseErrorMessage, isFirebaseError } from '@/utils/errors-utils';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fakeBaseQuery(),
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
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
