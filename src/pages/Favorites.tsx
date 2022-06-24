import React from 'react';
import { GET_MY_FAVORITES } from '../gql/query';
import { useQuery } from '@apollo/client';
import NoteFeed from '../components/NoteFeed';

const Favorites = () => {
  const { loading, error, data } = useQuery(GET_MY_FAVORITES);

  if (loading) return <>'Loading...'</>;

  console.log(data);

  if (error) return <>`Error! ${error.message}`</>;

  if (data.me.favorites.length !== 0) {
    return <NoteFeed notes={data.me.favorites} />;
  } else {
    return <p>No favorites yet</p>;
  }
};

export default Favorites;
