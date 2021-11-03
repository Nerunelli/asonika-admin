import React from 'react';
import { Button } from '../../ui-kit/Button';
import { Background, Container, Wrapper } from './styled';

interface IProps {
  isOpened: boolean;
}

export const Menu: React.FC<IProps> = ({ isOpened }) => {
  return (
    <Wrapper isOpened={isOpened}>
      <Background isOpened={isOpened} />
      <Container isOpened={isOpened}>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
        <Button width="360px" height="60px" normal>
          Категория
        </Button>
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
    </Wrapper>
  );
};
