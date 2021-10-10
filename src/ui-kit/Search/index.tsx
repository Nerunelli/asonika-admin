import {
  Border,
  InputUI,
  LabelText,
  LabelWrapper,
  SearchIcon,
  SearchIconWrapper,
  Wrapper,
} from './styled';
import React, { ReactNode } from 'react';

interface Props {
  isSearch?: boolean;
  placeholder?: string;
  width?: string;
  height?: string;
  label?: string | ReactNode;
  hasError?: boolean;
  onlyBottom?: boolean;
}

export const Input: React.FC<Props> = ({
  isSearch,
  placeholder,
  width = '370px',
  height = '38px',
  label,
  hasError,
  onlyBottom,
}) => {
  return (
    <>
      <Wrapper height={height} width={width} isError={hasError}>
        <InputUI placeholder={placeholder} />
        {isSearch && (
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        )}
        {label && !onlyBottom && (
          <LabelWrapper>
            {typeof label === 'string' ? <LabelText>{label}</LabelText> : label}
          </LabelWrapper>
        )}
        <Border onlyBottom={onlyBottom} />
      </Wrapper>
    </>
  );
};
