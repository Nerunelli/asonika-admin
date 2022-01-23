import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../../components/Header';
import { MockParamsContent } from '../../utls/mocks';
import { Main } from '../main';
// import { Menu } from "../components/Menu";
import { Params } from '../Params';
import { Reductions } from '../Reductions';
import { Container } from './styled';
// import { Main } from '../main';

export const Content: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/params" exact>
            <Params content={MockParamsContent} />
          </Route>
          <Route path="/reductions" exact>
            <Reductions />
          </Route>
        </Switch>
      </Container>
    </>
  );
};
