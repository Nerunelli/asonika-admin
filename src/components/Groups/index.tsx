import { Button } from '../../ui-kit/Button';
import { Wrapper } from './styled';
import React from 'react';

export const Groups: React.FC = () => {
  return (
    <Wrapper>
      <Button width="350px" height="58px" normal>
        Категории
      </Button>
      <Button width="350px" height="58px" normal>
        Сокращения
      </Button>
      <Button width="350px" height="58px" normal>
        Параметры
      </Button>
      <Button width="350px" height="58px" normal>
        Производители
      </Button>
      <Button width="350px" height="58px" normal>
        ТУ
      </Button>
    </Wrapper>
  );
};
