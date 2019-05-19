import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import { TOKEN_KEY } from '../client';
import LoginForm from '../components/LoginForm';

const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email)
  }
`;

function Login() {
  return (
    <ApolloConsumer>
      {client => (
        <Mutation
          mutation={LOGIN_USER}
          onCompleted={({ login }) => {
            localStorage.setItem(TOKEN_KEY, login);
            client.writeData({ data: { isLoggedIn: true } });
          }}
        >
          {(handleLogin, { loading, error }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>An error occurred</div>;

            return <LoginForm handleLogin={handleLogin} />;
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  );
}

export default Login;
