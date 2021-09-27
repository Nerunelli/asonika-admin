import React from 'react';
import { Button } from '../../ui-kit/Button';
import { Background, Container } from './styled';

export const Menu: React.FC = () => {
  return (
    <>
      <Background />

      <Container>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
      </Container>
    </>
  );
};
