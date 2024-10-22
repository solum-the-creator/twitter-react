import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from '@/components/ui/link';
import { Logo } from '@/components/ui/logo';

import {
  Container,
  ControlGroup,
  FormTitle,
  LoginForm,
  LogoWrapper,
  Section,
  SignUpLintWrapper,
} from './login.styled';

export const LoginPage = () => {
  return (
    <Container>
      <Section>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <LoginForm>
          <FormTitle>Log in to Twitter</FormTitle>
          <ControlGroup>
            <Input type="email" placeholder="Phone number, email address" required={true} />
            <Input type="password" placeholder="Password" required={true} />
            <Button variant="primary" fullWidth={true} size="large">
              Log in
            </Button>
          </ControlGroup>
          <SignUpLintWrapper>
            <Link to="/sign-up">Sign up to Twitter</Link>
          </SignUpLintWrapper>
        </LoginForm>
      </Section>
    </Container>
  );
};
