import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '@/tests/setup';

import { Select } from '.';

describe('Select Component', () => {
  const defaultProps = {
    label: 'Select option',
    id: 'select',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ],
    placeholder: 'Choose an option',
  };

  it('renders label when provided', () => {
    render(<Select {...defaultProps} />);
    expect(screen.getByLabelText(/select option/i)).toBeInTheDocument();
  });

  it('renders placeholder when provided', () => {
    render(<Select {...defaultProps} />);
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
  });

  it('renders options correctly', () => {
    render(<Select {...defaultProps} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('displays error message when error is provided', () => {
    render(<Select {...defaultProps} error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('supports fullWidth prop', () => {
    const { container } = render(<Select {...defaultProps} fullWidth />);
    expect(container.firstChild).toHaveStyle('width: 100%');
  });

  it('calls onChange when an option is selected', async () => {
    const handleChange = vi.fn();
    render(<Select {...defaultProps} onChange={handleChange} />);

    const select = screen.getByLabelText(/select option/i);
    await userEvent.selectOptions(select, '1');
    expect(handleChange).toHaveBeenCalled();
    expect(select).toHaveValue('1');
  });

  it('forwards other props correctly', () => {
    render(<Select {...defaultProps} id="select-id" name="select-name" />);
    const select = screen.getByLabelText(/select option/i);
    expect(select).toHaveAttribute('id', 'select-id');
    expect(select).toHaveAttribute('name', 'select-name');
  });
});
