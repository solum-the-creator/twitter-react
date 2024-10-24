export type UserProfile = {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  description?: string;
  telegramLink?: string;
};

export type SignUpFormData = Pick<UserProfile, 'name' | 'email' | 'phone'> & {
  password: string;
  month: number;
  year: number;
  day: number;
};

export type SignUpWithEmailData = {
  email: string;
  password: string;
  profile: Omit<UserProfile, 'email'>;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  uid: string;
  email: string;
};
