import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Pages from './pages/Pages';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const uri = process.env.REACT_APP_API_URI;

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});

console.log(uri);

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
}

export default App;
