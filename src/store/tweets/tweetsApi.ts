import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { addTweet, deleteTweet, getTweetsByUserId } from '@/firebase/firebase-utils';
import { TweetResponse } from '@/types/tweet';
import { getFirebaseErrorMessage, isFirebaseError } from '@/utils/errors-utils';

export const tweetsApi = createApi({
  reducerPath: 'tweetsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Tweet'],
  endpoints: (builder) => ({
    addTweet: builder.mutation<string, { content: string; imageFiles: File[] }>({
      queryFn: async ({ content, imageFiles }) => {
        try {
          const tweetId = await addTweet(content, imageFiles);
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
    getTweetsByUserId: builder.query<TweetResponse[], string>({
      queryFn: async (userId) => {
        try {
          const tweets = await getTweetsByUserId(userId);
          return { data: tweets };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);
            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred while fetching the tweets.' } };
        }
      },
      providesTags: [{ type: 'Tweet', id: 'LIST' }],
    }),
    deleteTweet: builder.mutation<void, string>({
      queryFn: async (tweetId) => {
        try {
          await deleteTweet(tweetId);
          return { data: undefined };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);
            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred while deleting the tweet.' } };
        }
      },
      invalidatesTags: [{ type: 'Tweet', id: 'LIST' }],
    }),
  }),
});

export const { useAddTweetMutation, useGetTweetsByUserIdQuery, useDeleteTweetMutation } = tweetsApi;
