import { fireEvent, screen } from '@testing-library/react';

import { render } from '@/tests/setup';

import { ConfirmModal } from '.';

describe('ConfirmModal', () => {
  const onClose = vi.fn();
  const onConfirm = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders modal content when isOpen is true', () => {
    render(
      <ConfirmModal
        isOpen={true}
        header="Test Header"
        text="Test Text"
        confirmText="Confirm"
        onClose={onClose}
        onConfirm={onConfirm}
      />,
    );

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.getByText('Test Text')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('does not render modal content when isOpen is false', () => {
    render(
      <ConfirmModal
        isOpen={false}
        header="Test Header"
        text="Test Text"
        confirmText="Confirm"
        onClose={onClose}
        onConfirm={onConfirm}
      />,
    );

    expect(screen.queryByText('Test Header')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Text')).not.toBeInTheDocument();
  });

  it('calls onClose when the Cancel button is clicked', () => {
    render(
      <ConfirmModal
        isOpen={true}
        header="Test Header"
        text="Test Text"
        confirmText="Confirm"
        onClose={onClose}
        onConfirm={onConfirm}
      />,
    );

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it('calls onConfirm and onClose in sequence when the Confirm button is clicked', () => {
    render(
      <ConfirmModal
        isOpen={true}
        header="Test Header"
        text="Test Text"
        confirmText="Confirm"
        onClose={onClose}
        onConfirm={onConfirm}
      />,
    );

    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders with default confirm button text if confirmText is not provided', () => {
    render(
      <ConfirmModal
        isOpen={true}
        header="Test Header"
        text="Test Text"
        onClose={onClose}
        onConfirm={onConfirm}
      />,
    );

    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });
});
