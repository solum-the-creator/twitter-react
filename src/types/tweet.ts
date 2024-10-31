export type Tweet = {
  userId: string;
  content: string;
  imageUrls: string[];
  timestamp: number;
  likes: Likes;
};

export type Likes = {
  count: number;
  likesBy: string[];
};

export type TweetResponse = Tweet & {
  id: string;
};
