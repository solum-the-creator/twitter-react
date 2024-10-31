import { Modal } from '../modal';
import { Button } from '../ui/button';

import { Actions, ConfirmText, Content } from './confirm-modal.styled';

type ConfirmModalProps = {
  header?: React.ReactNode;
  text?: React.ReactNode;
  confirmText?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  header,
  text,
  confirmText = 'Confirm',
  onClose,
  onConfirm,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} header={header}>
      <Content>
        <ConfirmText>{text}</ConfirmText>
        <Actions>
          <Button variant="secondary" onClick={onClose} fullWidth={true}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onConfirm} fullWidth={true}>
            {confirmText}
          </Button>
        </Actions>
      </Content>
    </Modal>
  );
};
