import * as yup from 'yup';

import { validationRules } from '@/constants/validation-rules';
import { SignUpFormData } from '@/types/user';

export const signUpValidationScheme: yup.ObjectSchema<SignUpFormData> = yup.object().shape({
  name: validationRules.name,
  phone: validationRules.phone,
  email: validationRules.email,
  password: validationRules.password,
  day: validationRules.day,
  month: validationRules.month,
  year: validationRules.year,
});
