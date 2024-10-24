import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { loginWithEmail, logout, registerWithEmail } from '@/firebase/firebase-utils';
import { LoginRequest, LoginResponse, SignUpWithEmailData } from '@/types/user';

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
          return { error };
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
          return { error };
        }
      },
    }),
    logout: builder.mutation<void, void>({
      queryFn: async () => {
        try {
          await logout();
          return { data: undefined };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;
