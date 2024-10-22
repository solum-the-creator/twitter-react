import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/home-page';

import { LoginPage } from './pages/login-page';
import { SignUpPage } from './pages/sign-up-page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
