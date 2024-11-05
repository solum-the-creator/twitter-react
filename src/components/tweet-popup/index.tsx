import { useRef, useState } from 'react';

import { useClickOutside } from '@/hooks/use-click-outside';

import { ConfirmModal } from '../confirm-modal';

import { ActionItem, PopupWrapper } from './tweet-popup.styled';

type TweetPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

export const TweetPopup: React.FC<TweetPopupProps> = ({ isOpen, onClose, onDelete }) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  const handleConfirmClose = () => {
    setIsConfirmModalOpen(false);
  };

  const handleClose = () => {
    if (!isConfirmModalOpen) {
      onClose();
    }
  };

  useClickOutside(popupRef, handleClose);

  const handleConfirm = () => {
    setIsConfirmModalOpen(false);
    onDelete();
    onClose();
  };

  const handleDeleteClick = () => {
    setIsConfirmModalOpen(true);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <PopupWrapper ref={popupRef}>
      <ActionItem onClick={handleDeleteClick}>Delete</ActionItem>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={handleConfirmClose}
        onConfirm={handleConfirm}
        header="Delete Tweet"
        text="This action cannot be undone and the post will be permanently removed from your profile, all your readers' feeds and search results."
      />
    </PopupWrapper>
  );
};
