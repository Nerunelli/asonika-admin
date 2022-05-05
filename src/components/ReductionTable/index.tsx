import React, { ChangeEvent, useEffect, useState } from 'react';
import { HeaderContainer, Header, Input, Container, AddButton, InputWrapper } from './styled';
import { Plus } from './styled';
import { IGroup } from '../../pages/Reductions';
import { api } from '../../api/useApi';
import { useFieldArray, useForm } from 'react-hook-form';

// eslint-disable-next-line no-unused-vars
const test = [
  {
    reduction: 'А',
    multiplier: '1',
    range: '[0, 1000)',
  },
  {
    reduction: 'кА',
    multiplier: '1000',
    range: '[1000, 100000)',
  },
  {
    reduction: 'мА',
    multiplier: '0.001',
    range: '[0.001, 1)',
  },
];

export interface IUnit {
  uuid: string;
  name: string;
  multiplier: number;
  min_value: number;
  min_is_included: boolean;
  max_value: number;
  max_is_included: boolean;
  group: IGroup;
}

interface IProps {
  group: IGroup;
}

export const ReductionTable: React.FC<IProps> = ({ group }) => {
  const { register, control, watch } = useForm();
  const { fields, replace } = useFieldArray({ control, name: 'fields' });
  const [units, setUnits] = useState<IUnit[]>([]);
  const [allUnits, setAllUnits] = useState<IUnit[]>([]);

  const getUnits = async () => {
    try {
      const res = await api.get<{ data: IUnit[] }>('/measurement/unit/');
      setAllUnits(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const createUnit = async (
    group: IGroup,
    name: string,
    multiplier: number,
    min_value: number,
    min_is_included: boolean,
    max_value: number,
    max_is_included: boolean,
  ): Promise<IUnit | null> => {
    try {
      const res = await api.post('/measurement/unit/', {
        group: group.uuid,
        // name: group.name,
        name,
        multiplier,
        min_value,
        min_is_included,
        max_value,
        max_is_included,
      });
      // eslint-disable-next-line no-console
      console.log(res.data.data);
      return res.data.data;
    } catch (e) {}

    return null;
  };

  useEffect(() => {
    getUnits().catch();
  }, []);

  useEffect(() => {
    setUnits(allUnits.filter(el => el.group.uuid === group.uuid));
  }, [group, allUnits]);

  useEffect(() => {
    replace(units);
  }, [units]);

  const onAdd = async () => {
    const newUnit = await createUnit(group, 'NAME', 0, -10, false, 10, false);
    if (newUnit) {
      setUnits(units => [
        ...units,
        {
          uuid: newUnit.uuid,
          name: newUnit.name,
          multiplier: newUnit.multiplier,
          min_value: newUnit.min_value,
          min_is_included: newUnit.min_is_included,
          max_value: newUnit.max_value,
          max_is_included: newUnit.max_is_included,
          group: newUnit.group,
        },
      ]);
    }
  };

  const updateUnit = async (
    e: ChangeEvent<HTMLInputElement>,
    // { uuid, name, multiplier, minValue, minIsIncluded, maxValue, maxIsIncluded, group }: IUnit,
  ) => {
    // eslint-disable-next-line no-console
    console.log(watch(`fields.${e.target.id}` as any));
    // if (e.target.id.split('-')[1] === 'reduction') {
    // try {
    //   await api.put<{ data: IUnit }>(`/measurement/unit/${uuid}/`, {
    //     name: e.target.value,
    //     multiplier,
    //     min_value: minValue,
    //     min_is_included: minIsIncluded,
    //     max_value: maxValue,
    //     max_is_included: maxIsIncluded,
    //     group: group.uuid,
    //   });
    // } catch (e) {}

    // setUnits(prev => {
    //   prev[Number(e.target.id.split('-')[0])].name = e.target.value;
    //   // eslint-disable-next-line no-console
    //   console.log(prev);
    //   return prev;
    // });
    // }
    // try {
    //   await api.put<{ data: IUnit }>(`/measurement/unit/${uuid}/`, {
    //     name,
    //     multiplier,
    //     min_value: minValue,
    //     min_is_included: minIsIncluded,
    //     max_value: maxValue,
    //     max_is_included: maxIsIncluded,
    //     group,
    //   });
    // } catch (e) {}
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
              <>
                <Input
                  {...register(`fields.${i}.reduction` as any)}
                  id={`${i}.reduction`}
                  // onChange={e => updateUnit(e)}
                  onBlur={e => updateUnit(e)}
                  key={`fields.${el.id}.reduction`}
                  defaultValue={units[i]?.name}
                />
                <Input
                  {...register(`fields.${i}.multiplier` as any)}
                  // id={`${i}-multiplier`}
                  // onChange={() => {}}
                  key={`fields.${el.id}.multiplier`}
                  defaultValue={units[i]?.multiplier}
                />
                <Input
                  {...register(`fields.${i}.range` as any)}
                  // id={`${i}-range`}
                  // onChange={() => {}}
                  key={`fields.${el.id}.range`}
                  defaultValue={units[i]?.min_value}
                />
              </>
            ))}
          </form>
        </InputWrapper>
        <AddButton onClick={onAdd}>
          <Plus />
        </AddButton>
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

// const addProducer = () => setSelected({ uuid: '', name: '', description: '' });

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

// const deleteUnit = async (uuid: string) => {
//   try {
//     await api.delete<{ data: IUnit }>(`/measurement/unit/${uuid}/`);
//   } catch (e) {}
// };

// const handleDelete = async (uuid: string) => {
//   setUnits(units => units.filter(el => el.uuid !== uuid));
//   await deleteUnit(uuid);
// };
