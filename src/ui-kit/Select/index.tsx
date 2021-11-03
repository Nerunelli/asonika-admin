import React, { useEffect, useState, MouseEvent } from 'react';
import { Arrow, Wrapper, Text, Options, OptionsItem } from './styled';

const names = ['name1', 'name2', 'name3', 'name1', 'name2', 'name3', 'name1', 'name2', 'name3'];

interface Props {
  placeholder: string;
}

export const Select: React.FC<Props> = ({ placeholder }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(placeholder);
  const [empty, setEmpty] = useState(true);

  const onSelectClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setOpen(prev => !prev);
  };

  const onSelect = (value: string) => {
    setValue(value);
    setOpen(prev => !prev);
    setEmpty(false);
  };
  const onReset = () => {
    setValue(placeholder);
    setOpen(prev => !prev);
    setEmpty(true);
  };

  const closeSelect = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', closeSelect);
    return () => {
      window.removeEventListener('click', closeSelect);
    };
  }, []);

  return (
    <>
      <Wrapper id="select" onClick={e => onSelectClick(e)}>
        <Text empty={empty}>{value}</Text>
        <Arrow />
      </Wrapper>
      <Options open={open}>
        <OptionsItem onClick={onReset} />
        {names.map(name => (
          <OptionsItem onClick={() => onSelect(name)}>{name}</OptionsItem>
        ))}
      </Options>
    </>
  );
};
