export type Tweet = {
  userId: string;
  content: string;
  timestamp: number;
};

export type TweetResponse = Tweet & {
  id: string;
};
