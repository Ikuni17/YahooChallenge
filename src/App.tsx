import React from 'react';
import {MantineProvider} from '@mantine/core';
import {QueryClient, QueryClientProvider} from 'react-query';
import {defaultTheme} from './styles/theme';
import {Router} from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={defaultTheme}>
        <Router />
      </MantineProvider>
    </QueryClientProvider>
  );
};
