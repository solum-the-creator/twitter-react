import { useRef } from 'react';

import { useClickOutside } from '@/hooks/use-click-outside';

import { ActionItem, PopupWrapper } from './tweet-popup.styled';

type TweetPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

export const TweetPopup: React.FC<TweetPopupProps> = ({ isOpen, onClose, onDelete }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  useClickOutside(popupRef, onClose);

  return (
    isOpen && (
      <PopupWrapper ref={popupRef}>
        <ActionItem onClick={onDelete}>Delete</ActionItem>
      </PopupWrapper>
    )
  );
};
