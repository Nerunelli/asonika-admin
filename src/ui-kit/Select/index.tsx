import React, { useEffect, useState, MouseEvent } from 'react';
import { Arrow, Wrapper, Text, Options, OptionsItem } from './styled';
import { IGroup } from '../../pages/Reductions';

interface Props {
  placeholder: string;
  value?: string;
  names?: IGroup[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: IGroup) => void;
}

export const Select: React.FC<Props> = ({ value, placeholder, names, onChange }) => {
  const [open, setOpen] = useState(false);

  const onSelectClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (names) setOpen(prev => !prev);
  };

  const onSelect = (value: IGroup) => {
    setOpen(prev => !prev);
    onChange?.(value);
  };

  const onReset = () => {
    setOpen(prev => !prev);
    onChange?.({ uuid: '', name: '', description: '' });
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
      <Wrapper disabled={!names} id="select" onClick={e => onSelectClick(e)}>
        <Text empty={!value}>{value || placeholder}</Text>
        <Arrow />
      </Wrapper>
      <Options open={open}>
        <OptionsItem onClick={onReset} />
        {names &&
          names.map(name => (
            <OptionsItem key={name.uuid} onClick={() => onSelect(name)}>
              {name.name}
            </OptionsItem>
          ))}
      </Options>
    </>
  );
};
