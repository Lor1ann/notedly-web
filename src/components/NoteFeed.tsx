import React from 'react';
import styled from 'styled-components';
import { INote } from '../types';
import Note from './Note';

const NoteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

const NoteFeed: React.FC<{ notes: [INote] }> = ({ notes }) => {
  return (
    <div>
      {notes.map((note: INote) => (
        <NoteWrapper key={note.id}>
          <Note note={note} />
        </NoteWrapper>
      ))}
    </div>
  );
};

export default NoteFeed;
