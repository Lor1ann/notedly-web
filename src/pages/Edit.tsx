import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import { GET_ME, GET_NOTE } from '../gql/query';
import { EDIT_NOTE } from '../gql/mutation';

const EditNote = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { loading, error, data } = useQuery(GET_NOTE, {
    variables: { id },
  });

  const { data: userdata } = useQuery(GET_ME);
  const [editNote] = useMutation(EDIT_NOTE, {
    variables: {
      id,
    },
    onCompleted: () => {
      nav(`/note/${id}`);
    },
  });

  if (loading) return <>Loading...</>;

  if (error) return <p>Error!</p>;
  if (userdata && data && userdata.me.id !== data.note.author.id) {
    return <p>You do not have access to edit this note</p>;
  }

  return <NoteForm action={editNote} content={data && data.note.content} />;
};
export default EditNote;
