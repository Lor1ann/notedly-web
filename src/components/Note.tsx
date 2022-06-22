import React from 'react';
import { INote } from '../types';
import ReactMarkdown from 'react-markdown';
import { parseISO } from 'date-fns';
import styled from 'styled-components';

const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const MetaInfo = styled.div`
  padding-right: 1em;
`;

const UserActions = styled.div`
  margin-left: auto;
`;

const Note: React.FC<{ note: INote }> = ({ note }) => {
  return (
    <StyledNote key={note.id}>
      <MetaData>
        <MetaInfo>
          <img src={note.author.avatar} alt={`${note.author.username} avatar`} height="50px" />
        </MetaInfo>
        <MetaInfo>
          <em>by</em> {note.author.username} <br />{' '}
          <div>{parseISO(note.createdAt).toLocaleDateString('ru-RU').toString()}</div>
        </MetaInfo>
        <UserActions>
          <em>Favorites:</em> {note.favoriteCount}
        </UserActions>
      </MetaData>
      <ReactMarkdown children={note.content} />
    </StyledNote>
  );
};

export default Note;
