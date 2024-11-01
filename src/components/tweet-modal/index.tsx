import { Modal } from '../modal';
import { TweetForm } from '../tweet-form';

import { TweetFormWrapper } from './tweet-modal.styled';

type TweetModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const TweetModal: React.FC<TweetModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} header="Add Tweet">
      <TweetFormWrapper>
        <TweetForm onSuccess={onClose} />
      </TweetFormWrapper>
    </Modal>
  );
};
