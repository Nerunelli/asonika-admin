import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { Main } from '../../pages/Main';
import { Params } from '../../pages/Params';
import { Reductions } from '../../pages/Reductions';
import { Container } from './styled';
import { Producers } from '../../pages/Producers';
import { Specifications } from '../../pages/Specifications';
import { Categories } from '../../pages/Categories';

export const PageWrapper: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/categories" exact>
            <Categories />
          </Route>
          <Route path="/reductions" exact>
            <Reductions />
          </Route>
          <Route path="/params" exact>
            <Params />
          </Route>
          <Route path="/manufacturers" exact>
            <Producers />
          </Route>
          <Route path="/specifications" exact>
            <Specifications />
          </Route>
        </Switch>
      </Container>
    </>
  );
};
