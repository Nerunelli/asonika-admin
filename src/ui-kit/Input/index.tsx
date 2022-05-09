import {
  Border,
  InputUI,
  LabelText,
  LabelWrapper,
  SearchIcon,
  SearchIconWrapper,
  Wrapper,
} from './styled';
import React, { ChangeEvent, ReactNode } from 'react';
import { RefCallBack } from 'react-hook-form/dist/types/form';

// eslint-disable-next-line no-unused-vars
type onChangeFunc = (event: ChangeEvent<HTMLInputElement>) => void;

interface Props {
  isSearch?: boolean;
  placeholder?: string;
  width?: string;
  height?: string;
  label?: string | ReactNode;
  hasError?: boolean;
  onlyBottom?: boolean;
  labelFontSize?: number;
  onChange?: onChangeFunc;
  value?: string;
  ref?: RefCallBack;
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
  onChange,
  value,
  ref,
  ...inputProps
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
        <InputUI
          {...inputProps}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
        />
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
