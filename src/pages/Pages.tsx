import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Favorites from './Favorites';
import Home from './Home';
import MyNotes from './MyNotes';
import NotePage from './NotePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NewNote from './NewNote';
import EditNote from './Edit';

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
          <PrivateRoute
            component={
              <Layout>
                <MyNotes />
              </Layout>
            }
          />
        }
      />
      <Route
        path="/favorites"
        element={
          <PrivateRoute
            component={
              <Layout>
                <Favorites />
              </Layout>
            }
          />
        }
      />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoute
            component={
              <Layout>
                <EditNote />
              </Layout>
            }
          />
        }
      />
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
      <Route
        path="/new"
        element={
          <PrivateRoute
            component={
              <Layout>
                <NewNote />
              </Layout>
            }
          />
        }
      />
    </Routes>
  );
};

const PrivateRoute: React.FC<any> = ({ component: Component }) => {
  const auth = !!localStorage.getItem('token');

  return auth ? Component : <Navigate to="/signin" />;
};

export default Pages;
