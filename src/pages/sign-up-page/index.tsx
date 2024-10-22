import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/ui/logo';
import { Select } from '@/components/ui/select';
import { useRegisterMutation } from '@/store/auth/authApi';

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

type FormData = {
  name: string;
  email: string;
  password: string;
};

export const SignUpPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [registerUser, { isLoading, isError, isSuccess, error }] = useRegisterMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await registerUser({ email: data.email, password: data.password }).unwrap();
      alert('Registration successful!');
    } catch (err) {
      alert('Registration failed.');
    }
  };

  return (
    <Container>
      <Section>
        <Logo />
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Create an account</FormTitle>
          <InputGroup>
            <Input type="text" required={true} placeholder="Name" fullWidth={true} {...register('name')} />
            <Input type="email" required={true} placeholder="Email" fullWidth={true} {...register('email')} />
            <Input
              type="password"
              required={true}
              placeholder="Password"
              fullWidth={true}
              {...register('password')}
            />
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
            {isLoading ? 'Loading...' : 'Sign Up'}
          </Button>
          {isError && <p style={{ color: 'red' }}>Registration failed: {error?.toString()}</p>}
          {isSuccess && <p style={{ color: 'green' }}>User registered successfully!</p>}
        </SignUpForm>
      </Section>
    </Container>
  );
};
