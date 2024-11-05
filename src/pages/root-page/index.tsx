import { useNavigate } from 'react-router-dom';

import backgroundImage from '@/assets/images/back-twitter.jpg';
import GoogleIcon from '@/assets/images/icons/google-icon.svg?react';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { Logo } from '@/components/ui/logo';
import { footerLinks, privacyLinks } from '@/constants/links';
import { paths } from '@/constants/paths';
import { useLoginWithGoogleMutation } from '@/store/auth/authApi';
import { useAppDispatch } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';

import {
  AgreementText,
  BackgroundImage,
  ButtonsContainer,
  Column,
  Container,
  ContentContainer,
  FooterLinks,
  ImageContainer,
  LinksList,
  ListItem,
  LoginText,
  LogoContainer,
  SignUpContainer,
  Subtitle,
  Title,
} from './root.styled';

export const RootPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loginWithGoogle] = useLoginWithGoogleMutation();

  const navigate = useNavigate();
  const onSignUpWithEmailClick = () => {
    navigate(paths.signUp);
  };

  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle().unwrap();
    } catch (error) {
      const errorMessage = (error as { message: string }).message || 'An unexpected error occurred';
      dispatch(addNotification({ type: 'error', message: errorMessage }));
    }
  };

  return (
    <Container>
      <ContentContainer>
        <ImageContainer>
          <BackgroundImage src={backgroundImage} />
        </ImageContainer>
        <Column>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Title>Happening now</Title>
          <SignUpContainer>
            <Subtitle>Join Twitter today</Subtitle>

            <ButtonsContainer>
              <Button
                onClick={handleLoginWithGoogle}
                variant="outline"
                size="large"
                fullWidth={true}
                icon={<GoogleIcon />}>
                Sign up with Google
              </Button>
              <Button variant="outline" size="large" onClick={onSignUpWithEmailClick} fullWidth={true}>
                Sign up with email
              </Button>
            </ButtonsContainer>
            <AgreementText>
              By singing up you agree to the <Link to={privacyLinks.terms}>Terms of Service</Link> and{' '}
              <Link to={privacyLinks.privacy}>Privacy Policy</Link>, including{' '}
              <Link to={privacyLinks.cookies}>Cookie Use</Link>.
            </AgreementText>
            <LoginText>
              Already have an account? <Link to={paths.login}>Log in</Link>
            </LoginText>
          </SignUpContainer>
        </Column>
      </ContentContainer>
      <FooterLinks>
        <LinksList>
          {footerLinks.map(({ label, href }) => (
            <ListItem key={label}>
              <Link variant="secondary" to={href}>
                {label}
              </Link>
            </ListItem>
          ))}
        </LinksList>
      </FooterLinks>
    </Container>
  );
};
