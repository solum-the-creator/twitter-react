import { useState } from 'react';

import LikeFillIcon from '@/assets/images/icons/like-fill-icon.svg?react';
import LikeIcon from '@/assets/images/icons/like-icon.svg?react';
import { useAppDispatch } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';
import { useToggleLikeTweetMutation } from '@/store/tweets/tweetsApi';

import { LikeButton, LikeCount, LikeWrapper } from './like.styled';

type LikeProps = {
  tweetId: string;
  userId: string;
  isLiked: boolean;
  count: number;
};

export const Like: React.FC<LikeProps> = ({ tweetId, userId, isLiked, count }) => {
  const dispatch = useAppDispatch();
  const [toggleLike] = useToggleLikeTweetMutation();

  const [localIsLiked, setLocalIsLiked] = useState(isLiked);
  const [localCount, setLocalCount] = useState(count);

  const handleLike = async () => {
    setLocalIsLiked((prev) => !prev);
    setLocalCount((prev) => (localIsLiked ? prev - 1 : prev + 1));

    try {
      await toggleLike({ tweetId, userId }).unwrap();
    } catch (error) {
      setLocalIsLiked(isLiked);
      setLocalCount(count);

      const errorMessage = (error as { message: string }).message || 'An unexpected error occurred';
      dispatch(addNotification({ type: 'error', message: errorMessage }));
    }
  };

  return (
    <LikeWrapper>
      <LikeButton onClick={handleLike}>{localIsLiked ? <LikeFillIcon /> : <LikeIcon />}</LikeButton>
      <LikeCount>{localCount}</LikeCount>
    </LikeWrapper>
  );
};
