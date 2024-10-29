export type UserProfile = {
  name: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  bio?: string;
  telegramLink?: string;
  profileImage?: string;
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

export type UpdateProfileRequest = {
  uid: string;
  profileData: Partial<UserProfile>;
  newPassword?: string | null;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  uid: string;
  email: string;
};

export type EditProfileFormData = {
  name: string;
  bio?: string;
  telegramLink?: string;
  password?: string | null;
  confirmPassword?: string | null;
};
