import React, { useEffect, useState } from 'react';
// import { ButtonsWrapper, Container, Wrapper } from '../ParamForm/styled';
import { Input } from '../../ui-kit/Input';
import { TextArea } from '../../ui-kit/TextArea';
import { Button } from '../../ui-kit/Button';
// import { ReductionTable } from '../ReductionTable';
import { ButtonsWrapper, Container, Wrapper } from './styled';
import { Select } from '../../ui-kit/Select';
import { IGroup } from '../../data/measurement/groups/types';

// eslint-disable-next-line no-unused-vars
type onSubmitFunc = (name: string, description: string) => void;
// eslint-disable-next-line no-unused-vars
type onDeleteFunc = (uuid: string) => void;

interface IProps {
  handleSubmit: onSubmitFunc;
  handleDelete: onDeleteFunc;
  group: IGroup;
  // reductions?: boolean;
  params?: boolean;
}

export const EditForm: React.FC<IProps> = ({
  handleSubmit,
  handleDelete,
  group,
  // reductions,
  params,
}) => {
  const [name, setName] = useState('');
  const [reduction, setReduction] = useState('');
  const [description, setDescription] = useState('');

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
        {params && (
          <Wrapper>
            <Input
              label="Сокращение"
              placeholder="Введите текст"
              width="250px"
              value={reduction}
              onChange={e => setReduction(e.target.value)}
            />
          </Wrapper>
        )}
        <Wrapper>
          <TextArea value={description} onChange={e => setDescription(e.target.value)} />
        </Wrapper>
        {/* <Wrapper>{reductions && <ReductionTable />}</Wrapper> */}
        {params && (
          <>
            <Wrapper>
              <Select placeholder="Тип поля" />
            </Wrapper>
            <Wrapper>Привязанная единица измерения:</Wrapper>
            <Wrapper>
              <Select placeholder="Единица измерения" />
            </Wrapper>
          </>
        )}
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
