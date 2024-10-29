import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from '@/store/index';
import { addNotification } from '@/store/notification/notificationSlice';
import { useUpdateProfileMutation } from '@/store/profile/profileApi';
import { EditProfileFormData, UserProfile } from '@/types/user';

import { EditProfileCover } from '../edit-profile-cover';
import { EditProfileImage } from '../edit-profile-image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

import { EditProfilceImageWrapper, FormContainer, FormControls } from './edit-profile-form.styled';
import { editProfileValidationSchema } from './edit-profile-scheme';

type EditProfileFormProps = {
  uid: string;
  initialValues: UserProfile;
  onSuccess?: () => void;
};

export const EditProfileForm: React.FC<EditProfileFormProps> = ({ uid, initialValues, onSuccess }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormData>({
    defaultValues: initialValues,
    resolver: yupResolver(editProfileValidationSchema),
  });

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [selectedProfileImage, setSelectedProfileImage] = useState<File>();

  const onSubmit: SubmitHandler<EditProfileFormData> = async (data) => {
    try {
      await updateProfile({
        uid,
        profileData: {
          name: data.name,
          bio: data.bio,
          telegramLink: data.telegramLink,
        },
        newPassword: data.password,
        newAvatarFile: selectedProfileImage,
      }).unwrap();

      onSuccess?.();
      dispatch(addNotification({ type: 'success', message: 'Profile updated successfully' }));
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: 'Failed to update profile' }));
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <EditProfileCover />

      <FormControls>
        <EditProfilceImageWrapper>
          <EditProfileImage onFileSelect={setSelectedProfileImage} profileUrl={initialValues.profileImage} />
        </EditProfilceImageWrapper>

        <Input
          type="text"
          placeholder="Name"
          fullWidth={true}
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          type="text"
          placeholder="Description"
          fullWidth={true}
          {...register('bio')}
          error={errors.bio?.message}
        />
        <Input
          type="text"
          placeholder="Telegram link"
          fullWidth={true}
          {...register('telegramLink')}
          error={errors.telegramLink?.message}
        />

        <Input
          type="password"
          placeholder="Password"
          fullWidth={true}
          {...register('password')}
          error={errors.password?.message}
        />
        <Input
          type="password"
          placeholder="Confirm password"
          fullWidth={true}
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />

        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Save'}
        </Button>
      </FormControls>
    </FormContainer>
  );
};
