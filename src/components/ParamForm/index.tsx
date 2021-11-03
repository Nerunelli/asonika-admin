import React from 'react';
import { ButtonsWrapper, Container, Wrapper } from './styled';
import { Input } from '../../ui-kit/Input';
import { Button } from '../../ui-kit/Button';
import { TextArea } from '../../ui-kit/TextArea';
import { Select } from '../../ui-kit/Select';

export const ParamForm: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Input label="Название" placeholder="Введите текст" width="550px" />
        </Wrapper>
        <Wrapper>
          <Input label="Сокращение" placeholder="Введите текст" width="250px" />
        </Wrapper>
        <Wrapper>
          <TextArea />
        </Wrapper>
        <Wrapper>
          <Select placeholder="Тип поля" />
        </Wrapper>
        <Wrapper>Привязанная единица измерения:</Wrapper>
        <Wrapper>
          <Select placeholder="Единица измерения" />
        </Wrapper>
        <ButtonsWrapper>
          <Button width="120px">Сохранить</Button>
          <Button width="120px" variant="danger">
            Удалить
          </Button>
        </ButtonsWrapper>
      </Container>
    </>
  );
};
