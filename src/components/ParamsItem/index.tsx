import React from 'react';
import { Arrow, Container, LeftSide, Title } from './styled';

export const ParamsItem: React.FC = ({ children }) => {
  return (
    <Container>
      <LeftSide>
        {/* <CheckBox /> */}
        <Title>{children}</Title>
      </LeftSide>
      <Arrow />
    </Container>
  );
};
