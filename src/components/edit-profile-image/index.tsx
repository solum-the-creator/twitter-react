import { useState } from 'react';

import ImageIcon from '@/assets/images/icons/image-icon.svg?react';

import { AvatarActions, AvatarButton, AvatarContainer, AvatarPreview } from './edit-profile-image.styled';

export const EditProfileImage: React.FC = () => {
  const [avatarImage, setAvatarImage] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setAvatarImage(imageUrl);

      if (avatarImage) {
        URL.revokeObjectURL(avatarImage);
      }

      e.target.value = '';
    }
  };

  return (
    <AvatarContainer>
      {avatarImage && <AvatarPreview src={avatarImage} alt="Profile Avatar" />}
      <AvatarActions>
        <label htmlFor="avatarInput">
          <AvatarButton>
            <ImageIcon />
          </AvatarButton>
        </label>
      </AvatarActions>
      <input
        id="avatarInput"
        type="file"
        accept="image/*"
        onChange={handleAvatarChange}
        style={{ display: 'none' }}
      />
    </AvatarContainer>
  );
};
