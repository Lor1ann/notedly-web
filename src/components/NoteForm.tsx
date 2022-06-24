import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { INewFormProps } from '../types';

const Wrapper = styled.div`
  height: 100%;
`;
const Form = styled.form`
  height: 100%;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
`;

const NoteForm: FC<INewFormProps> = (props) => {
  const [value, setValue] = React.useState({ content: props.content });

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.action({
            variables: {
              ...value,
            },
          });
        }}>
        <TextArea
          required
          name="content"
          placeholder="Note content"
          value={value.content}
          onChange={onChange}
        />
        <Button type="submit">Save</Button>
      </Form>
    </Wrapper>
  );
};

export default NoteForm;
