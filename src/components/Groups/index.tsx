import { Button } from '../../ui-kit/Button';
import { ButtonWrapper, Wrapper } from './styled';
import React from 'react';
import { categoriesData } from './data';

export const Groups: React.FC = () => {
  return (
    <Wrapper>
      {categoriesData.map((cat, i) => (
        <ButtonWrapper to={cat.href} key={`${cat.title}-${i}`}>
          <Button width="350px" height="58px">
            {cat.title}
          </Button>
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
};
