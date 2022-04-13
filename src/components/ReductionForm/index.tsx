import React, { useState } from 'react';
import { ButtonsWrapper, Container, Wrapper } from '../ParamForm/styled';
import { Input } from '../../ui-kit/Input';
import { TextArea } from '../../ui-kit/TextArea';
import { Button } from '../../ui-kit/Button';
import { ReductionTable } from '../ReductionTable';

// eslint-disable-next-line no-unused-vars
type onSubmitFunc = (name: string, description: string, marks: string) => void;

interface IProps {
  handleSubmit: onSubmitFunc;
}

export const ReductionForm: React.FC<IProps> = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <Container
        onSubmit={e => {
          handleSubmit(name, description, '');
          e.preventDefault();
        }}
      >
        <Wrapper>
          <Input
            label="Название"
            placeholder="Введите текст"
            width="550px"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Wrapper>
        <Wrapper>
          <TextArea value={description} onChange={e => setDescription(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <ReductionTable />
        </Wrapper>
        <ButtonsWrapper>
          <Button width="120px" isForm>
            Сохранить
          </Button>
          <Button width="120px" variant="danger">
            Удалить
          </Button>
        </ButtonsWrapper>
      </Container>
    </>
  );
};
