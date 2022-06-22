import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Favorites from './Favorites';
import Home from './Home';
import MyNotes from './MyNotes';
import NotePage from './NotePage';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Pages = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }></Route>
      <Route
        path="/mynotes"
        element={
          <Layout>
            <MyNotes />
          </Layout>
        }></Route>
      <Route
        path="/favorites"
        element={
          <Layout>
            <Favorites />
          </Layout>
        }></Route>
      <Route
        path="/note/:id"
        element={
          <Layout>
            <NotePage />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      <Route
        path="/signin"
        element={
          <Layout>
            <SignIn />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Pages;
