import React, { ChangeEvent, useState } from 'react';
import { ButtonWrapper, CheckMark, LeftField, RightField, Wrapper } from './styled';
import { Button } from '../Button';

const left = ['[', '('];
const right = [']', ')'];

// eslint-disable-next-line no-unused-vars
type onChangeFunc = (event: ChangeEvent<HTMLInputElement>) => void;

interface IProps {
  leftValue: string;
  rightValue: string;
  onChangeLeft: onChangeFunc;
  onChangeRight: onChangeFunc;
  disabled?: boolean;
  value?: {
    minIsIncluded: boolean;
    minValue: number;
    maxValue: number;
    maxIsIncluded: boolean;
  };
}

export const RangeInput: React.FC<IProps> = ({
  disabled = false,
  leftValue,
  rightValue,
  onChangeLeft,
  onChangeRight,
  value,
}) => {
  const [leftBrIdx, setLeftBrIdx] = useState(0);
  const [rightBrIdx, setRightBrIdx] = useState(0);

  // eslint-disable-next-line no-console
  console.log(value);

  const changeBracket = (rightSide: boolean) => {
    if (rightSide) {
      setRightBrIdx(prev => (prev + 1) % 2);
    } else {
      setLeftBrIdx(prev => (prev + 1) % 2);
    }
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button
          width="38px"
          variant="transparent"
          onClick={() => changeBracket(false)}
          disabled={disabled}
        >
          {left[leftBrIdx]}
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <LeftField value={leftValue} disabled={disabled} onChange={onChangeLeft} />
        <RightField value={rightValue} disabled={disabled} onChange={onChangeRight} />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          width="38px"
          variant="transparent"
          onClick={() => changeBracket(true)}
          disabled={disabled}
        >
          {right[rightBrIdx]}
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          width="38px"
          variant="transparent"
          onClick={() => changeBracket(true)}
          disabled={disabled}
        >
          <CheckMark />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
