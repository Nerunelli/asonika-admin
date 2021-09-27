import { Input, SearchIcon, Wrapper } from './styled';
import React from 'react';

export const Search: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Input placeholder="Поиск по категориям" />
        <SearchIcon />
      </Wrapper>
    </>
  );
};
