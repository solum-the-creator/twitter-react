import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/ui/logo';
import { Select } from '@/components/ui/select';

import {
  Container,
  DateOfBirthGroup,
  DateOfBirthText,
  DateOfBirthTitle,
  FormTitle,
  InputGroup,
  Section,
  SelectGroup,
  SignUpForm,
} from './sign-up.styled';

export const SignUpPage: React.FC = () => {
  return (
    <Container>
      <Section>
        <Logo />
        <SignUpForm>
          <FormTitle>Create an account</FormTitle>
          <InputGroup>
            <Input type="text" required={true} placeholder="Name" fullWidth={true} />
            <Input type="email" required={true} placeholder="Email" fullWidth={true} />
            <Input type="password" required={true} placeholder="Password" fullWidth={true} />
          </InputGroup>
          <DateOfBirthGroup>
            <DateOfBirthTitle>Date of Birth</DateOfBirthTitle>
            <DateOfBirthText>
              Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante
              phasellus metus augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit
              viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
            </DateOfBirthText>
            <SelectGroup>
              <Select
                fullWidth={true}
                options={[
                  { value: 0, label: 'January' },
                  { value: 1, label: 'February' },
                  { value: 2, label: 'March' },
                ]}
              />
              <Select
                fullWidth={true}
                options={[
                  { value: 0, label: '1' },
                  { value: 1, label: '2' },
                  { value: 2, label: '3' },
                  { value: 3, label: '4' },
                  { value: 4, label: '5' },
                  { value: 5, label: '6' },
                  { value: 6, label: '7' },
                ]}
              />
              <Select
                fullWidth={true}
                options={[
                  { value: 0, label: '2000' },
                  { value: 1, label: '2001' },
                  { value: 2, label: '2002' },
                  { value: 3, label: '2003' },
                  { value: 4, label: '2004' },
                  { value: 5, label: '2005' },
                ]}
              />
            </SelectGroup>
          </DateOfBirthGroup>
          <Button type="submit" variant="primary" size="large" fullWidth={true}>
            Sign Up
          </Button>
        </SignUpForm>
      </Section>
    </Container>
  );
};
