import React from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

const SignUp = () => {
  const client = useApolloClient();

  const nav = useNavigate();

  const [signUp] = useMutation(SIGNUP_USER, {
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
      window.location.reload();
    },
  });

  return (
    <>
      <UserForm action={signUp} formType="signup" />
    </>
  );
};
export default SignUp;
