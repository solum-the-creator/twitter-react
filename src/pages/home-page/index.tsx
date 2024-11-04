import { useCallback, useEffect, useRef, useState } from 'react';

import { CenteredLoader } from '@/components/centered-loader';
import { TweetBox } from '@/components/tweet-box';
import { TweetForm } from '@/components/tweet-form';
import { TweetItem } from '@/components/tweet-item';
import { useLazyGetPaginatedTweetsQuery } from '@/store/tweets/tweetsApi';

import { TweetsLoader } from './home-page.styled';

export const HomePage: React.FC = () => {
  const [fetchTweets, { data: tweetsData, isFetching }] = useLazyGetPaginatedTweetsQuery();

  const [lastVisibleId, setLastVisibleId] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState<boolean | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!tweetsData) {
      fetchTweets({ pageSize: 5, lastTweetId: null });
    }
  }, [fetchTweets, tweetsData]);

  useEffect(() => {
    if (tweetsData) {
      setHasNextPage(tweetsData.lastVisibleId !== null);
      setLastVisibleId(tweetsData.lastVisibleId);
    }
  }, [tweetsData]);

  const lastItemRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetching || !hasNextPage) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchTweets({ pageSize: 5, lastTweetId: lastVisibleId });
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetching, hasNextPage, lastVisibleId, fetchTweets],
  );

  return (
    <div>
      <TweetBox>
        <TweetForm />
      </TweetBox>
      <div>
        {tweetsData?.tweets.map((tweet, index) => (
          <div key={tweet.id} ref={index === tweetsData.tweets.length - 1 ? lastItemRef : null}>
            <TweetItem {...tweet} />
          </div>
        ))}
        {isFetching && (
          <TweetsLoader>
            <CenteredLoader />
          </TweetsLoader>
        )}
      </div>
    </div>
  );
};
