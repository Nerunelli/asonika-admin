import React from 'react';
import { Groups } from '../../components/Groups';
import { Input } from '../../ui-kit/Input';
import { Container, InputContainer } from './styled';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const Main: React.FC = () => {
  return (
    <Container>
      <Breadcrumbs />
      <Groups />
      <InputContainer>
        <Input placeholder="Поиск по категориям" isSearch />
      </InputContainer>
      <InputContainer>
        <Input />
      </InputContainer>
      <InputContainer>
        <Input hasError />
      </InputContainer>
      <InputContainer>
        <Input onlyBottom width="150px" />
      </InputContainer>
      <InputContainer>
        <Input onlyBottom placeholder="Введите параметр" width="200px" height="40px" />
      </InputContainer>
      <InputContainer>
        <Input label="Параметр" placeholder="Введите значение" />
      </InputContainer>
    </Container>
  );
};
