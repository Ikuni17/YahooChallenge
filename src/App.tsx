import React from 'react';
import {MantineProvider} from '@mantine/core';
import {defaultTheme} from './styles/theme';
import {Router} from './routes';

export const App: React.FC = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={defaultTheme}>
      <Router />
    </MantineProvider>
  );
};
