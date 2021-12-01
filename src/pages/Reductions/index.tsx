import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ParamsItem } from '../../components/ParamsItem';
import { ReductionForm } from '../../components/ReductionForm';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, ReductionsContainer } from './styled';

interface IContent {
  title: string;
  link?: string;
}

interface IProps {
  content: IContent[];
}

export const Reductions: React.FC<IProps> = ({ content }) => {
  return (
    <>
      <Breadcrumbs
        data={[
          {
            link: '/reductions',
            title: 'Сокращения',
          },
        ]}
      />
      <ButtonsWrap>
        <Button width="220px">Добавить сокращение</Button>
      </ButtonsWrap>
      <ReductionsContainer>
        <ItemsContainer>
          {content.map(({ title }, i) => (
            <ItemWrapper key={`paramItem-${title}${i}`}>
              <ParamsItem>{title}</ParamsItem>
            </ItemWrapper>
          ))}
        </ItemsContainer>
        <ReductionForm />
      </ReductionsContainer>
    </>
  );
};
