import { PropsWithChildren, ReactElement } from 'react';
import { afterEach } from 'vitest';
import { render as rtlRender, cleanup, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/styles/theme';

import GlobalStyles from '../src/styles/global';

const ThemeWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const render = (ui: ReactElement, options?: RenderOptions) =>
  rtlRender(ui, { wrapper: ThemeWrapper, ...options });

afterEach(() => {
  cleanup();
});

export * from '@testing-library/react';
export { render };
