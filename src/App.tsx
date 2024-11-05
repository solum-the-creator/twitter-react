import { ThemeProvider } from 'styled-components';

import { ToastList } from './components/toast/toast-list';
import { selectTheme } from './store/theme/themeSelectors';
import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import { Router } from './router';
import { useAppSelector } from './store';

const App: React.FC = () => {
  const themeMode = useAppSelector(selectTheme);
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
      <ToastList />
    </ThemeProvider>
  );
};

export default App;
