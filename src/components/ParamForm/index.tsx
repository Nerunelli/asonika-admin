import React from 'react';
import { Container } from './styled';
import { Input } from '../../ui-kit/Search';

export const ParamsItemDescript: React.FC = () => {
  return (
    <>
      <Container>
        <Input label="Название" placeholder="Введите текст" width="550px" />
        <Input label="Сокращение" placeholder="Введите текст" width="250px" />
        <Input label="Описание" placeholder="Введите текст" width="550px" height="80px" />
      </Container>
    </>
  );
};
