import { useState } from 'react';
import { useTheme } from 'styled-components';

import ImageIcon from '@/assets/images/icons/image-icon.svg?react';
import { allowedFormats, maxImageSizeMB } from '@/constants/tweets';
import { useAppDispatch } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';

import { ProfileImage } from '../ui/profile-image';

import { AvatarActions, AvatarButton, AvatarContainer, AvatarPreview } from './edit-profile-image.styled';

type EditProfileImageProps = {
  profileUrl?: string;
  onFileSelect: (file?: File) => void;
};

export const EditProfileImage: React.FC<EditProfileImageProps> = ({ profileUrl, onFileSelect }) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [avatarImage, setAvatarImage] = useState<string | undefined>(profileUrl);
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.size > maxImageSizeMB * 1024 * 1024) {
        dispatch(addNotification({ type: 'error', message: 'File size should be less than 4MB' }));
        return;
      }

      if (!allowedFormats.includes(file.type)) {
        dispatch(addNotification({ type: 'error', message: 'Only JPEG, JPG and PNG files are allowed' }));
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setAvatarImage(imageUrl);

      onFileSelect(file);

      if (avatarImage) {
        URL.revokeObjectURL(avatarImage);
      }

      e.target.value = '';
    }
  };

  return (
    <AvatarContainer>
      {avatarImage && (
        <AvatarPreview>
          <ProfileImage src={avatarImage} alt="Profile image" />
        </AvatarPreview>
      )}
      <AvatarActions>
        <label htmlFor="avatarInput">
          <AvatarButton>
            <ImageIcon fill={theme.colors.primaryText} />
          </AvatarButton>
        </label>
      </AvatarActions>
      <input
        id="avatarInput"
        type="file"
        accept={allowedFormats.join(', ')}
        onChange={handleAvatarChange}
        style={{ display: 'none' }}
      />
    </AvatarContainer>
  );
};
