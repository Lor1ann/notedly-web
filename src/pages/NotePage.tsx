import React from 'react';
import { useParams } from 'react-router-dom';
import Note from '../components/Note';
import { useQuery } from '@apollo/client';
import { GET_NOTE } from '../gql/query';

const NotePage = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! Note not found</p>;

  return <Note note={data.note} />;
};

export default NotePage;
