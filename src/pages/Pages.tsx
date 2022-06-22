import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Favorites from './Favorites';
import Home from './Home';
import MyNotes from './MyNotes';

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
    </Routes>
  );
};

export default Pages;
