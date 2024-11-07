import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '@/tests/setup';

import { TextArea } from '.';

describe('TextArea Component', () => {
  const defaultProps = {
    label: 'Description',
    id: 'description',
    placeholder: 'Enter your description here...',
  };

  it('renders label when provided', () => {
    render(<TextArea {...defaultProps} />);
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
  });

  it('renders placeholder when provided', () => {
    render(<TextArea {...defaultProps} />);
    expect(screen.getByPlaceholderText('Enter your description here...')).toBeInTheDocument();
  });

  it('displays error message when error is provided', () => {
    render(<TextArea {...defaultProps} error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('renders help text when helpText is provided', () => {
    render(<TextArea {...defaultProps} helpText="This is the help text" />);
    expect(screen.getByText('This is the help text')).toBeInTheDocument();
  });

  it('supports fullWidth prop', () => {
    const { container } = render(<TextArea {...defaultProps} fullWidth />);
    expect(container.firstChild).toHaveStyle('width: 100%');
  });

  it('calls onChange when the value changes', async () => {
    const handleChange = vi.fn();
    render(<TextArea {...defaultProps} onChange={handleChange} />);

    const textarea = screen.getByLabelText('Description');
    await userEvent.type(textarea, 'New description');
    expect(handleChange).toHaveBeenCalled();
  });

  it('supports other standard props like id and name', () => {
    render(<TextArea {...defaultProps} id="textarea-id" name="textarea-name" />);
    const textarea = screen.getByLabelText('Description');
    expect(textarea).toHaveAttribute('id', 'textarea-id');
    expect(textarea).toHaveAttribute('name', 'textarea-name');
  });

  it('applies error styles when error prop is set', () => {
    render(<TextArea {...defaultProps} error="This field is required" />);

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });
});
