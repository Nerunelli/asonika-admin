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
  minIsIncluded?: boolean;
  minValue?: number;
  maxValue?: number;
  maxIsIncluded?: boolean;
}

export const ReductionTable: React.FC<IProps> = ({ group }) => {
  const { register, control, watch } = useForm();
  const { fields, replace, append } = useFieldArray({ control, name: 'fields' });
  // const [leftRangeValue, setLeftRangeValue] = useState('');
  // const [rightRangeValue, setRightRangeValue] = useState('');
  const [rangeValue, setRangeValue] = useState<IRange>({});
  const [rangeValues, setRangeValues] = useState<IRange[]>([]);
  const [active, setActive] = useState<boolean[]>([]);

  const filteredUnits = useStore($unitsByGroupStore);

  const createMeasurementUnit = useEvent(createMeasurementUnitFx);
  const updateMeasurementUnit = useEvent(updateMeasurementUnitFx);
  const deleteMeasurementUnit = useEvent(deleteMeasurementUnitFx);

  useEffect(() => {
    replace(filteredUnits);
    setRangeValues(() =>
      filteredUnits.map(el => ({
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
      uuid: data.uuid,
      name: data.name,
      multiplier: Number(e.target.value),
      minValue: data.minValue,
      minIsIncluded: data.minIsIncluded,
      maxValue: data.maxValue,
      maxIsIncluded: data.maxIsIncluded,
      group,
    });
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, uuid: string) => {
    e.preventDefault();
    await deleteMeasurementUnit(uuid);
  };

  const updateRange = (res: IRange) => {
    // eslint-disable-next-line no-console
    console.log(res);

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
                  // onChange={() => {}}
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
                  // onBlur={e => updateUnit(e)}
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
            disabled={!rangeValue.maxValue?.toString().length}
          />
        </Wrapper>
      </Container>
    </>
  );
};

// const onChangeReduct = (e: ChangeEvent<HTMLInputElement>) => {
//   const idx = Number(e.target.id[0]);
//   const field: 'reduction' | 'multiplier' | 'range' = e.target.id.slice(2);
//   // eslint-disable-next-line no-console
//   // console.log(field);
//   setValue(() => {
//     value[idx][field] = e.target.value;
//     return value;
//   });
// };

// const onSelect = (manufacturer: { uuid: string; name: string; description: string }) => {
//   setSelected(manufacturer);
// };

// const handleSubmit = async (name: string, description: string) => {
//   // eslint-disable-next-line no-console
//   console.log(name, description);
//
//   if (selected?.uuid) {
//     await updateManufacturer({ uuid: selected.uuid, name, description });
//     setManufacturers(manufacturer =>
//       manufacturer.map(manufacturer =>
//         manufacturer.uuid === selected.uuid
//           ? { uuid: manufacturer.uuid, name, description }
//           : manufacturer,
//       ),
//     );
//   } else {
//     const newManufacturer = await createManufacturer(name, description);
//     // eslint-disable-next-line no-console
//     console.log(newManufacturer);
//     if (newManufacturer) {
//       setManufacturers(manufacturers => [
//         ...manufacturers,
//         {
//           uuid: newManufacturer.uuid,
//           name: newManufacturer.name,
//           description: newManufacturer.description,
//         },
//       ]);
//     }
//   }
// };
