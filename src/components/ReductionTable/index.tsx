import React from 'react';
import { HeaderContainer, Header, Input, Container } from './styled';

export const ReductionTable: React.FC = () => {
  return (
    <>
      <Container>
        <HeaderContainer>
          <Header>Сокращение</Header>
          <Header>Множитель</Header>
          <Header>Диапазон действия</Header>
        </HeaderContainer>
        <Input readOnly value="А" />
        <Input readOnly value="1" />
        <Input readOnly value="[0, 1, знак)" />
        <Input readOnly value="А" />
        <Input readOnly value="1" />
        <Input readOnly value="[0, 1, знак)" />
        <Input readOnly value="А" />
        <Input readOnly value="1" />
        <Input readOnly value="[0, 1, знак)" />
      </Container>
    </>
  );
};
