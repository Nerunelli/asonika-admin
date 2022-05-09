/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  HeaderContainer,
  Header,
  Input,
  Container,
  AddButton,
  InputWrapper,
  DeleteBtn,
  Row,
  Wrapper,
} from './styled';
import { Plus } from './styled';
import { useFieldArray, useForm } from 'react-hook-form';
import { RangeInput } from '../../ui-kit/RangeInput';
import {
  createMeasurementUnitFx,
  deleteMeasurementUnitFx,
  updateMeasurementUnitFx,
} from '../../data/measurement/units/effects';
import { $unitsByGroupStore } from '../../data/measurement/units/stores';
import { useEvent, useStore } from 'effector-react';
import { IGroup } from '../../data/measurement/groups/types';
import { IUnit } from '../../data/measurement/units/types';
import { camelToSnake } from '../../utls/cases';

interface IProps {
  group: IGroup;
}

export interface IRange {
  idx: number;
  minIsIncluded: boolean;
  minValue: number;
  maxValue: number;
  maxIsIncluded: boolean;
}

export const ReductionTable: React.FC<IProps> = ({ group }) => {
  const { register, control } = useForm();
  const { fields, replace, append } = useFieldArray({ control, name: 'fields' });
  const [rangeValue, setRangeValue] = useState<IRange | null>(null);
  const [rangeValues, setRangeValues] = useState<IRange[]>([]);
  const [active, setActive] = useState<boolean[]>([]);

  const filteredUnits = useStore($unitsByGroupStore);

  const createMeasurementUnit = useEvent(createMeasurementUnitFx);
  const updateMeasurementUnit = useEvent(updateMeasurementUnitFx);
  const deleteMeasurementUnit = useEvent(deleteMeasurementUnitFx);

  useEffect(() => {
    replace(filteredUnits);
    setRangeValues(() =>
      filteredUnits.map((el, i) => ({
        ...el,
        idx: i,
      })),
    );
    setRangeValue(null);
    setActive(new Array(filteredUnits.length).fill(false));
  }, [filteredUnits]);

  const onAdd = async () => {
    append({});
  };

  const updateUnitByName = async (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;

    if (!newName) {
      replace(filteredUnits);
    } else if (filteredUnits.length !== fields.length) {
      await createMeasurementUnit({
        group,
        name: newName,
        multiplier: 0,
        minValue: -10,
        minIsIncluded: false,
        maxValue: 0,
        maxIsIncluded: false,
      });
    } else {
      const updated = filteredUnits[Number(e.target.id.split('.')[0])];
      await updateMeasurementUnit(
        camelToSnake<IUnit>({
          ...updated,
          name: e.target.value,
          group,
        }),
      );
    }
  };

  const updateMultiplier = async (e: React.FocusEvent<HTMLInputElement>, data: IUnit) => {
    await updateMeasurementUnit(
      camelToSnake({
        ...data,
        multiplier: Number(e.target.value),
        group,
      }),
    );
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, uuid: string) => {
    e.preventDefault();
    await deleteMeasurementUnit(uuid);
  };

  const updateRange = async (res: IRange) => {
    const data = filteredUnits[res.idx ? res.idx : 0];
    await updateMeasurementUnit({
      ...data,
      minValue: res.minValue ? res.minValue : 0,
      minIsIncluded: res.minIsIncluded ? res.minIsIncluded : false,
      maxValue: res.maxValue ? res.maxValue : 0,
      maxIsIncluded: res.maxIsIncluded ? res.maxIsIncluded : false,
    });

    setRangeValue(null);
    setActive(prev => prev.fill(false));
  };

  const defaultRangeValue = (value: IRange) => {
    return `${value.minIsIncluded ? '[' : '('} ${value.minValue}, ${value.maxValue} ${
      value.maxIsIncluded ? ']' : ')'
    }`;
  };

  return (
    <>
      <Container>
        <HeaderContainer>
          <Header>Сокращение</Header>
          <Header>Множитель</Header>
          <Header>Диапазон действия</Header>
        </HeaderContainer>
        <InputWrapper>
          <form>
            {fields.map((el, i) => (
              <Row>
                <Input
                  {...register(`fields.${i}.reduction` as any)}
                  id={`${i}.reduction`}
                  onBlur={e => updateUnitByName(e)}
                  key={`fields.${el.id}.reduction`}
                  defaultValue={filteredUnits[i]?.name}
                />
                <Input
                  {...register(`fields.${i}.multiplier` as any)}
                  id={`${i}-multiplier`}
                  onBlur={e => updateMultiplier(e, filteredUnits[i])}
                  key={`fields.${el.id}.multiplier`}
                  defaultValue={filteredUnits[i]?.multiplier}
                />
                <Input
                  {...register(`fields.${i}.range` as any)}
                  id={`${i}-range`}
                  onClick={() => {
                    setRangeValue(rangeValues[i]);
                    active[i] = true;
                  }}
                  active={active[i]}
                  readOnly
                  key={`fields.${el.id}.range`}
                  defaultValue={rangeValues[i] ? defaultRangeValue(rangeValues[i]) : ''}
                />
                <DeleteBtn onClick={e => handleDelete(e, filteredUnits[i].uuid)}>&times;</DeleteBtn>
              </Row>
            ))}
          </form>
        </InputWrapper>
        <AddButton onClick={onAdd}>
          <Plus />
        </AddButton>
        <Wrapper>
          <RangeInput
            value={rangeValue}
            handleSubmit={updateRange}
            disabled={!rangeValue?.maxValue?.toString().length}
          />
        </Wrapper>
      </Container>
    </>
  );
};
