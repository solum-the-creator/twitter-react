import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthRoute } from '@/components/routes/auth-route';
import { UnauthRoute } from '@/components/routes/unauth-route';
import { useAuthListener } from '@/hooks/use-auth-listener';
import { HomePage } from '@/pages/home-page';
import { LoginPage } from '@/pages/login-page';
import { RootPage } from '@/pages/root-page';
import { SignUpPage } from '@/pages/sign-up-page';

import { paths } from './constants/paths';

const App: React.FC = () => {
  useAuthListener();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path={paths.home} element={<HomePage />} />
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

export default App;
