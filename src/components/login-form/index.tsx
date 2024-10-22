import { SubmitHandler, useForm } from 'react-hook-form';

import { useLoginMutation } from '@/store/auth/authApi';

type FormData = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loginUser, { isLoading, isError, isSuccess, error }] = useLoginMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await loginUser(data).unwrap();
      alert('Login successful!');
    } catch (err) {
      alert('Login failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input type="email" {...register('email', { required: 'Email is required' })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: 'Password is required' })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Log In'}
      </button>

      {isError && <p style={{ color: 'red' }}>Login failed: {error?.toString()}</p>}
      {isSuccess && <p style={{ color: 'green' }}>User logged in successfully!</p>}
    </form>
  );
};
