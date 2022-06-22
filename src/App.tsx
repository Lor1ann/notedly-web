import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Pages from './pages/Pages';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  GraphQLRequest,
  gql,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uri = process.env.REACT_APP_API_URI;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });
const authLink = setContext((_: GraphQLRequest, { headers }: any) => {
  const data = {
    isLoggedIn: !!localStorage.getItem('token'),
  };

  cache.writeQuery({
    query: gql`
      {
        isLoggedIn @client
      }
    `,
    data,
  });

  client.onResetStore(async () =>
    cache.writeQuery({
      query: gql`
        {
          isLoggedIn @client
        }
      `,
      data,
    }),
  );

  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  resolvers: {},
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
