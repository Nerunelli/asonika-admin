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
import { $measurementUnitsStore, $unitsByGroupStore } from '../../data/measurement/units/stores';
import { useEvent, useStore } from 'effector-react';
import { IGroup } from '../../data/measurement/groups/types';
import { filterMeasurementUnitsByGroupEv } from '../../data/measurement/units/events';

interface IProps {
  group: IGroup;
}

export const ReductionTable: React.FC<IProps> = ({ group }) => {
  const { register, control, watch } = useForm();
  const { fields, replace, append } = useFieldArray({ control, name: 'fields' });
  const [leftRangeValue, setLeftRangeValue] = useState('');
  const [rightRangeValue, setRightRangeValue] = useState('');

  const units = useStore($measurementUnitsStore);
  const filteredUnits = useStore($unitsByGroupStore);

  const createMeasurementUnit = useEvent(createMeasurementUnitFx);
  const updateMeasurementUnit = useEvent(updateMeasurementUnitFx);
  const deleteMeasurementUnit = useEvent(deleteMeasurementUnitFx);
  const filterMeasurementUnitsByGroup = useEvent(filterMeasurementUnitsByGroupEv);

  useEffect(() => {
    replace(filteredUnits);
  }, [filteredUnits]);

  useEffect(() => {
    filterMeasurementUnitsByGroup(group.uuid);
  }, []);

  const onAdd = async () => {
    append({});
  };

  const updateUnitByName = async (e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-console
    console.log(watch(`fields.${e.target.id}` as any));
    const newName = watch(`fields.${e.target.id}` as any);
    // eslint-disable-next-line no-console
    console.log(e.target.value);
    if (units.length !== fields.length) {
      await createMeasurementUnit({
        group,
        name: newName,
        multiplier: 0,
        minValue: -10,
        minIsIncluded: false,
        maxValue: 10,
        maxIsIncluded: false,
      });
      replace(units);
    } else {
      const { uuid, multiplier, minValue, minIsIncluded, maxValue, maxIsIncluded, group } =
        units[Number(e.target.id.split('.')[0])];
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

  const handleDelete = async (uuid: string) => {
    await deleteMeasurementUnit(uuid);
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
                  defaultValue={units[i]?.name}
                />
                <Input
                  {...register(`fields.${i}.multiplier` as any)}
                  id={`${i}-multiplier`}
                  // onChange={() => {}}
                  key={`fields.${el.id}.multiplier`}
                  defaultValue={units[i]?.multiplier}
                />
                <Input
                  {...register(`fields.${i}.range` as any)}
                  id={`${i}-range`}
                  // onChange={() => {}}
                  readOnly
                  key={`fields.${el.id}.range`}
                  defaultValue={
                    units[i]
                      ? `${units[i]?.minIsIncluded ? '[' : '('} ${units[i]?.minValue}, ${
                          units[i]?.maxValue
                        } ${units[i]?.maxIsIncluded ? ']' : ')'}`
                      : ''
                  }
                />
                <DeleteBtn onClick={() => handleDelete(units[i].uuid)}>&times;</DeleteBtn>
              </Row>
            ))}
          </form>
        </InputWrapper>
        <AddButton onClick={onAdd}>
          <Plus />
        </AddButton>
        <Wrapper>
          <RangeInput
            leftValue={leftRangeValue}
            onChangeLeft={e => setLeftRangeValue(e.target.value)}
            onChangeRight={e => setRightRangeValue(e.target.value)}
            rightValue={rightRangeValue}
            // disabled
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
