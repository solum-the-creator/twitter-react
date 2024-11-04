import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  addTweet,
  deleteTweet,
  getAllTweets,
  getPaginatedTweets,
  getTweetsByUserId,
  toggleLikeTweet,
} from '@/firebase/firebase-utils';
import { TweetResponse } from '@/types/tweet';
import { getFirebaseErrorMessage, isFirebaseError } from '@/utils/errors-utils';

export const tweetsApi = createApi({
  reducerPath: 'tweetsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Tweet'],
  endpoints: (builder) => ({
    addTweet: builder.mutation<TweetResponse, { content: string; imageFiles: File[] }>({
      queryFn: async ({ content, imageFiles }) => {
        try {
          const tweet = await addTweet(content, imageFiles);
          return { data: tweet };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);
            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred while adding the tweet.' } };
        }
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data: newTweet } = await queryFulfilled;
        dispatch(
          tweetsApi.util.updateQueryData(
            'getPaginatedTweets',
            { pageSize: 5, lastTweetId: null },
            (draft) => {
              draft.tweets.unshift(newTweet);
            },
          ),
        );
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
    getAllTweets: builder.query<TweetResponse[], void>({
      queryFn: async () => {
        try {
          const tweets = await getAllTweets();
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
    getPaginatedTweets: builder.query<
      { tweets: TweetResponse[]; lastVisibleId: string | null },
      { pageSize: number; lastTweetId: string | null }
    >({
      queryFn: async ({ pageSize, lastTweetId }) => {
        try {
          const { tweets, lastVisibleId } = await getPaginatedTweets(pageSize, lastTweetId);
          return { data: { tweets, lastVisibleId } };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);
            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred while fetching the tweets.' } };
        }
      },
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newTweets, { arg }) => {
        if (arg.lastTweetId === null) {
          return;
        }
        currentCache.tweets.push(...newTweets.tweets);
        currentCache.lastVisibleId = newTweets.lastVisibleId;
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.lastTweetId !== previousArg?.lastTweetId;
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
    toggleLikeTweet: builder.mutation<void, { tweetId: string; userId: string }>({
      queryFn: async ({ tweetId, userId }) => {
        try {
          await toggleLikeTweet(tweetId, userId);
          return { data: undefined };
        } catch (error) {
          if (isFirebaseError(error)) {
            const errorMessage = getFirebaseErrorMessage(error);
            return { error: { message: errorMessage } };
          }
          return { error: { message: 'An unexpected error occurred while toggling the like.' } };
        }
      },
      invalidatesTags: [{ type: 'Tweet', id: 'LIST' }],
    }),
  }),
});

export const {
  useAddTweetMutation,
  useGetTweetsByUserIdQuery,
  useDeleteTweetMutation,
  useGetAllTweetsQuery,
  useToggleLikeTweetMutation,
  useGetPaginatedTweetsQuery,
  useLazyGetPaginatedTweetsQuery,
} = tweetsApi;
