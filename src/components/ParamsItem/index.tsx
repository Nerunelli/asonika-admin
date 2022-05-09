import React from 'react';
import { Arrow, Container, LeftSide, Title } from './styled';

interface IProps {
  active?: boolean;
  onClick?: () => void;
}

export const ParamsItem: React.FC<IProps> = ({ children, active, onClick }) => {
  return (
    <Container active={active} onClick={onClick}>
      <LeftSide>
        {/* <CheckBox /> */}
        <Title>{children}</Title>
      </LeftSide>
      <Arrow />
    </Container>
  );
};
