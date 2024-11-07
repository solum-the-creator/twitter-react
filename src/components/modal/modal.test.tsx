import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { render } from '@/tests/setup';

import { Modal } from '.';

describe('Modal', () => {
  const onClose = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly when open', () => {
    render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Modal content</div>
      </Modal>,
    );

    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <Modal isOpen={false} onClose={onClose}>
        <div>Modal content</div>
      </Modal>,
    );

    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', async () => {
    render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Modal content</div>
      </Modal>,
    );

    const closeButton = screen.getByRole('button');
    await userEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking outside the modal', async () => {
    render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Modal content</div>
      </Modal>,
    );

    await userEvent.click(document.body);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
