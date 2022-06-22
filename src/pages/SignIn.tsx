import { useMutation, useApolloClient, gql } from '@apollo/client';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import UserForm from '../components/UserForm';

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SignIn = () => {
  const client = useApolloClient();

  const nav = useNavigate();

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signUp);
      client.writeQuery({
        query: gql`
          {
            isLoggedIn @client
          }
        `,
        data: { isLoggedIn: true },
      });
      nav('/');
    },
  });

  return (
    <>
      <UserForm action={signIn} formType="signIn" />
      {loading && <p>Loading...</p>}
      {error && <p>Error signing in!</p>}
    </>
  );
};

export default SignIn;
