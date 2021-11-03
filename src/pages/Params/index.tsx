import React from 'react';
import { Button } from '../../ui-kit/Button';
import { Container } from './styled';

export const Params: React.FC = () => {
  return (
    <>
      <Container>
        <Button normal width="220px">
          Добавить параметр
        </Button>
        <Button danger width="220px">
          Удалить выбранные
        </Button>
      </Container>
    </>
  );
};
