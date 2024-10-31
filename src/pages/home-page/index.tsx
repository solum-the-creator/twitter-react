import { TweetBox } from '@/components/tweet-box';
import { TweetForm } from '@/components/tweet-form';
import { TweetList } from '@/components/tweet-list';
import { useGetAllTweetsQuery } from '@/store/tweets/tweetsApi';

export const HomePage: React.FC = () => {
  const { data: tweets, isLoading: isLoadingTweets } = useGetAllTweetsQuery();

  return (
    <div>
      <TweetBox>
        <TweetForm />
      </TweetBox>
      <TweetList tweets={tweets} isLoading={isLoadingTweets} />
    </div>
  );
};
