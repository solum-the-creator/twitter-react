import { Navigate, Outlet } from 'react-router-dom';

import { paths } from '@/constants/paths';
import { selectUserId } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/index';

export const AuthRoute = () => {
  const user = useAppSelector(selectUserId);

  return user ? <Outlet /> : <Navigate to={paths.root} />;
};
