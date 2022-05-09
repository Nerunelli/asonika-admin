import React, { useEffect } from 'react';
import { Input } from '../../ui-kit/Input';
import { TextArea } from '../../ui-kit/TextArea';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrapper, Container, Wrapper } from './styled';
import { IGroup } from '../../data/measurement/groups/types';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type onSubmitFunc = (_data: { name: string; description: string }) => void;
type onDeleteFunc = (_uuid: string) => void;

interface IProps {
  onSubmit: onSubmitFunc;
  onDelete: onDeleteFunc;
  group: IGroup;
}

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

export const EditProducerForm: React.FC<IProps> = ({ onSubmit, onDelete, group }) => {
  const { handleSubmit, control, setValue } = useForm<{ name: string; description: string }>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue('name', group.name);
    setValue('description', group.description);
  }, [group]);

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <Controller
            control={control}
            name="name"
            defaultValue={group.name}
            render={({ field: { value, onChange }, fieldState: { invalid } }) => (
              <Input
                label="Название *"
                placeholder="Введите текст"
                width="550px"
                value={value}
                onChange={onChange}
                hasError={invalid}
              />
            )}
          />
        </Wrapper>
        <Wrapper>
          <Controller
            control={control}
            name="description"
            defaultValue={group.description}
            render={({ field: { value, onChange }, fieldState: { invalid } }) => (
              <TextArea
                labelText="Описание *"
                value={value}
                onChange={onChange}
                hasError={invalid}
              />
            )}
          />
        </Wrapper>
        <ButtonsWrapper>
          <Button width="120px" isForm>
            Сохранить
          </Button>
          <Button onClick={() => onDelete(group.uuid)} width="120px" variant="danger">
            Удалить
          </Button>
        </ButtonsWrapper>
      </Container>
    </>
  );
};
