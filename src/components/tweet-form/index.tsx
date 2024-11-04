import { useId, useRef, useState } from 'react';

import ImageIcon from '@/assets/images/icons/image-icon.svg?react';
import { allowedFormats, maxImageCount, maxImageSizeMB, tweetLength } from '@/constants/tweets';
import { useGetAuthProfile } from '@/hooks/use-get-auth-profile';
import { useAppDispatch } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';
import { useAddTweetMutation } from '@/store/tweets/tweetsApi';
import { theme } from '@/styles/theme';
import { TweetResponse } from '@/types/tweet';
import { validateFiles } from '@/utils/file-validations-utils';

import { ImagesPreview } from '../images-preview';
import { Button } from '../ui/button';
import { ProfileImage } from '../ui/profile-image';

import {
  ActionButton,
  Actions,
  ContentLength,
  ImageLabel,
  ImagesPreviewWrapper,
  InputSection,
  RightActions,
  TextArea,
  TweetButtonWrapper,
  TweetFormWrapper,
  UserImageWrapper,
} from './tweet-form.styled';

type TweetFormProps = {
  onSuccess?: (tweet: TweetResponse) => void;
};

export const TweetForm: React.FC<TweetFormProps> = ({ onSuccess }) => {
  const dispatch = useAppDispatch();
  const { userProfile } = useGetAuthProfile();

  const [content, setContent] = useState('');

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const tweetImageInputId = useId();

  const isEmpty = content.trim().length === 0;
  const maxImageCountReached = selectedImages.length >= maxImageCount;
  const tweetDisabled = isEmpty && !selectedImages.length;

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

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);

      const { validFiles, errorMessages } = validateFiles(
        files,
        selectedImages.length,
        allowedFormats,
        maxImageSizeMB,
        maxImageCount,
      );

      errorMessages.forEach((message) => {
        dispatch(addNotification({ type: 'error', message }));
      });

      if (validFiles.length > 0) {
        setSelectedImages((prevImages) => [...prevImages, ...validFiles]);
        const newUrls = validFiles.map((file) => URL.createObjectURL(file));
        setImageUrls((prevUrls) => [...prevUrls, ...newUrls]);
      }
    }
  };

  const handleRemoveImage = (url: string) => {
    setImageUrls((prevUrls) => prevUrls.filter((u) => u !== url));
    setSelectedImages((prevImages) => prevImages.filter((_, index) => imageUrls[index] !== url));
  };

  const handleTweetSubmit = async () => {
    if (content.trim() || selectedImages.length) {
      try {
        const tweet = await addTweet({ content: content.trim(), imageFiles: selectedImages }).unwrap();
        dispatch(addNotification({ type: 'success', message: 'Tweet added successfully' }));
        onSuccess?.(tweet);
        setContent('');
        setSelectedImages([]);
        setImageUrls([]);
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

        {selectedImages.length > 0 && (
          <ImagesPreviewWrapper>
            <ImagesPreview images={imageUrls} onRemove={handleRemoveImage} />
          </ImagesPreviewWrapper>
        )}

        <Actions>
          <ActionButton disabled={maxImageCountReached}>
            <ImageLabel htmlFor={tweetImageInputId} disabled={maxImageCountReached}>
              <ImageIcon fill={maxImageCountReached ? theme.colors.accentDisabled : theme.colors.accent} />
            </ImageLabel>
          </ActionButton>

          <input
            id={tweetImageInputId}
            type="file"
            accept={allowedFormats.join(',')}
            multiple
            onChange={handleImageSelect}
            style={{ display: 'none' }}
          />

          <RightActions>
            <ContentLength>{!isEmpty && `${content.length} / ${tweetLength}`}</ContentLength>
            <TweetButtonWrapper>
              <Button
                variant="primary"
                size="small"
                fullWidth={true}
                isLoading={isTweetAdding}
                disabled={tweetDisabled}
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
