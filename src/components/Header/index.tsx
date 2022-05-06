import React, { useEffect, useState } from 'react';
import { Burger } from '../../ui-kit/Burger';
import { More } from '../../ui-kit/More';
import { Sidebar } from '../Sidebar';
import { Title, Wrapper, Side, Hello, Username } from './styled';

export const Header: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  const onBurgerClick = () => {
    setIsOpenSidebar(prev => !prev);
  };

  const onClose = () => {
    setIsOpenSidebar(false);
  };

  useEffect(() => {
    const html = document.documentElement;

    if (isOpenSidebar) {
      html.style.overflowY = 'hidden';
    } else {
      html.style.overflowY = '';
    }
  }, [isOpenSidebar]);

  return (
    <>
      <Wrapper>
        <Side>
          <Burger onClick={onBurgerClick} isOpened={isOpenSidebar} />
          <Title>Менеджер БД Асоника-К</Title>
        </Side>
        <Side>
          <Hello>Вы вошли как&nbsp;</Hello>
          <Username>Иванов Иван</Username>
          <More />
        </Side>
      </Wrapper>
      <Sidebar isOpened={isOpenSidebar} onClose={onClose} />
    </>
  );
};
