import { SubmitHandler, useForm } from 'react-hook-form';

import { useRegisterMutation } from '@/store/auth/authApi';

type FormData = {
  email: string;
  password: string;
};

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [registerUser, { isLoading, isError, isSuccess, error }] = useRegisterMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await registerUser(data).unwrap();
      alert('Registration successful!');
    } catch (err) {
      alert('Registration failed.');
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
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>

      {isError && <p style={{ color: 'red' }}>Registration failed: {error?.toString()}</p>}
      {isSuccess && <p style={{ color: 'green' }}>User registered successfully!</p>}
    </form>
  );
};
