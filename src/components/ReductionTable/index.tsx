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

interface IProps {
  group: IGroup;
}

export interface IRange {
  idx?: number;
  minIsIncluded?: boolean;
  minValue?: number;
  maxValue?: number;
  maxIsIncluded?: boolean;
}

export const ReductionTable: React.FC<IProps> = ({ group }) => {
  const { register, control, watch } = useForm();
  const { fields, replace, append } = useFieldArray({ control, name: 'fields' });
  const [rangeValue, setRangeValue] = useState<IRange | null>({});
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
        idx: i,
        minIsIncluded: el.minIsIncluded,
        minValue: el.minValue,
        maxValue: el.maxValue,
        maxIsIncluded: el.maxIsIncluded,
      })),
    );
    setRangeValue({});
    setActive(new Array(filteredUnits.length).fill(false));
  }, [filteredUnits]);

  const onAdd = async () => {
    append({});
  };

  const updateUnitByName = async (e: ChangeEvent<HTMLInputElement>) => {
    const newName = watch(`fields.${e.target.id}` as any);

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
      const { uuid, multiplier, minValue, minIsIncluded, maxValue, maxIsIncluded, group } =
        filteredUnits[Number(e.target.id.split('.')[0])];
      await updateMeasurementUnit({
        uuid,
        name: e.target.value,
        multiplier,
        minValue,
        minIsIncluded,
        maxValue,
        maxIsIncluded,
        group,
      });
    }
  };

  const updateMultiplier = async (e: React.FocusEvent<HTMLInputElement>, data: IUnit) => {
    await updateMeasurementUnit({
      ...data,
      multiplier: Number(e.target.value),
      group,
    });
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, uuid: string) => {
    e.preventDefault();
    await deleteMeasurementUnit(uuid);
  };

  const updateRange = async (res: IRange) => {
    const data = filteredUnits[res.idx ? res.idx : 0];
    await updateMeasurementUnit({
      uuid: data.uuid,
      name: data.name,
      multiplier: data.multiplier,
      minValue: res.minValue ? res.minValue : 0,
      minIsIncluded: res.minIsIncluded ? res.minIsIncluded : false,
      maxValue: res.maxValue ? res.maxValue : 0,
      maxIsIncluded: res.maxIsIncluded ? res.maxIsIncluded : false,
      group: data.group,
    });

    setRangeValue({});
    setActive(prev => prev.fill(false));
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
                  defaultValue={
                    rangeValues[i]
                      ? `${rangeValues[i]?.minIsIncluded ? '[' : '('} ${
                          rangeValues[i]?.minValue
                        }, ${rangeValues[i]?.maxValue} ${rangeValues[i]?.maxIsIncluded ? ']' : ')'}`
                      : ''
                  }
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
