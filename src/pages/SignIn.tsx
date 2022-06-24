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
  const [signIn] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signIn);
      client.writeQuery({
        query: gql`
          {
            isLoggedIn @client
          }
        `,
        data: { isLoggedIn: true },
      });
      nav('/');
      window.location.reload();
    },
  });

  return (
    <>
      <UserForm action={signIn} formType="signIn" />
    </>
  );
};

export default SignIn;
