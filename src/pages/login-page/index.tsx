import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from '@/components/ui/link';
import { Logo } from '@/components/ui/logo';
import { paths } from '@/constants/paths';
import { useLoginMutation } from '@/store/auth/authApi';

import {
  Container,
  ControlGroup,
  FormTitle,
  LoginForm,
  LogoWrapper,
  Section,
  SignUpLintWrapper,
} from './login.styled';

type FormData = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loginUser, { isLoading, isError, isSuccess, error }] = useLoginMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await loginUser(data).unwrap();
    } catch (err) {
      alert('Login failed.');
    }
  };

  return (
    <Container>
      <Section>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Log in to Twitter</FormTitle>
          <ControlGroup>
            <Input
              type="email"
              placeholder="Phone number, email address"
              fullWidth={true}
              required={true}
              {...register('email', { required: 'Email is required' })}
              error={errors.email?.message}
            />
            <Input
              type="password"
              placeholder="Password"
              fullWidth={true}
              required={true}
              {...register('password', { required: 'Password is required' })}
              error={errors.password?.message}
            />
            <Button type="submit" variant="primary" fullWidth={true} size="large" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
          </ControlGroup>
          <SignUpLintWrapper>
            <Link to={paths.signUp}>Sign up to Twitter</Link>
          </SignUpLintWrapper>
          {isError && <p style={{ color: 'red' }}>Login failed: {error?.toString()}</p>}
          {isSuccess && <p style={{ color: 'green' }}>User logged in successfully!</p>}
        </LoginForm>
      </Section>
    </Container>
  );
};
