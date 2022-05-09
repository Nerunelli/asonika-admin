import React, { useEffect, useState } from 'react';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, ParamsContainer } from './styled';
import { ParamsItem } from '../../components/ParamsItem';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { EditParamForm } from '../../components/EditParamForm';
import { IParameter } from '../../data/parameters/types';
import { useEvent, useStore } from 'effector-react';
import { $parametersStore } from '../../data/parameters/stores';
import {
  createParameterFx,
  deleteParameterFx,
  loadAllParametersFx,
  updateParameterFx,
} from '../../data/parameters/effects';
import { IGroup } from '../../data/measurement/groups/types';
import { categoriesData } from '../../components/Groups/data';

export const Parameters: React.FC = () => {
  const [selected, setSelected] = useState<IParameter | null>();

  const parameters = useStore($parametersStore);

  const loadAllParameters = useEvent(loadAllParametersFx);
  const createParameter = useEvent(createParameterFx);
  const updateParameter = useEvent(updateParameterFx);
  const deleteParameter = useEvent(deleteParameterFx);

  useEffect(() => {
    loadAllParameters().catch(console.error);
  }, []);

  const addParam = () =>
    setSelected({
      uuid: '',
      name: '',
      description: '',
      type: 1,
      measurementGroup: { uuid: '', name: '', description: '' },
    });

  const onSelect = (param: IParameter) => {
    setSelected(param);
  };

  const handleSubmit = async (
    name: string,
    description: string,
    measurementGroup: IGroup,
    type: number,
  ) => {
    if (selected?.uuid) {
      updateParameter({
        uuid: selected.uuid,
        name,
        description,
        type,
        measurementGroup,
      });
    } else {
      const created = await createParameter({
        name,
        description,
        type,
        measurementGroup,
      });

      setSelected(created);
    }
  };

  const handleDelete = async (uuid: string) => {
    await deleteParameter(uuid);
    setSelected(null);
  };

  return (
    <>
      <Breadcrumbs data={[categoriesData.parameters]} />
      <ButtonsWrap>
        <Button onClick={addParam} width="220px">
          Добавить параметр
        </Button>
        {/* <Button variant="danger" width="220px"> */}
        {/*  Удалить выбранные */}
        {/* </Button> */}
      </ButtonsWrap>
      <ParamsContainer>
        {parameters.length ? (
          <ItemsContainer>
            {parameters.map((param, i) => (
              <ItemWrapper onClick={() => onSelect(param)} key={`paramItem-${param.name}${i}`}>
                <ParamsItem>{param.name}</ParamsItem>
              </ItemWrapper>
            ))}
          </ItemsContainer>
        ) : null}
        {selected && (
          <EditParamForm group={selected} handleSubmit={handleSubmit} handleDelete={handleDelete} />
        )}
      </ParamsContainer>
    </>
  );
};
