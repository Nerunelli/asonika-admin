import React from 'react';
import { Border, LabelText, LabelWrapper, TextAreaUI, Wrapper } from './styled';

interface Props {
  // placeholder?: string;
  // width?: string;
  // height?: string;
  // label?: string | ReactNode;
  labelFontSize?: number;
}

export const TextArea: React.FC<Props> = ({
  // width = '370px',
  // height = '38px',
  labelFontSize = 12,
}) => {
  return (
    <>
      <Wrapper labelFontSize={labelFontSize}>
        <TextAreaUI rows={6} placeholder="Введите текст" />
        <LabelWrapper fontSize={labelFontSize}>
          <LabelText fontSize={labelFontSize}>Описание</LabelText>
        </LabelWrapper>
        <Border />
      </Wrapper>
    </>
  );
};
