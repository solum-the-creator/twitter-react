import { useLogoutMutation } from '@/store/auth/authApi';

export const LogoutButton: React.FC = () => {
  const [, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      //   await logout().unwrap();
      alert('Logged out successfully!');
    } catch (err) {
      alert('Logout failed.');
    }
  };

  return (
    <button type="button" onClick={handleLogout} disabled={isLoading}>
      {isLoading ? 'Logging out...' : 'Log Out'}
    </button>
  );
};
