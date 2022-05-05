import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Main } from '../main';
// import { Menu } from "../components/Menu";
import { Params } from '../Params';
import { Reductions } from '../Reductions';
import { Container } from './styled';
import { Producers } from '../Producers';
import { Specifications } from '../Specifications';
import { Categories } from '../Categories';
// import { Main } from '../main';

export const Content: React.FC = () => {
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
          <Route path="/producers" exact>
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
