import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Main } from '../Main';
import { Parameters } from '../Parameters';
import { Reductions } from '../Reductions';
import { Container } from './styled';
import { Specifications } from '../Specifications';
import { Categories } from '../Categories';
import { Manufacturers } from '../Manufacturers';

export const Pages: React.FC = () => {
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
          <Route path="/parameters" exact>
            <Parameters />
          </Route>
          <Route path="/manufacturers" exact>
            <Manufacturers />
          </Route>
          <Route path="/specifications" exact>
            <Specifications />
          </Route>
        </Switch>
      </Container>
    </>
  );
};
