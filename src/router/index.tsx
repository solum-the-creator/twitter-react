import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/layout/main-layout';
import { AuthRoute } from '@/components/routes/auth-route';
import { UnauthRoute } from '@/components/routes/unauth-route';
import { paths } from '@/constants/paths';
import { useAuthListener } from '@/hooks/use-auth-listener';
import { HomePage } from '@/pages/home-page';
import { LoginPage } from '@/pages/login-page';
import { ProfilePage } from '@/pages/profile-page';
import { RootPage } from '@/pages/root-page';
import { SignUpPage } from '@/pages/sign-up-page';

export const Router: React.FC = () => {
  useAuthListener();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route element={<MainLayout />}>
            <Route path={paths.profile} element={<ProfilePage />} />
            <Route path={paths.home} element={<HomePage />} />
            <Route path="*" element={<Navigate to={paths.home} replace={true} />} />
          </Route>
        </Route>
        <Route element={<UnauthRoute />}>
          <Route path={paths.signUp} element={<SignUpPage />} />
          <Route path={paths.login} element={<LoginPage />} />
          <Route path={paths.root} element={<RootPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
