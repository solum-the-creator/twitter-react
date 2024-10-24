import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { paths } from '@/constants/paths';
import { useLogoutMutation } from '@/store/auth/authApi';

export const HomePage: React.FC = () => {
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <h2>Current User Data</h2>

      <Button onClick={handleLogout}>Logout</Button>
      <Link to={paths.login}>Go login</Link>
    </div>
  );
};
