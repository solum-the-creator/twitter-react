import { useRef, useState } from 'react';

import ImageIcon from '@/assets/images/icons/image-icon.svg?react';
import { tweetLength } from '@/constants/tweets';
import { useGetAuthProfile } from '@/hooks/use-get-auth-profile';
import { useAppDispatch } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';
import { useAddTweetMutation } from '@/store/tweets/tweetsApi';
import { theme } from '@/styles/theme';

import { Button } from '../ui/button';
import { ProfileImage } from '../ui/profile-image';

import {
  ActionButton,
  Actions,
  ContentLength,
  InputSection,
  RightActions,
  TextArea,
  TweetButtonWrapper,
  TweetFormWrapper,
  UserImageWrapper,
} from './tweet-form.styled';

export const TweetForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const { userProfile } = useGetAuthProfile();

  const [content, setContent] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [addTweet, { isLoading: isTweetAdding }] = useAddTweetMutation();

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= tweetLength) {
      if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      }

      setContent(inputValue);
    }
  };

  const handleTweetSubmit = async () => {
    if (content.trim()) {
      try {
        await addTweet({ content: content.trim() });
        dispatch(addNotification({ type: 'success', message: 'Tweet added successfully' }));
        setContent('');
      } catch (error) {
        const errorMessage = (error as { message: string }).message || 'An unexpected error occurred';
        dispatch(addNotification({ type: 'error', message: errorMessage }));
      }
    }
  };

  return (
    <TweetFormWrapper>
      <UserImageWrapper>
        <ProfileImage size={48} src={userProfile?.profileImage} alt={userProfile?.name} />
      </UserImageWrapper>
      <InputSection>
        <TextArea
          ref={textAreaRef}
          onInput={handleInput}
          value={content}
          rows={3}
          placeholder="What's happening?!"
        />

        <Actions>
          <ActionButton>
            <ImageIcon fill={theme.colors.accent} />
          </ActionButton>

          <RightActions>
            <ContentLength>
              {content.length === 0 ? null : `${content.length} / ${tweetLength}`}
            </ContentLength>
            <TweetButtonWrapper>
              <Button
                variant="primary"
                size="small"
                fullWidth={true}
                isLoading={isTweetAdding}
                disabled={content.length === 0}
                onClick={handleTweetSubmit}>
                Tweet
              </Button>
            </TweetButtonWrapper>
          </RightActions>
        </Actions>
      </InputSection>
    </TweetFormWrapper>
  );
};
