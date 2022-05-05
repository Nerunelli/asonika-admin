import React from 'react';
import { Button } from '../../ui-kit/Button';
import { Background, BtnWrapper, Container, Wrapper } from './styled';

interface IProps {
  isOpened: boolean;
}

export const Menu: React.FC<IProps> = ({ isOpened }) => {
  return (
    <Wrapper isOpened={isOpened}>
      <Background isOpened={isOpened} />
      <Container isOpened={isOpened}>
        <BtnWrapper to="/categories">
          <Button width="360px" height="60px">
            Категория
          </Button>
        </BtnWrapper>
        <BtnWrapper to="/reductions">
          <Button width="360px" height="60px">
            Сокращения
          </Button>
        </BtnWrapper>
        <BtnWrapper to="/params">
          <Button width="360px" height="60px">
            Параметры
          </Button>
        </BtnWrapper>
        <BtnWrapper to="/producers">
          <Button width="360px" height="60px">
            Производители
          </Button>
        </BtnWrapper>
        <BtnWrapper to="/specifications">
          <Button width="360px" height="60px">
            ТУ
          </Button>
        </BtnWrapper>
        <BtnWrapper to="/components">
          <Button width="360px" height="60px">
            Компоненты
          </Button>
        </BtnWrapper>
        <BtnWrapper to="/users">
          <Button width="360px" height="60px">
            Пользователи
          </Button>
        </BtnWrapper>
      </Container>
    </Wrapper>
  );
};
