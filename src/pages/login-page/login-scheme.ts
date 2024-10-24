import * as yup from 'yup';

import { validationRules } from '@/constants/validation-rules';
import { LoginFormData } from '@/types/user';

export const loginValidationScheme: yup.ObjectSchema<LoginFormData> = yup.object().shape({
  email: validationRules.email,
  password: validationRules.password,
});
