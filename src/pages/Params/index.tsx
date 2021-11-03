import React from 'react';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, ParamsContainer } from './styled';
import { ParamsItem } from '../../components/ParamsItem';
import { ParamForm } from '../../components/ParamForm';

interface IContent {
  title: string;
  link?: string;
}

interface IProps {
  content: IContent[];
}

export const Params: React.FC<IProps> = ({ content }) => {
  return (
    <>
      <ButtonsWrap>
        <Button width="220px">Добавить параметр</Button>
        <Button variant="danger" width="220px">
          Удалить выбранные
        </Button>
      </ButtonsWrap>
      <ParamsContainer>
        <ItemsContainer>
          {content.map(({ title }, i) => (
            <ItemWrapper key={`paramItem-${title}${i}`}>
              <ParamsItem>{title}</ParamsItem>
            </ItemWrapper>
          ))}
        </ItemsContainer>
        <ParamForm />
      </ParamsContainer>
    </>
  );
};
