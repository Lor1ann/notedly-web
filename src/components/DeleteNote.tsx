import React, { FC } from 'react';
import { useMutation } from '@apollo/client';
import ButtonAsLink from './ButtonAsLink';
import { DELETE_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';
import { useNavigate } from 'react-router-dom';

const DeleteNote: FC<{ noteId: string }> = (props) => {
  const nav = useNavigate();

  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId,
    },
    refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
    onCompleted: (data) => {
      nav('/mynotes');
    },
  });

  const onClick = () => {
    deleteNote();
  };

  return <ButtonAsLink onClick={onClick}>Delete Note</ButtonAsLink>;
};

export default DeleteNote;
