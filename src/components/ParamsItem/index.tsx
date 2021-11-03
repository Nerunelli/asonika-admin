import React from 'react';
import { Arrow, Container, LeftSide, Title } from './styled';
import { CheckBox } from '../../ui-kit/CheckBox';

export const ParamsItem: React.FC = ({ children }) => {
  return (
    <Container>
      <LeftSide>
        <CheckBox />
        <Title>{children}</Title>
      </LeftSide>
      <Arrow />
    </Container>
  );
};
