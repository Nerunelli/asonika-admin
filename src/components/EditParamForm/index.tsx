import React, { useEffect, useState } from 'react';
import { Input } from '../../ui-kit/Input';
import { TextArea } from '../../ui-kit/TextArea';
import { Button } from '../../ui-kit/Button';
import { IGroup } from '../../pages/Reductions';
import { ButtonsWrapper, Container, Wrapper } from './styled';
import { Select } from '../../ui-kit/Select';
import { api } from '../../api/api';
import { IParam } from '../../pages/Params';

// const names = ['name1', 'name2', 'name3', 'name1', 'name2', 'name3', 'name1', 'name2', 'name3'];

type onSubmitFunc = (
  // eslint-disable-next-line no-unused-vars
  name: string,
  // eslint-disable-next-line no-unused-vars
  description: string,
  // eslint-disable-next-line no-unused-vars
  measurement_group: IGroup,
  // eslint-disable-next-line no-unused-vars
  type: number,
) => void;
// eslint-disable-next-line no-unused-vars
type onDeleteFunc = (uuid: string) => void;

interface IProps {
  handleSubmit: onSubmitFunc;
  handleDelete: onDeleteFunc;
  group: IParam;
}

export const EditParamForm: React.FC<IProps> = ({ handleSubmit, handleDelete, group }) => {
  const [name, setName] = useState('');
  const [reductions, setReductions] = useState<IGroup[]>();
  const [description, setDescription] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [measurementGroup, setMeasurementGroup] = useState<IGroup>({
    uuid: '',
    name: '',
    description: '',
  });
  // eslint-disable-next-line no-unused-vars
  const [type] = useState(1);

  const getMeasurementGroups = async () => {
    try {
      const res = await api.get<{ data: IGroup[] }>('/measurement/group/');
      setReductions(res.data.data);
    } catch (e) {}
  };

  useEffect(() => {
    // createMeasurementGroups('3 group', '3 description').catch(console.error);
    getMeasurementGroups().catch(console.error);
  }, []);

  useEffect(() => {
    setName(group.name);
    setDescription(group.description);
    setMeasurementGroup(group.measurement_group);
    // eslint-disable-next-line no-console
    console.log(group.measurement_group);
  }, [group]);

  return (
    <>
      <Container
        onSubmit={e => {
          handleSubmit(name, description, measurementGroup, type);
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
        <Wrapper>Привязанная единица измерения:</Wrapper>
        <Wrapper>
          <Select
            // label="Сокращение"
            placeholder="Единица измерения"
            value={measurementGroup.name}
            // width="250px"
            names={reductions}
            onChange={value => {
              setMeasurementGroup(value);
            }}
          />
        </Wrapper>
        <Wrapper>
          <TextArea value={description} onChange={e => setDescription(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <Select placeholder="Тип поля" />
        </Wrapper>
        {/* <Wrapper>Привязанная единица измерения:</Wrapper> */}
        {/* <Wrapper> */}
        {/* <Select placeholder="Единица измерения" /> */}
        {/* eslint-disable-next-line max-len */}
        {/* <Select */}
        {/*  placeholder="Единица измерения" */}
        {/*  onChange={e => setMeasurementGroup(e)} */}
        {/* /> */}
        {/* </Wrapper> */}
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
