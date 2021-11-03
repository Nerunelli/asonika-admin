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
  labelFontSize?: number;
}

export const Input: React.FC<Props> = ({
  isSearch,
  placeholder,
  width = '370px',
  height = '38px',
  label,
  hasError,
  onlyBottom,
  labelFontSize = 12,
}) => {
  return (
    <>
      <Wrapper
        hasLabel={!!label}
        height={height}
        width={width}
        isError={hasError}
        labelFontSize={labelFontSize}
      >
        <InputUI placeholder={placeholder} />
        {isSearch && (
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        )}
        {label && !onlyBottom && (
          <LabelWrapper fontSize={labelFontSize}>
            {typeof label === 'string' ? (
              <LabelText fontSize={labelFontSize}>{label}</LabelText>
            ) : (
              label
            )}
          </LabelWrapper>
        )}
        <Border onlyBottom={onlyBottom} />
      </Wrapper>
    </>
  );
};
