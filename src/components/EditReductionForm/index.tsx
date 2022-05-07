import React, { useEffect, useState } from 'react';
import { Input } from '../../ui-kit/Input';
import { TextArea } from '../../ui-kit/TextArea';
import { Button } from '../../ui-kit/Button';
import { ReductionTable } from '../ReductionTable';
import { ButtonsWrapper, Container, Wrapper } from './styled';
import { IGroup } from '../../data/measurement/groups/types';

// eslint-disable-next-line no-unused-vars
type onSubmitFunc = (name: string, description: string) => void;
// eslint-disable-next-line no-unused-vars
type onDeleteFunc = (uuid: string) => void;

interface IProps {
  handleSubmit: onSubmitFunc;
  handleDelete: onDeleteFunc;
  group: IGroup;
}

export const EditReductionForm: React.FC<IProps> = ({ handleSubmit, handleDelete, group }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [leftRangeValue, setLeftRangeValue] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [rightRangeValue, setRightRangeValue] = useState('');

  useEffect(() => {
    setName(group.name);
    setDescription(group.description);
  }, [group]);

  return (
    <>
      <Container
        onSubmit={e => {
          handleSubmit(name, description);
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
        <ReductionTable group={group} />
        <ButtonsWrapper>
          <Button width="120px" isForm>
            Сохранить
          </Button>
          <Button onClick={() => handleDelete(group.uuid)} width="120px" variant="danger">
            Удалить
          </Button>
        </ButtonsWrapper>
      </Container>
    </>
  );
};
