import { Burger } from '../../ui-kit/Burger';
import { More } from '../../ui-kit/More';
import { Title, Wrapper, Side, Hello, Username } from './styled';

export const Header = () => {
  return <>
    <Wrapper>
      <Side>
        <Burger />
        <Title>Менеджер БД Асоника-К</Title>
      </Side>
      <Side>
        <Hello>
          Вы вошли как&nbsp;
        </Hello>
        <Username>Username</Username>
        <More />
      </Side>
    </Wrapper>
  </>
}