import { useState } from 'react';

import CloseIcon from '@/assets/images/icons/close-icon.svg?react';
import ImageIcon from '@/assets/images/icons/image-icon.svg?react';
import { useAppDispatch } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';

import {
  CoverActions,
  CoverButton,
  CoverContainer,
  CoverPreview,
  RemoveButton,
} from './edit-profile-cover.styled';

type EditProfileCoverProps = {
  coverUrl?: string;
  onFileSelect: (file?: File, isCoverRemove?: boolean) => void;
};

export const EditProfileCover: React.FC<EditProfileCoverProps> = ({ coverUrl, onFileSelect }) => {
  const dispatch = useAppDispatch();
  const [coverImage, setCoverImage] = useState<string | undefined>(coverUrl);

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const maxSizeInMB = 4;
      if (file.size > maxSizeInMB * 1024 * 1024) {
        dispatch(addNotification({ type: 'error', message: 'File size should be less than 4MB' }));
        return;
      }

      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
        dispatch(addNotification({ type: 'error', message: 'Only JPEG, JPG and PNG files are allowed' }));
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);

      onFileSelect(file);

      if (coverImage) {
        URL.revokeObjectURL(coverImage);
      }

      e.target.value = '';
    }
  };

  const handleRemoveCover = () => {
    setCoverImage(undefined);
    onFileSelect(undefined, true);
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
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleCoverChange}
        style={{ display: 'none' }}
      />
    </CoverContainer>
  );
};
