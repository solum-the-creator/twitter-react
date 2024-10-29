import * as yup from 'yup';

import { validationRules } from '@/constants/validation-rules';
import { EditProfileFormData } from '@/types/user';

export const editProfileValidationSchema: yup.ObjectSchema<EditProfileFormData> = yup.object().shape({
  name: validationRules.name,
  bio: validationRules.bio,
  telegramLink: validationRules.telegramLink,
  password: yup
    .string()
    .nullable()
    .test('is-valid-password', 'Password must be at least 6 characters', (value) => {
      return !value || value.length >= 6;
    }),
  confirmPassword: yup
    .string()
    .nullable()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
