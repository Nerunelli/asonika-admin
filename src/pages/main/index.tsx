import { Groups } from "../../components/Groups";
import { Search } from "../../ui-kit/Search";
import { Container } from "./styled";

export const Main = () => {
  return (
    <Container>
      <Groups />
      <Search/>
    </Container>
  );
};