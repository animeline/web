import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { colors } from '@config/colors';

import { client } from '@graphql/client';

import { GlobalStyles } from '@styles/global';

import { Routes } from './routes';

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={colors}>
      <GlobalStyles />

      <Routes />
    </ThemeProvider>
  </ApolloProvider>
);
