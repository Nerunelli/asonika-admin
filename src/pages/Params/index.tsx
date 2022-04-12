import React from 'react';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, ParamsContainer } from './styled';
import { ParamsItem } from '../../components/ParamsItem';
import { ParamForm } from '../../components/ParamForm';
import { Breadcrumbs } from '../../components/Breadcrumbs';
// import { EditForm } from '../../components/EditForm';

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
      <Breadcrumbs
        data={[
          {
            link: '/params',
            title: 'Параметры',
          },
        ]}
      />
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
        {/* <EditForm */}
        {/*  group={selected} */}
        {/*  handleSubmit={handleSubmit} */}
        {/*  handleDelete={handleDelete} */}
        {/*  params */}
        {/* /> */}
      </ParamsContainer>
    </>
  );
};
