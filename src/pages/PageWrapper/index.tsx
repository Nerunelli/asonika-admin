import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Header } from '../../components/Header';
import { MockParamsContent } from '../../mocks';
// import { Menu } from "../components/Menu";
import { Params } from '../Params';
import { Container } from './styled';
// import { Main } from '../main';

export const Content: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Breadcrumbs />
        {/* <Main /> */}
        <Params content={MockParamsContent} />
      </Container>
    </>
  );
};
