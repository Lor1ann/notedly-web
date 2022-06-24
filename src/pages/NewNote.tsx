import React from 'react';
import { useMutation } from '@apollo/client';

import { useNavigate } from 'react-router-dom';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';
import NoteForm from '../components/NoteForm';
import { NEW_NOTE } from '../gql/mutation';

const NewNote = () => {
  const nav = useNavigate();

  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],

    onCompleted: (data) => {
      nav(`../note/${data.newNote.id}`);
    },
  });

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error saving the note</p>}
      <NoteForm action={data} />
    </>
  );
};

export default NewNote;
