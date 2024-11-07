import { BrowserRouter } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '@/tests/setup';

import { ProfileBio } from '.';

describe('ProfileBio', () => {
  const defaultProps = {
    name: 'John Doe',
    email: 'john@example.com',
    isOwnProfile: false,
    onEditProfile: vi.fn(),
  };

  it('renders name and email', () => {
    render(<ProfileBio {...defaultProps} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('does not show edit profile button if isOwnProfile is false', () => {
    render(<ProfileBio {...defaultProps} />);
    expect(screen.queryByText('Edit profile')).not.toBeInTheDocument();
  });

  it('shows edit profile button if isOwnProfile is true', () => {
    render(<ProfileBio {...defaultProps} isOwnProfile={true} />);
    expect(screen.getByText('Edit profile')).toBeInTheDocument();
  });

  it('calls onEditProfile when edit profile button is clicked', () => {
    render(<ProfileBio {...defaultProps} isOwnProfile={true} />);
    const editButton = screen.getByText('Edit profile');
    fireEvent.click(editButton);
    expect(defaultProps.onEditProfile).toHaveBeenCalled();
  });

  it('renders telegram link if provided', () => {
    render(
      <BrowserRouter>
        <ProfileBio {...defaultProps} telegramLink="https://t.me/johndoe" />
      </BrowserRouter>,
    );
    expect(screen.getByText('https://t.me/johndoe')).toBeInTheDocument();
  });

  it('renders bio if provided', () => {
    render(<ProfileBio {...defaultProps} bio="This is my bio" />);
    expect(screen.getByText('This is my bio')).toBeInTheDocument();
  });

  it('renders profile image if provided', () => {
    const profileImage = 'https://example.com/profile.jpg';
    render(<ProfileBio {...defaultProps} profileImage={profileImage} />);
    const imgElement = screen.getByAltText('John Doe') as HTMLImageElement;
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toBe(profileImage);
  });
});
