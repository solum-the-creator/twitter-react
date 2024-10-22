import { useNavigate } from 'react-router-dom';

import backgroundImage from '@/assets/images/back-twitter.jpg';
import GoogleIcon from '@/assets/images/icons/google-icon.svg?react';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { Logo } from '@/components/ui/logo';
import { footerLinks } from '@/constants/links';

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
} from './home.styled';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const onSignUpWithEmailClick = () => {
    navigate('/sign-up');
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
              <Button variant="outline" size="large" fullWidth={true} icon={<GoogleIcon />}>
                Sign up with Google
              </Button>
              <Button variant="outline" size="large" onClick={onSignUpWithEmailClick} fullWidth={true}>
                Sign up with email
              </Button>
            </ButtonsContainer>
            <AgreementText>
              By singing up you agree to the <Link to="/terms-of-service">Terms of Service</Link> and{' '}
              <Link to="/privacy-policy">Privacy Policy</Link>, including{' '}
              <Link to="/cookie-policy">Cookie Use</Link>.
            </AgreementText>
            <LoginText>
              Already have an account? <Link to="/login">Log in</Link>
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
