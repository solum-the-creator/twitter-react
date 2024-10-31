export type Tweet = {
  userId: string;
  content: string;
  imageUrls: string[];
  timestamp: number;
};

export type TweetResponse = Tweet & {
  id: string;
};
