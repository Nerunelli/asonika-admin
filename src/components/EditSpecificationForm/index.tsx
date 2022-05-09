import React, { useEffect, useState } from 'react';
import { Input } from '../../ui-kit/Input';
import { TextArea } from '../../ui-kit/TextArea';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrapper, Container, Wrapper } from './styled';
import { ISpecifications } from '../../pages/Specifications';
import { FileInput } from '../../ui-kit/FileInput';

// eslint-disable-next-line no-unused-vars
type onSubmitFunc = (name: string, description: string, specificationFileUrl: string) => void;
// eslint-disable-next-line no-unused-vars
type onDeleteFunc = (uuid: string) => void;

interface IProps {
  handleSubmit: onSubmitFunc;
  handleDelete: onDeleteFunc;
  specification: ISpecifications;
}

export const EditSpecificationForm: React.FC<IProps> = ({
  handleSubmit,
  handleDelete,
  specification,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [specificationFileUrl, setSpecificationFileUrl] = useState('');

  useEffect(() => {
    setName(specification.name);
    setDescription(specification.description);
    setSpecificationFileUrl(specification.specificationFileUrl);
  }, [specification]);

  return (
    <>
      <Container
        onSubmit={e => {
          handleSubmit(name, description, specificationFileUrl);
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
          <FileInput />
          {/* <TextArea */}
          {/*  value={specificationFileUrl} */}
          {/*  onChange={e => setSpecificationFileUrl(e.target.value)} */}
          {/* /> */}
        </Wrapper>
        <ButtonsWrapper>
          <Button width="120px" isForm>
            Сохранить
          </Button>
          <Button onClick={() => handleDelete(specification.uuid)} width="120px" variant="danger">
            Удалить
          </Button>
        </ButtonsWrapper>
      </Container>
    </>
  );
};
