import { Lines, Wrapper } from './styled';
import React from 'react';

interface Props {
  onClick: () => void;
  isOpened: boolean;
}

export const Burger: React.FC<Props> = ({ onClick, isOpened }) => {
  return (
    <>
      <Wrapper onClick={onClick}>
        <Lines isOpened={isOpened}>
          <div />
        </Lines>
      </Wrapper>
    </>
  );
};
