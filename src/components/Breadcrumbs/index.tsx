import { Container, CrumbImg, CrumbItem } from "./styled";

export const Breadcrumbs = () => {
  return <>
    <Container>
      <CrumbItem>Главная</CrumbItem>
      <CrumbImg />
      <CrumbItem>Главная</CrumbItem>
    </Container>
  </>; 
};