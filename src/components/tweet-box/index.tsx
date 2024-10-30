import { TweetBoxStyled } from './tweet-box.styled';

export const TweetBox = ({ children }: { children: React.ReactNode }) => {
  return <TweetBoxStyled>{children}</TweetBoxStyled>;
};
