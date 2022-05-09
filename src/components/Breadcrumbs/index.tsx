import { Container, CrumbImg, CrumbItem } from './styled';
import React, { Fragment } from 'react';
import { ICategoriesLink } from '../Groups/data';

interface IProps {
  data?: ICategoriesLink[];
}

export const Breadcrumbs: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <Container>
        <CrumbItem to="/">Главная</CrumbItem>
        {data?.map(({ href, title }, idx) => (
          <Fragment key={`BreadcrumbItem-${idx}`}>
            <CrumbImg />
            <CrumbItem to={href}>{title}</CrumbItem>
          </Fragment>
        ))}
      </Container>
    </>
  );
};
