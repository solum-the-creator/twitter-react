import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/ui/logo';
import { Select } from '@/components/ui/select';
import { useRegisterMutation } from '@/store/auth/authApi';
import { useAppDispatch } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';
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
import { signUpValidationScheme } from './sign-up-scheme';

export const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpFormData>({ resolver: yupResolver(signUpValidationScheme) });
  const [registerUser, { isLoading }] = useRegisterMutation();

  const dispatch = useAppDispatch();

  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = Number(e.target.value);
    setMonth(selectedMonth);
    setValue('month', selectedMonth);
    register('month').onChange(e);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = Number(e.target.value);
    setYear(selectedYear);
    setValue('year', selectedYear);
    register('year').onChange(e);
  };

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
    } catch (err) {
      const errorMessage = (err as { message: string }).message || 'An unexpected error occurred';
      dispatch(addNotification({ type: 'error', message: errorMessage }));
    }
  };

  return (
    <Container>
      <Section>
        <Logo />
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Create an account</FormTitle>
          <InputGroup>
            <Input
              type="text"
              required={true}
              placeholder="Name"
              fullWidth={true}
              {...register('name')}
              error={errors.name?.message}
            />
            <Input
              type="phone"
              required={true}
              placeholder="Phone number"
              fullWidth={true}
              {...register('phone')}
              error={errors.phone?.message}
            />
            <Input
              type="email"
              required={true}
              placeholder="Email"
              fullWidth={true}
              {...register('email')}
              error={errors.email?.message}
            />

            <Input
              type="password"
              required={true}
              placeholder="Password"
              fullWidth={true}
              {...register('password')}
              error={errors.password?.message}
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
                placeholder="Month"
                options={getMonthOptions()}
                {...register('month')}
                onChange={handleMonthChange}
                error={errors.month?.message}
              />

              <Select
                fullWidth={true}
                placeholder="Day"
                options={getDayOptions(month || 0, year || 0)}
                {...register('day')}
                error={errors.day?.message}
              />

              <Select
                fullWidth={true}
                placeholder="Year"
                options={getYearOptions(1900, new Date().getFullYear()).reverse()}
                {...register('year')}
                onChange={handleYearChange}
                error={errors.year?.message}
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
