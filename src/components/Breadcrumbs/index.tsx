import { Container, CrumbImg, CrumbItem } from './styled';
import React, { Fragment } from 'react';
import { BreadcrumbsData } from '../../utls/types';

interface IProps {
  data?: BreadcrumbsData[];
}

export const Breadcrumbs: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <Container>
        <CrumbItem to="/">Главная</CrumbItem>
        {data?.map(({ link, title }, idx) => (
          <Fragment key={`BreadcrumbItem-${idx}`}>
            <CrumbImg />
            <CrumbItem to={link}>{title}</CrumbItem>
          </Fragment>
        ))}
      </Container>
    </>
  );
};
