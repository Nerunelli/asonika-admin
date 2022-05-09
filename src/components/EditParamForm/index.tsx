import React, { useEffect, useState } from 'react';
import { Input } from '../../ui-kit/Input';
import { TextArea } from '../../ui-kit/TextArea';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrapper, Container, Wrapper } from './styled';
import { Select } from '../../ui-kit/Select';
import { api } from '../../api/api';
import { IParameter } from '../../data/parameters/types';
import { IGroup } from '../../data/measurement/groups/types';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type onSubmitFunc = (_data: {
  name: string;
  description: string;
  measurementGroup: IGroup;
  type: number;
}) => void;
type onDeleteFunc = (_uuid: string) => void;

interface IProps {
  onSubmit: onSubmitFunc;
  onDelete: onDeleteFunc;
  group: IParameter;
}

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    description: yup.string().required(),
    measurementGroup: yup.object().required(),
  })
  .required();

export const EditParamForm: React.FC<IProps> = ({ onSubmit, onDelete, group }) => {
  const [reductions, setReductions] = useState<IGroup[]>();
  // const [measurementGroup, setMeasurementGroup] = useState<IGroup>({
  //   uuid: '',
  //   name: '',
  //   description: '',
  // });
  // const [type] = useState(1);
  const { handleSubmit, control, setValue, reset } = useForm<{
    name: string;
    description: string;
    measurementGroup: IGroup;
    type: number;
  }>({
    resolver: yupResolver(schema),
  });

  const getMeasurementGroups = async () => {
    try {
      const res = await api.get<{ data: IGroup[] }>('/measurement/group/');
      setReductions(res.data.data);
    } catch (e) {}
  };

  useEffect(() => {
    getMeasurementGroups().catch(console.error);
  }, []);

  useEffect(() => {
    reset();
    setValue('name', group.name);
    setValue('description', group.description);
    setValue('measurementGroup', group.measurementGroup);
    setValue('type', 0);
    // setMeasurementGroup(group.measurementGroup);
  }, [group]);

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <Controller
            control={control}
            name="name"
            defaultValue={group.name}
            render={({ field: { value, onChange }, fieldState: { invalid } }) => (
              <Input
                label="Название *"
                placeholder="Введите текст"
                width="550px"
                value={value}
                onChange={onChange}
                hasError={invalid}
              />
            )}
          />
        </Wrapper>
        <Wrapper>Привязанная единица измерения:</Wrapper>
        <Wrapper>
          <Controller
            control={control}
            name="measurementGroup"
            defaultValue={{ uuid: '', description: '', name: '' }}
            render={({ field: { value, onChange }, fieldState: { invalid } }) => (
              <Select
                placeholder="Единица измерения"
                value={value}
                names={reductions}
                onChange={onChange}
                hasError={invalid}
              />
            )}
          />
        </Wrapper>
        <Wrapper>
          <Controller
            control={control}
            name="description"
            defaultValue={group.description}
            render={({ field: { value, onChange }, fieldState: { invalid } }) => (
              <TextArea
                labelText="Описание *"
                value={value}
                onChange={onChange}
                hasError={invalid}
              />
            )}
          />
        </Wrapper>
        <Wrapper>
          <Select placeholder="Тип поля" />
        </Wrapper>
        <ButtonsWrapper>
          <Button width="120px" isForm>
            Сохранить
          </Button>
          <Button onClick={() => onDelete(group.uuid)} width="120px" variant="danger">
            Удалить
          </Button>
        </ButtonsWrapper>
      </Container>
    </>
  );
};

// import React, { useEffect, useState } from 'react';
// import { Input } from '../../ui-kit/Input';
// import { TextArea } from '../../ui-kit/TextArea';
// import { Button } from '../../ui-kit/Button';
// import { IGroup } from '../../pages/Reductions';
// import { ButtonsWrapper, Container, Wrapper } from './styled';
// import { Select } from '../../ui-kit/Select';
// import { api } from '../../api/api';
// import { IParameter } from '../../data/parameters/types';
//
// type onSubmitFunc = (
//   _name: string,
//   _description: string,
//   _measurementGroup: IGroup,
//   _type: number,
// ) => void;
// // eslint-disable-next-line no-unused-vars
// type onDeleteFunc = (uuid: string) => void;
//
// interface IProps {
//   handleSubmit: onSubmitFunc;
//   handleDelete: onDeleteFunc;
//   group: IParameter;
// }
//
// export const EditParamForm: React.FC<IProps> = ({ handleSubmit, handleDelete, group }) => {
//   const [name, setName] = useState('');
//   const [reductions, setReductions] = useState<IGroup[]>();
//   const [description, setDescription] = useState('');
//   // eslint-disable-next-line no-unused-vars
//   const [measurementGroup, setMeasurementGroup] = useState<IGroup>({
//     uuid: '',
//     name: '',
//     description: '',
//   });
//   const [type] = useState(1);
//
//   const getMeasurementGroups = async () => {
//     try {
//       const res = await api.get<{ data: IGroup[] }>('/measurement/group/');
//       setReductions(res.data.data);
//     } catch (e) {}
//   };
//
//   useEffect(() => {
//     getMeasurementGroups().catch(console.error);
//   }, []);
//
//   useEffect(() => {
//     setName(group.name);
//     setDescription(group.description);
//     setMeasurementGroup(group.measurementGroup);
//   }, [group]);
//
//   return (
//     <>
//       <Container
//         onSubmit={e => {
//           handleSubmit(name, description, measurementGroup, type);
//           e.preventDefault();
//         }}
//       >
//         <Wrapper>
//           <Input
//             label="Название"
//             placeholder="Введите текст"
//             width="550px"
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//         </Wrapper>
//         <Wrapper>Привязанная единица измерения:</Wrapper>
//         <Wrapper>
//           <Select
//             placeholder="Единица измерения"
//             value={measurementGroup.name}
//             names={reductions}
//             onChange={value => {
//               setMeasurementGroup(value);
//             }}
//           />
//         </Wrapper>
//         <Wrapper>
//           <TextArea value={description} onChange={e => setDescription(e.target.value)} />
//         </Wrapper>
//         <Wrapper>
//           <Select placeholder="Тип поля" />
//         </Wrapper>
//         <ButtonsWrapper>
//           <Button width="120px" isForm>
//             Сохранить
//           </Button>
//           <Button onClick={() => handleDelete(group.uuid)} width="120px" variant="danger">
//             Удалить
//           </Button>
//         </ButtonsWrapper>
//       </Container>
//     </>
//   );
// };
