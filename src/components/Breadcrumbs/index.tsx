import { Container, CrumbImg, CrumbItem } from './styled';
import React from 'react';

export const Breadcrumbs: React.FC = () => {
  return (
    <>
      <Container>
        <CrumbItem>Главная</CrumbItem>
        <CrumbImg />
        <CrumbItem>Главная</CrumbItem>
      </Container>
    </>
  );
};
