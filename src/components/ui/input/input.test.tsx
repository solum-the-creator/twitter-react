import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '@/tests/setup';

import { Input } from '.';

describe('Input Component', () => {
  const defaultProps = {
    label: 'Username',
    id: 'username',
    placeholder: 'Enter your username',
  };

  it('renders label when provided', () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  });

  it('displays helpText when no error is provided', () => {
    render(<Input {...defaultProps} helpText="Must be at least 6 characters" />);
    expect(screen.getByText('Must be at least 6 characters')).toBeInTheDocument();
  });

  it('displays error message when error is provided', () => {
    render(<Input {...defaultProps} error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('supports fullWidth prop', () => {
    const { container } = render(<Input {...defaultProps} fullWidth={true} />);
    expect(container.firstChild).toHaveStyle('width: 100%');
  });

  it('forwards other props correctly', () => {
    render(<Input {...defaultProps} type="password" />);
    expect(screen.getByLabelText(/username/i)).toHaveAttribute('type', 'password');
  });

  it('accepts user input', async () => {
    render(<Input {...defaultProps} />);
    const input = screen.getByLabelText(/username/i);
    await userEvent.type(input, 'johndoe');
    expect(input).toHaveValue('johndoe');
  });
});
