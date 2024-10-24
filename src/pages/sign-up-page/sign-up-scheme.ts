import * as yup from 'yup';

import { SignUpFormData } from '@/types/user';

export const signUpValidationScheme: yup.ObjectSchema<SignUpFormData> = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(20, 'Name must be less than 20 characters'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(
      /^(375|80)(25|29|33|44|17)\d{7}$/,
      'Phone number must be a valid Belarusian number starting with 375 or 80',
    ),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email must be a valid format'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  day: yup.number().typeError('Day is required').required('Day is required'),
  month: yup.number().typeError('Month is required').required('Month is required'),
  year: yup.number().typeError('Year is required').required('Year is required'),
});
