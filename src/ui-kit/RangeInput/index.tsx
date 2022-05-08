import React, { useEffect, useState } from 'react';
import { ButtonWrapper, CheckMark, LeftField, RightField, Wrapper } from './styled';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import { IRange } from '../../components/ReductionTable';

const left = ['(', '['];
const right = [')', ']'];

interface IProps {
  disabled?: boolean;
  value: IRange | null;
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (val: IRange) => void;
}

export const RangeInput: React.FC<IProps> = ({ disabled = false, value, handleSubmit }) => {
  const [leftBrIdx, setLeftBrIdx] = useState(0);
  const [rightBrIdx, setRightBrIdx] = useState(0);
  const [innerValue, setInnerValue] = useState(value);
  const { register, watch, setValue } = useForm();
  // const { fields, replace, append } = useFieldArray({ control, name: 'fields' });

  // console.log(watch(`min`));

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  useEffect(() => {
    setValue(`min`, innerValue ? innerValue.minValue : '');
    setValue(`max`, innerValue ? innerValue.maxValue : '');
  }, [innerValue]);

  // eslint-disable-next-line no-console
  // console.log(value);

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
        <form>
          <LeftField
            {...register(`min`)}
            defaultValue={innerValue ? innerValue.minValue : ''}
            disabled={disabled}
          />
          <RightField
            {...register(`max`)}
            defaultValue={innerValue ? innerValue.maxValue : ''}
            disabled={disabled}
          />
        </form>
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
          onClick={() => {
            handleSubmit({
              idx: value?.idx,
              minIsIncluded: Boolean(leftBrIdx),
              minValue: watch(`min`) ? Number(watch(`min`)) : innerValue?.minValue,
              maxValue: watch(`max`) ? Number(watch(`max`)) : innerValue?.maxValue,
              maxIsIncluded: Boolean(rightBrIdx),
            });
            setValue(`min`, '');
            setValue(`max`, '');
          }}
          disabled={disabled}
        >
          <CheckMark />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
