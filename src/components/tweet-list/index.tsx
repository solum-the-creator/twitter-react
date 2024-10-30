import { useSelector } from 'react-redux';

import { selectAuthenticatedUser } from '@/store/auth/authSelectors';
import { useGetTweetsByUserIdQuery } from '@/store/tweets/tweetsApi';

import { CenteredLoader } from '../centered-loader';
import { Tweet } from '../tweet';

import { TweetListContainer } from './tweet-list.styled';

export const TweetList: React.FC = () => {
  const { uid } = useSelector(selectAuthenticatedUser);
  const { data: tweets, isLoading } = useGetTweetsByUserIdQuery(uid);

  if (isLoading) {
    return <CenteredLoader />;
  }

  return (
    <TweetListContainer>{tweets?.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}</TweetListContainer>
  );
};
