import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { loginWithEmail, logout, registerWithEmail } from '@/firebase/firebase-utils';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    register: builder.mutation({
      queryFn: async ({ email, password }) => {
        try {
          const user = await registerWithEmail(email, password);
          return { data: user };
        } catch (error) {
          return { error };
        }
      },
    }),
    login: builder.mutation({
      queryFn: async ({ email, password }) => {
        try {
          const user = await loginWithEmail(email, password);
          return { data: user };
        } catch (error) {
          return { error };
        }
      },
    }),
    logout: builder.mutation({
      queryFn: async () => {
        try {
          await logout();
          return { data: true };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;
