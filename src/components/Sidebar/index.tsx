import React from 'react';
import { Button } from '../../ui-kit/Button';
import { Background, BtnWrapper, Container, Wrapper } from './styled';
import { categoriesData } from '../Groups/data';

interface IProps {
  isOpened: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<IProps> = ({ isOpened, onClose }) => {
  return (
    <Wrapper isOpened={isOpened}>
      <Background isOpened={isOpened} />
      <Container isOpened={isOpened}>
        {categoriesData.map((link, i) => (
          <BtnWrapper to={link.href} onClick={onClose} key={`${link.href}-${i}`}>
            <Button width="360px" height="60px">
              {link.title}
            </Button>
          </BtnWrapper>
        ))}
      </Container>
    </Wrapper>
  );
};
