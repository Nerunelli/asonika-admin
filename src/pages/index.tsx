import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Header } from '../components/Header';
// import { Menu } from "../components/Menu";
// import { Main } from './main';
import { Params } from './Params';

export const Content: React.FC = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      {/* <Main /> */}
      <Params />
    </>
  );
};
