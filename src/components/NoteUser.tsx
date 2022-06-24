import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { GET_ME } from '../gql/query';
import { INote } from '../types';
import DeleteNote from './DeleteNote';
import FavoriteNote from './FavoriteNote';

const NoteUser: FC<{ note: INote }> = (props) => {
  const { loading, error, data } = useQuery(GET_ME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <React.Fragment>
      <FavoriteNote me={data.me} noteId={props.note.id} favoriteCount={props.note.favoriteCount} />
      <br />
      {data.me.id === props.note.author.id && (
        <React.Fragment>
          <Link to={`/edit/${props.note.id}`}>Edit</Link>
          <br />
          <DeleteNote noteId={props.note.id} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default NoteUser;
