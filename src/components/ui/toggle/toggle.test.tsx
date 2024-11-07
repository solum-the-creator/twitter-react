import { fireEvent, screen } from '@testing-library/react';

import { render } from '@/tests/setup';

import { Toggle } from '.';

describe('Toggle Component', () => {
  const defaultProps = {
    checked: false,
    onChange: vi.fn(),
  };

  it('renders with the correct initial checked state', () => {
    render(<Toggle {...defaultProps} checked={false} />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).not.toBeChecked();
  });

  it('renders as checked when checked prop is true', () => {
    render(<Toggle {...defaultProps} checked={true} />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeChecked();
  });

  it('calls onChange when toggled', () => {
    const handleChange = vi.fn();
    render(<Toggle {...defaultProps} checked={false} onChange={handleChange} />);

    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
