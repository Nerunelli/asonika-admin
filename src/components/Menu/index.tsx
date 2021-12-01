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
        <BtnWrapper>
          <Button width="360px" height="60px">
            Категория
          </Button>
        </BtnWrapper>
        <BtnWrapper>
          <Button width="360px" height="60px">
            Категория
          </Button>
        </BtnWrapper>
        <BtnWrapper>
          <Button width="360px" height="60px">
            Категория
          </Button>
        </BtnWrapper>
        <BtnWrapper>
          <Button width="360px" height="60px">
            Категория
          </Button>
        </BtnWrapper>
        <BtnWrapper>
          <Button width="360px" height="60px">
            Категория
          </Button>
        </BtnWrapper>
        <BtnWrapper>
          <Button width="360px" height="60px">
            Категория
          </Button>
        </BtnWrapper>
      </Container>
    </Wrapper>
  );
};
