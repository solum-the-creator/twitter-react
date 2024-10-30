import { useSelector } from 'react-redux';

import { selectAuthenticatedUser } from '@/store/auth/authSelectors';
import { useGetProfileQuery } from '@/store/profile/profileApi';

export const useGetAuthProfile = () => {
  const { uid } = useSelector(selectAuthenticatedUser);
  const { data: userProfile, isLoading } = useGetProfileQuery(uid);

  return {
    uid,
    userProfile,
    isLoading,
  };
};
