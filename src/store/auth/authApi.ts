import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { loginWithEmail, loginWithGoogle, logout, registerWithEmail } from '@/firebase/firebase-utils';
import { LoginRequest, LoginResponse, SignUpWithEmailData } from '@/types/user';
import { getFirebaseErrorMessage, isFirebaseError } from '@/utils/errors-utils';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    register: builder.mutation<void, SignUpWithEmailData>({
      queryFn: async ({ email, password, profile }) => {
        try {
          await registerWithEmail({ email, password, profile });

          return { data: undefined };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);

            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred during registration.' } };
        }
      },
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      queryFn: async ({ email, password }) => {
        try {
          const userCredentials = await loginWithEmail(email, password);

          const { user } = userCredentials;

          return { data: { uid: user.uid, email: user.email! } };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);

            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred during login.' } };
        }
      },
    }),
    loginWithGoogle: builder.mutation<LoginResponse, void>({
      queryFn: async () => {
        try {
          const userCredentials = await loginWithGoogle();
          const { user } = userCredentials;

          return { data: { uid: user.uid, email: user.email! } };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);

            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred during Google login.' } };
        }
      },
    }),
    logout: builder.mutation<void, void>({
      queryFn: async () => {
        try {
          await logout();
          return { data: undefined };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);

            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred during logout.' } };
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useLoginWithGoogleMutation } =
  authApi;
