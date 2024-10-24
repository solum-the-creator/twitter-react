import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/global';
import { theme } from '@/styles/theme';

import { ToastList } from './components/toast/toast-list';
import App from './App';
import { store } from './store';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <App />
        <ToastList />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
