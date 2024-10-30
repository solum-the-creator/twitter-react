import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { addTweet } from '@/firebase/firebase-utils';
import { getFirebaseErrorMessage, isFirebaseError } from '@/utils/errors-utils';

export const tweetsApi = createApi({
  reducerPath: 'tweetsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Tweet'],
  endpoints: (builder) => ({
    addTweet: builder.mutation<string, { content: string }>({
      queryFn: async ({ content }) => {
        try {
          const tweetId = await addTweet(content);
          return { data: tweetId };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);
            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred while adding the tweet.' } };
        }
      },
      invalidatesTags: [{ type: 'Tweet', id: 'LIST' }],
    }),
  }),
});

export const { useAddTweetMutation } = tweetsApi;
