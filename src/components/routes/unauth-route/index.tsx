import { Navigate, Outlet } from 'react-router-dom';

import { paths } from '@/constants/paths';
import { useAppSelector } from '@/store/index';

export const UnauthRoute = () => {
  const user = useAppSelector((state) => state.auth.uid);

  return !user ? <Outlet /> : <Navigate to={paths.home} />;
};
