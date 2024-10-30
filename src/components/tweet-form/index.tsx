import { useRef } from 'react';

import ImageIcon from '@/assets/images/icons/image-icon.svg?react';
import { theme } from '@/styles/theme';

import { Button } from '../ui/button';
import { ProfileImage } from '../ui/profile-image';

import {
  ActionButton,
  Actions,
  Container,
  Form,
  InputSection,
  TextArea,
  UserImageWrapper,
} from './tweet-form.styled';

export const TweetForm: React.FC = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  return (
    <Container>
      <Form>
        <UserImageWrapper>
          <ProfileImage size={48} src="" alt="Profile image" />
        </UserImageWrapper>
        <InputSection>
          <TextArea ref={textAreaRef} onInput={handleInput} placeholder="What's happening?!" />
          <Actions>
            <ActionButton>
              <ImageIcon fill={theme.colors.accent} />
            </ActionButton>

            <Button variant="primary" size="small">
              Tweet
            </Button>
          </Actions>
        </InputSection>
      </Form>
    </Container>
  );
};
