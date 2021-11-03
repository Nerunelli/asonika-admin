import { Button } from '../../ui-kit/Button';
import { ButtonWrapper, Wrapper } from './styled';
import React from 'react';

export const Groups: React.FC = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button width="350px" height="58px">
          Категории
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button width="350px" height="58px">
          Сокращения
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button width="350px" height="58px">
          Параметры
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button width="350px" height="58px">
          Производители
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button width="350px" height="58px">
          ТУ
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
