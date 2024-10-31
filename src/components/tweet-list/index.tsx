import { TweetResponse } from '@/types/tweet';

import { CenteredLoader } from '../centered-loader';
import { TweetItem } from '../tweet-item';

import { TweetListContainer } from './tweet-list.styled';

type TweetListProps = {
  tweets?: TweetResponse[];
  isLoading?: boolean;
};

export const TweetList: React.FC<TweetListProps> = ({ tweets = [], isLoading }) => {
  if (isLoading) {
    return <CenteredLoader />;
  }

  return (
    <TweetListContainer>{tweets?.map((tweet) => <TweetItem key={tweet.id} {...tweet} />)}</TweetListContainer>
  );
};
