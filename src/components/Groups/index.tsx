import { Button } from '../../ui-kit/Button';
import { ButtonWrapper, Wrapper } from './styled';
import React from 'react';

export const Groups: React.FC = () => {
  return (
    <Wrapper>
      <ButtonWrapper to="/categories">
        <Button width="350px" height="58px">
          Категории
        </Button>
      </ButtonWrapper>
      <ButtonWrapper to="/reductions">
        <Button width="350px" height="58px">
          Сокращения
        </Button>
      </ButtonWrapper>
      <ButtonWrapper to="/params">
        <Button width="350px" height="58px">
          Параметры
        </Button>
      </ButtonWrapper>
      <ButtonWrapper to="/producers">
        <Button width="350px" height="58px">
          Производители
        </Button>
      </ButtonWrapper>
      <ButtonWrapper to="/specifications">
        <Button width="350px" height="58px">
          ТУ
        </Button>
      </ButtonWrapper>
      <ButtonWrapper to="/components">
        <Button width="350px" height="58px">
          Компоненты
        </Button>
      </ButtonWrapper>
      <ButtonWrapper to="/users">
        <Button width="350px" height="58px">
          Пользователи
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
