import { useState } from 'react';

import CloseIcon from '@/assets/images/icons/close-icon.svg?react';
import ImageIcon from '@/assets/images/icons/image-icon.svg?react';

import {
  CoverActions,
  CoverButton,
  CoverContainer,
  CoverPreview,
  RemoveButton,
} from './edit-profile-cover.styled';

export const EditProfileCover: React.FC = () => {
  const [coverImage, setCoverImage] = useState<string | null>(null);

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);

      if (coverImage) {
        URL.revokeObjectURL(coverImage);
      }

      e.target.value = '';
    }
  };

  const handleRemoveCover = () => {
    setCoverImage(null);
  };

  return (
    <CoverContainer>
      {coverImage && <CoverPreview src={coverImage} alt="Profile Cover" />}
      <CoverActions>
        <label htmlFor="coverInput">
          <CoverButton>
            <ImageIcon />
          </CoverButton>
        </label>
        {coverImage && (
          <RemoveButton onClick={handleRemoveCover}>
            <CloseIcon />
          </RemoveButton>
        )}
      </CoverActions>
      <input
        id="coverInput"
        type="file"
        accept="image/*"
        onChange={handleCoverChange}
        style={{ display: 'none' }}
      />
    </CoverContainer>
  );
};
