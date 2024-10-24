import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/ui/logo';
import { Select } from '@/components/ui/select';
import { useRegisterMutation } from '@/store/auth/authApi';
import { SignUpFormData } from '@/types/user';
import { getDayOptions, getMonthOptions, getYearOptions } from '@/utils/date-utils';

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
  const { control, register, handleSubmit } = useForm<SignUpFormData>();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    const dateOfBirth = new Date(data.year, data.month, data.day);

    try {
      await registerUser({
        email: data.email,
        password: data.password,
        profile: {
          name: data.name,
          dateOfBirth: dateOfBirth.toISOString(),
          phone: data.phone,
        },
      }).unwrap();
      alert('Registration successful!');
    } catch (err) {
      alert('Registration failed.');
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(Number(e.target.value));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(Number(e.target.value));
  };

  return (
    <Container>
      <Section>
        <Logo />
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Create an account</FormTitle>
          <InputGroup>
            <Input type="text" required={true} placeholder="Name" fullWidth={true} {...register('name')} />
            <Input
              type="phone"
              required={true}
              placeholder="Phone number"
              fullWidth={true}
              {...register('phone')}
            />
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
              <Controller
                name="month"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    fullWidth={true}
                    options={getMonthOptions()}
                    onChange={(e) => {
                      field.onChange(e);
                      handleMonthChange(e);
                    }}
                  />
                )}
              />

              <Select fullWidth={true} options={getDayOptions(month || 0, year || 0)} {...register('day')} />

              <Controller
                name="year"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    fullWidth={true}
                    options={getYearOptions(1900, new Date().getFullYear())}
                    onChange={(e) => {
                      field.onChange(e);
                      handleYearChange(e);
                    }}
                  />
                )}
              />
            </SelectGroup>
          </DateOfBirthGroup>
          <Button type="submit" variant="primary" size="large" fullWidth={true} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Sign Up'}
          </Button>
        </SignUpForm>
      </Section>
    </Container>
  );
};
