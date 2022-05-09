import React, { ChangeEvent } from 'react';
import { Border, LabelText, LabelWrapper, TextAreaUI, Wrapper } from './styled';

// eslint-disable-next-line no-unused-vars
type onChangeFunc = (event: ChangeEvent<HTMLTextAreaElement>) => void;

interface Props {
  // placeholder?: string;
  // width?: string;
  // height?: string;
  // label?: string | ReactNode;
  labelFontSize?: number;
  value?: string;
  onChange?: onChangeFunc;
  labelText?: string;
  hasError?: boolean;
}

export const TextArea: React.FC<Props> = ({
  // width = '370px',
  // height = '38px',
  labelFontSize = 12,
  value,
  onChange,
  labelText = 'Описание',
  hasError,
  ...inputProps
}) => {
  return (
    <>
      <Wrapper labelFontSize={labelFontSize} hasError={hasError}>
        <TextAreaUI
          {...inputProps}
          value={value}
          onChange={onChange}
          rows={6}
          placeholder="Введите текст"
        />
        <LabelWrapper fontSize={labelFontSize}>
          <LabelText fontSize={labelFontSize}>{labelText}</LabelText>
        </LabelWrapper>
        <Border />
      </Wrapper>
    </>
  );
};
