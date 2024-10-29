import * as yup from 'yup';

import { validationRules } from '@/constants/validation-rules';
import { EditProfileFormData } from '@/types/user';

export const editProfileValidationSchema: yup.ObjectSchema<EditProfileFormData> = yup.object().shape({
  name: validationRules.name,
  bio: validationRules.bio,
  telegramLink: validationRules.telegramLink,
  password: validationRules.password,
  confirmPassword: validationRules.confirmPassword,
});
