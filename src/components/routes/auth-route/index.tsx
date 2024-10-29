import { Navigate, Outlet } from 'react-router-dom';

import { paths } from '@/constants/paths';
import { selectAuthLoading, selectUserId } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/index';

export const AuthRoute = () => {
  const user = useAppSelector(selectUserId);
  const isLoading = useAppSelector(selectAuthLoading);

  if (isLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to={paths.root} />;
};
