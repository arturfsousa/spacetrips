import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export const TOKEN_KEY = 'user-token';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:4000/',
  headers: {
    authorization: localStorage.getItem(TOKEN_KEY)
  }
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem(TOKEN_KEY),
    cartItems: []
  }
});

const client = new ApolloClient({
  cache,
  link
});

export default client;
