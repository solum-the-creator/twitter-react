import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from '@/components/ui/link';
import { Logo } from '@/components/ui/logo';
import { paths } from '@/constants/paths';
import { useLoginMutation } from '@/store/auth/authApi';
import { LoginFormData } from '@/types/user';

import {
  Container,
  ControlGroup,
  FormTitle,
  LoginForm,
  LogoWrapper,
  Section,
  SignUpLintWrapper,
} from './login.styled';
import { loginValidationScheme } from './login-scheme';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(loginValidationScheme) });

  const [loginUser, { isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
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
              {...register('email')}
              error={errors.email?.message}
            />
            <Input
              type="password"
              placeholder="Password"
              fullWidth={true}
              {...register('password')}
              error={errors.password?.message}
            />
            <Button type="submit" variant="primary" fullWidth={true} size="large" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
          </ControlGroup>
          <SignUpLintWrapper>
            <Link to={paths.signUp}>Sign up to Twitter</Link>
          </SignUpLintWrapper>
        </LoginForm>
      </Section>
    </Container>
  );
};
