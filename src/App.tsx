import React from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";

import ApolloClient from './services/apollo';
import Routes from "./routes";
import colors from "./styles/colors";
import GlobalStyles from "./styles/global";


function App() {
  return (    
    <ApolloProvider client={ApolloClient}>      
      <ThemeProvider theme={colors}>
        <GlobalStyles />

        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
