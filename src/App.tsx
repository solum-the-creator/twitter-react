import { LoginForm } from '@/components/login-form';
import { LogoutButton } from '@/components/logout-button';
import { RegisterForm } from '@/components/register-form';

const App: React.FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />

      <h1>Login</h1>
      <LoginForm />

      <h1>Logout</h1>
      <LogoutButton />
    </div>
  );
};

export default App;
